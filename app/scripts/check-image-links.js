// Checks every Cloudinary image URL referenced in src/data/portfolio.ts
// actually resolves. portfolio.ts is a point-in-time snapshot written by
// fetch-cloudinary-urls.js — if an asset is later renamed/deleted/moved in
// the Cloudinary dashboard, nothing in the app catches that automatically,
// so a stale entry just 404s in production.
//
// Run manually:
//   npm run check:images
//
// Also run on a schedule via .github/workflows/check-images.yml so drift
// gets caught even when nobody touches portfolio.ts for a while.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '..', 'src', 'data', 'portfolio.ts');
const CONCURRENCY = 16;

function extractImageUrls(fileContents) {
  const urls = new Set();
  for (const match of fileContents.matchAll(/image:\s*'([^']+)'/g)) {
    urls.add(match[1]);
  }
  return [...urls];
}

async function checkUrl(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    if (response.ok) return null;
    // Some CDNs don't support HEAD cleanly — retry with GET before flagging.
    if (response.status === 405 || response.status === 403) {
      const getResponse = await fetch(url, { method: 'GET' });
      if (getResponse.ok) return null;
      return { url, status: getResponse.status };
    }
    return { url, status: response.status };
  } catch (err) {
    return { url, status: `error: ${err.message}` };
  }
}

async function checkAll(urls) {
  const broken = [];
  let index = 0;

  async function worker() {
    while (index < urls.length) {
      const url = urls[index++];
      const result = await checkUrl(url);
      if (result) broken.push(result);
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  return broken;
}

async function main() {
  const fileContents = fs.readFileSync(DATA_FILE, 'utf8');
  const urls = extractImageUrls(fileContents);

  console.log(`Checking ${urls.length} image URL(s) from ${path.relative(process.cwd(), DATA_FILE)}...`);

  const broken = await checkAll(urls);

  if (broken.length === 0) {
    console.log('All image URLs resolved successfully.');
    return;
  }

  console.error(`\n${broken.length} broken image URL(s):\n`);
  for (const { url, status } of broken) {
    console.error(`  [${status}] ${url}`);
  }
  process.exitCode = 1;
}

main().catch((err) => {
  console.error(`\nError: ${err.message}`);
  process.exit(1);
});
