# NeuroForge AI Website

A modern, responsive static site for an AI startup offering industrial manufacturing AI solutions and website AI integrations.

## Develop locally
- Use any static server from the `site` directory. Examples:

```bash
# Python 3
cd site && python3 -m http.server 8080
# Node.js
cd site && npx serve -s -l 8080
```

Open `http://localhost:8080`.

## Structure
- `site/index.html`: Homepage with About, Services, Case Studies, Contact, and Blog CTA
- `site/blog/`: Blog index and sample posts
- `site/assets/`: Logo and favicon
- `site/styles.css`, `site/scripts.js`: Global styles and behavior
- `site/manifest.json`, `site/robots.txt`, `site/sitemap.xml`: SEO & PWA

## Customize
- Update brand name, copy, and contact details in `index.html`
- Replace images/OG links with your own assets
- Wire `scripts.js` form submit to your backend `/api/contact`

## Deploy
- Any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages). Deploy the `site` folder as the web root.
