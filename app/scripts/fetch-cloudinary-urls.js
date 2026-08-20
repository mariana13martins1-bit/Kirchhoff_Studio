// Standalone helper: fetch every asset under a Cloudinary folder and append
// them as new portfolioItems entries in src/data/portfolio.ts.
//
// Not part of the app build/dev server — run manually whenever you add new
// photos to a Cloudinary folder:
//
//   node scripts/fetch-cloudinary-urls.js <folder-prefix> --category=brands [--subcategory=jungle_mate] [--subsubcategory=vol1] [--size=medium]
//
// Example:
//   node scripts/fetch-cloudinary-urls.js jungle-mate/vol1 --category=brands --subcategory=jungle_mate --subsubcategory=vol1
//
// Requires CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
// in .env (NOT the VITE_-prefixed vars — those get bundled into client code,
// the API secret must never end up there).

import 'dotenv/config';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '..', 'src', 'data', 'portfolio.ts');

function parseArgs(argv) {
  const [folder, ...rest] = argv;
  const flags = {};
  for (const arg of rest) {
    const match = arg.match(/^--([\w-]+)=(.*)$/);
    if (!match) {
      throw new Error(`Unrecognized argument "${arg}". Flags must look like --category=brands.`);
    }
    flags[match[1]] = match[2];
  }
  return { folder, flags };
}

function requireEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing ${name} in .env. Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY and ` +
      `CLOUDINARY_API_SECRET to app/.env (see .env.example) before running this script.`
    );
  }
  return value;
}

// Uses the Search API against `asset_folder` rather than api.resources()'s
// public_id `prefix` matching. Cloudinary accounts with "dynamic folders"
// enabled store folder placement as separate metadata — the public_id often
// won't contain the folder path at all (e.g. `DSC_6563_dwqeon`, no slash),
// so prefix matching silently finds nothing even when assets exist.
async function fetchAllResources(folder) {
  const resources = [];
  let nextCursor;

  do {
    const response = await cloudinary.search
      .expression(`asset_folder:"${folder}*"`)
      .max_results(500)
      .next_cursor(nextCursor)
      .execute();
    resources.push(...response.resources);
    nextCursor = response.next_cursor;
  } while (nextCursor);

  return resources;
}

function deriveFolder(publicId) {
  const lastSlash = publicId.lastIndexOf('/');
  return lastSlash === -1 ? '' : publicId.slice(0, lastSlash);
}

function deriveTitle(publicId) {
  const filename = publicId.slice(publicId.lastIndexOf('/') + 1);
  return filename
    .replace(/[_-]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function readNextId(fileContents, category) {
  const itemPattern = /\{\s*id:\s*(\d+)[^}]*?category:\s*'([^']+)'[^}]*?\}/g;
  let maxForCategory = null;
  let maxOverall = 0;
  let match;
  while ((match = itemPattern.exec(fileContents))) {
    const id = Number(match[1]);
    const itemCategory = match[2];
    maxOverall = Math.max(maxOverall, id);
    if (itemCategory === category) {
      maxForCategory = maxForCategory === null ? id : Math.max(maxForCategory, id);
    }
  }
  if (maxForCategory !== null) {
    return { nextId: maxForCategory + 1, inferredBand: true };
  }
  return { nextId: maxOverall + 1, inferredBand: false };
}

function formatItem({ id, image, title, category, subcategory, subsubcategory, size }) {
  const parts = [
    `id: ${id}`,
    `image: '${image}'`,
    `title: '${title.replace(/'/g, "\\'")}'`,
    `category: '${category}'`,
  ];
  if (subcategory) parts.push(`subcategory: '${subcategory}'`);
  if (subsubcategory) parts.push(`subsubcategory: '${subsubcategory}'`);
  parts.push(`size: '${size}'`);
  return `  { ${parts.join(', ')} },`;
}

async function main() {
  const { folder, flags } = parseArgs(process.argv.slice(2));

  if (!folder) {
    throw new Error('Usage: node scripts/fetch-cloudinary-urls.js <folder-prefix> --category=<category> [--subcategory=<id>] [--subsubcategory=<id>] [--size=<size>]');
  }
  if (!flags.category) {
    throw new Error('Missing required --category=<category> flag (e.g. --category=brands).');
  }

  cloudinary.config({
    cloud_name: requireEnv('CLOUDINARY_CLOUD_NAME'),
    api_key: requireEnv('CLOUDINARY_API_KEY'),
    api_secret: requireEnv('CLOUDINARY_API_SECRET'),
    secure: true,
  });

  console.log(`Fetching assets under "${folder}"...`);
  const resources = await fetchAllResources(folder);

  if (resources.length === 0) {
    console.log(`No assets found under "${folder}". Nothing to write.`);
    return;
  }

  const assets = resources
    .map((r) => ({
      publicId: r.public_id,
      secureUrl: r.secure_url,
      createdAt: r.created_at,
      folder: r.asset_folder ?? deriveFolder(r.public_id),
    }))
    .sort((a, b) => a.folder.localeCompare(b.folder) || a.createdAt.localeCompare(b.createdAt));

  const fileContents = fs.readFileSync(DATA_FILE, 'utf8');
  const alreadyPresent = new Set(
    [...fileContents.matchAll(/image:\s*'([^']+)'/g)].map((m) => m[1])
  );

  const { nextId, inferredBand } = readNextId(fileContents, flags.category);
  let id = nextId;

  const newLines = [];
  let skipped = 0;
  for (const asset of assets) {
    if (alreadyPresent.has(asset.secureUrl)) {
      skipped++;
      continue;
    }
    newLines.push(formatItem({
      id: id++,
      image: asset.secureUrl,
      title: deriveTitle(asset.publicId),
      category: flags.category,
      subcategory: flags.subcategory,
      subsubcategory: flags.subsubcategory,
      size: flags.size || 'medium',
    }));
  }

  if (newLines.length === 0) {
    console.log(`All ${assets.length} asset(s) under "${folder}" are already in portfolio.ts. Nothing to write.`);
    return;
  }

  const closingIndex = fileContents.lastIndexOf('];');
  if (closingIndex === -1) {
    throw new Error(`Could not find the closing "];" of portfolioItems in ${DATA_FILE}.`);
  }

  const header = `\r\n  // ${folder} (added ${new Date().toISOString().slice(0, 10)})\r\n`;
  const insertion = header + newLines.join('\r\n') + '\r\n';
  const updated = fileContents.slice(0, closingIndex) + insertion + fileContents.slice(closingIndex);

  fs.writeFileSync(DATA_FILE, updated, 'utf8');

  console.log(`Added ${newLines.length} item(s) to ${path.relative(process.cwd(), DATA_FILE)} (ids ${nextId}-${id - 1}).`);
  if (!inferredBand) {
    console.log(`Note: no existing "${flags.category}" items found to match an id band against — continued from the file's overall max id instead.`);
  }
  if (skipped > 0) {
    console.log(`Skipped ${skipped} asset(s) already present in portfolio.ts.`);
  }
  console.log(`Sizes default to 'medium' — hand-tune a few to 'large'/'wide' for masonry variety.`);
}

main().catch((err) => {
  console.error(`\nError: ${err.message}`);
  process.exit(1);
});
