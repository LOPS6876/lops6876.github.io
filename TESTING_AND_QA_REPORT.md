# SOVIRA GLOBAL Testing and QA Report

## Build summary

- Build type: static GitHub Pages website
- Pages generated: 54 HTML files
- Core product pages: Jaggery Powder, Jaggery Cubes, Premium Makhana, Flavoured Makhana, Tea Premix, Dehydrated Onion Flakes, Dehydrated Garlic Flakes, Sugarcane Bagasse Products
- Legacy URLs preserved with simplified compatibility pages where useful
- Optimized image assets: 132 total
  - 44 AVIF
  - 44 WebP
  - 44 JPEG fallbacks
- Largest checked production asset: below 250 KB
- Contact method: static GitHub Pages mailto + WhatsApp CTA

## Automated static QA

Result: PASS

- HTML files scanned: 54
- Internal links checked: 2,412
- Anchor links checked: 439
- Broken internal links: 0
- Missing image files: 0
- Missing srcset image files: 0
- Images checked in HTML: 200
- Missing alt text: 0
- Pages with exactly one H1: PASS
- Meta title and description: PASS
- Canonical URLs: PASS
- JSON-LD schema parsing: PASS
- Form labels: PASS
- Required files present: styles.css, main.js, favicon, robots.txt, sitemap.xml
- Unverified certification words blocked: PASS; no ISO/FSSAI/USDA/FDA/HACCP/BRC/APEDA claims were added.

## Code QA

Result: PASS

- JavaScript syntax check: PASS
- CSS brace balance: PASS
- CSS responsive breakpoints present: PASS
- Reduced-motion support present: PASS
- Mobile navigation behavior present: PASS
- Sticky CTA hidden at top and revealed after scroll: PASS

## Render and responsive checks

Headless Chromium was blocked from direct localhost/file navigation by the execution environment policy, so a controlled inline render harness was used with the same HTML, CSS and JS. Static file checks verified the production asset paths separately.

Viewport checks performed:

- Desktop 1366 × 1000: PASS; no horizontal overflow
- Tablet 820 × 1180: PASS; no horizontal overflow; mobile/tablet nav active
- Mobile 390 × 900: PASS; no horizontal overflow; nav toggle visible
- Small mobile 320 × 760: PASS; no horizontal overflow; nav toggle visible
- Mobile menu toggle: PASS
- Sticky mobile CTA: PASS; hidden at top and appears after scroll

## Accessibility checks

Result: PASS for implemented automated/static checks

- Skip-to-content link present
- Semantic landmarks present: header, nav, main, sections, footer
- Form fields labelled
- Button and link roles used appropriately
- Focus-visible styling present
- Reduced motion support present
- Alt text present on product and brand images
- Touch-friendly primary CTAs included

## SEO checks

Result: PASS

- Unique page titles and meta descriptions
- Canonical URLs based on https://lops6876.github.io
- Open Graph and Twitter card tags
- Organization schema
- Product schema on product detail pages
- FAQ schema on homepage and FAQ page
- sitemap.xml generated
- robots.txt generated
- Descriptive image alt text and optimized file names

## Performance checks

Result: PASS for build-level optimization

- AVIF, WebP and JPEG fallbacks generated
- Responsive srcset and sizes attributes added
- Hero image preloaded
- Non-critical images lazy-loaded
- Width and height attributes set to reduce CLS
- No third-party fonts or heavy external libraries
- Minimal JavaScript
- No large assets above the 250 KB QA threshold

## Recommended live QA after deployment

After uploading to GitHub Pages, run Lighthouse and check real devices/browsers:

- Chrome desktop and Android
- Safari desktop and iPhone
- Firefox desktop
- Edge desktop
- Samsung Browser Android

This final live QA should confirm network delivery, CDN behavior, GitHub Pages cache behavior and real-browser image format selection.
