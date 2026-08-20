# Portfolio Section: Sidebar Filter Layout

## Context

`PortfolioSection.tsx` currently shows a top header (title + tagline) with a
horizontal scrollable filter bar, followed by a masonry grid (mixed tile
sizes: small/medium/large/wide) with a hover gradient caption.

The user wants the layout restructured to resemble a reference screenshot: a
persistent left-hand vertical filter list running alongside a clean,
uniform-column image grid — an editorial/gallery-wall look, while keeping the
site's existing dark, minimal, uppercase-tracked-type aesthetic.

## Design

### Layout structure

- The existing top header block (serif "Portfolio" title + "Danish eyes,
  global perspectives" tagline) stays as-is, full width, unchanged.
- Below it, on `lg+` screens the section splits into two columns:
  - **Left sidebar (~240–280px):** the vertical filter list only (All Work,
    Sports, Portraits, Couples, Brands). No branding/logo/social/copyright
    inside it — that content already lives in the Hero section's nav and
    isn't duplicated here.
  - **Right:** the image grid.
- The sidebar is `sticky` (`lg:sticky lg:top-32 lg:self-start`) so it stays
  in view for the vertical height of the grid, then scrolls away normally
  once the grid ends and the About section begins. It is not fixed relative
  to the viewport beyond the section's own scroll range.

### Filter list styling

- Vertical stack, generous spacing between items (larger gap than the
  current horizontal `gap-8`, since it's now a column).
- `text-[9–10px] uppercase tracking-[0.3em]`, consistent with existing type
  scale.
- Active: solid white text. Inactive: `text-white/40`. Hover: `text-white/70`.
- Drop the underline-on-active treatment (doesn't read well vertically);
  color/weight alone signals state.

### Grid changes

- Move from masonry (mixed `small/medium/large/wide` sizes) to a uniform
  2-column grid (`grid-cols-1 sm:grid-cols-2`) with a consistent aspect
  ratio per tile.
- Tighten the gap from the current `gap-8` to a tighter gallery-wall spacing
  (`gap-2 md:gap-3`).
- Keep the hover caption (title + category) but make it more restrained:
  smaller text, gradient confined closer to the bottom edge instead of the
  current tall gradient.
- The `size` field on `PortfolioItem` becomes unused for layout purposes.
  Leave it in `data/portfolio.ts` rather than removing it (out of scope —
  avoids an unrelated data-shape change).

### Responsive behavior (below `lg`)

- Sidebar collapses back into a horizontal scrollable filter row above the
  grid, matching today's existing mobile pattern — no sticky/fixed behavior
  on mobile.
- Grid becomes a single column.

### Out of scope / unchanged

- Filtering logic/state (`activeVibe`, `filteredItems` memo).
- GSAP scroll-in animation for grid items.
- Image loading, `srcSet`/`sizes`, Cloudinary URL logic.
- Analytics event (`portfolio_filter`) on filter click.
- Section id/anchor (`#portfolio`), used by Hero nav link.

## Testing

Manual verification via dev server: confirm sticky sidebar behavior while
scrolling through the grid on desktop widths, confirm mobile collapse to
horizontal filter row + single-column grid, confirm filter clicks still
animate/filter correctly, confirm no visual regression in surrounding
sections.
