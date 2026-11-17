# Kingston Crowley Veterinary: website

A plain static website: HTML, CSS and a little JavaScript. No WordPress, database or build step.
You can host it anywhere and edit it with any text editor.

## Preview locally
Double-click `index.html` in the project root (the folder above `site/`), or for a more realistic preview run one of these from the project root:

```
python -m http.server 8000      # then open http://localhost:8000
npx serve .
```

## Hosting (pick one)
The website is `index.html` (project root) plus the `site/` folder. Always upload both together, keeping the same layout:

| Host | How |
|---|---|
| **Netlify** (free) | Put `index.html` and `site/` in one folder and drag it onto https://app.netlify.com/drop |
| **Cloudflare Pages** (free) | Upload a folder containing `index.html` + `site/` (or connect the Git repo with the project root as the output dir) |
| **GitHub Pages** (free) | Push to the repo; `.github/workflows/deploy-pages.yml` publishes `index.html` + `site/` automatically |
| **Any web host / cPanel** | Upload `index.html` and the `site/` folder into `public_html` via FTP or File Manager |

Then point your domain's DNS at the host.

## Files
```
../index.html   Home (lives in the project root, links into site/)
about.html      About + team (bios are the <dialog> blocks at the bottom)
services.html   Services
contact.html    Contact details, map, contact form
book.html       Calendly booking buttons
assets/css/styles.css   All styling (brand colours are at the top in :root)
assets/js/main.js       Menu, animations, bio pop-ups, open/closed status, form, icons
assets/img/             Logos, photos, favicon
```

## Common edits
- **Phone, address or hours:** these appear in the header, footer and contact sections of every page, so search and replace across all 5 HTML files.
  The live "Open now / Closed" badge reads its times from `HOURS` in `assets/js/main.js`.
- **Team member:** copy an existing `team-card` button and its matching `<dialog id="bio-…">` in `about.html`, and add the photo to `assets/img/`.
- **Booking links:** change the four Calendly URLs in `book.html`. Each URL appears twice per button: `href` and `data-calendly`.
- **Contact form:** see below.

## Contact form setup (required for messages to arrive)
A static site can't send email by itself. The form is ready for **Formspree** (free tier):
1. Sign up at https://formspree.io and create a form using the practice email.
2. Copy the form ID (e.g. `xyzabcd`) and replace `YOUR_FORM_ID` in `contact.html`.

Until you do this, submitting the form shows a friendly "please call us" message.
*On Netlify you can use Netlify Forms instead: add `data-netlify="true"` and `name="contact"` to the `<form>` and remove the `action`.*

## Outstanding content
- Biography (and surname) for **Pauline** (Reception & Veterinary Support). See the TODO comment in `about.html`.
- Practice email address and Eircode (optional).
