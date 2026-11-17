# Kingston Crowley Veterinary: website

A plain static website: HTML, CSS and a little JavaScript. No WordPress, database or build step.
You can host it anywhere and edit it with any text editor.

## Preview locally
Double-click `index.html`, or for a more realistic preview run one of these in this folder:

```
python -m http.server 8000      # then open http://localhost:8000
npx serve .
```

## Hosting (pick one)
Each of these hosts the whole `site` folder:

| Host | How |
|---|---|
| **Netlify** (free) | Drag & drop the `site` folder onto https://app.netlify.com/drop |
| **Cloudflare Pages** (free) | Create a project and upload the `site` folder (or connect a Git repo with `site` as the output dir) |
| **GitHub Pages** (free) | Push to a repo and enable Pages for the folder |
| **Any web host / cPanel** | Upload the contents of `site/` into `public_html` via FTP or File Manager |

Then point your domain's DNS at the host.

## Files
```
index.html      Home
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
