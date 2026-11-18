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
book.html       Appointment request form (emails the practice; staff phone back)
assets/css/styles.css   All styling (brand colours are at the top in :root)
assets/js/main.js       Menu, animations, bio pop-ups, open/closed status, form, icons
assets/img/             Logos, photos, favicon
```

## Common edits
- **Phone, address or hours:** these appear in the header, footer and contact sections of every page, so search and replace across all 5 HTML files.
  The live "Open now / Closed" badge reads its times from `HOURS` in `assets/js/main.js`.
- **Team member:** copy an existing `team-card` button and its matching `<dialog id="bio-…">` in `about.html`, and add the photo to `assets/img/`.
- **Appointments:** the practice books by phone only (022 21258). `book.html` is a request form that emails the practice so staff can call the owner back. Services pages can pre-select a service with `book.html?service=consult` (also `vacc`, `surgery`, `postop`, `repeat`, `food`, `other`).
- **Contact form:** see below.

## Where form emails go (contact + appointment request)
A static site can't send email by itself, so both forms use **FormSubmit** (free, no account needed).
The destination address is at the end of each form's `action` URL:

```
contact.html  ->  action="https://formsubmit.co/ajax/raykingston@hotmail.com"
book.html     ->  action="https://formsubmit.co/ajax/raykingston@hotmail.com"
```

1. **Activate once:** the first time a form is submitted from the live site, FormSubmit emails that address an
   "Activate Form" link. Click it; until then submissions show an error asking people to phone.
   Check the junk folder if it doesn't arrive.
2. **Hide the address (recommended):** after activating, FormSubmit sends a random alias string. Replace the email
   in both `action` URLs with that string so the address isn't visible in the page source.
3. **Change the inbox later** (e.g. to the practice email): put the new address in both `action` URLs, push, and activate again.

Emails arrive as a table with a subject like "Request appointment - Vaccination - Mary Murphy" (set by `data-subject` on the form); replying goes straight to the owner.
*Formspree also works: use `https://formspree.io/f/<id>` as the action instead.*

## Outstanding content
- Practice email address for the forms (currently a personal address), and Eircode (optional).
- Online booking may move to the Petstoria booking system in future.
