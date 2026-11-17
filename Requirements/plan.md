# Kingston Crowley Veterinary — Website Rebuild Plan

## Goal

Replace the WordPress.com site with a **clean, modern, static website** (plain HTML/CSS/JS, no build step, no CMS)
that can be hosted anywhere: Netlify, GitHub Pages, Cloudflare Pages, any shared web host, or opened straight from disk.

The new site lives in [`/site`](../site). Upload the contents of that folder to any host and it works.

---

## 1. What was extracted from the old website (`/Old Website`)

### Pages
| Old page | Content found | Keep? |
|---|---|---|
| Home | Hero banner with logo, "Small Animal Vet Services" (Emergency Care, Vaccination, Surgeries), About blurb, 3 Google reviews, contact form | Yes, redesigned |
| About | "Meet the team" intro, team grid. Ger & Crowley are real; **"Zuri Ndlovu – Engineer" and "Leila Haddad – Designer" are WordPress template placeholders** | Yes, rebuilt with real team + bios |
| Services | "Pet Consultation", urgent care, same-day appointments, after-hours | Yes, expanded using staff skills |
| Contact | Address, opening hours, Google Map, contact form | Yes |
| Book Appointment | 4 Calendly popup buttons | Yes |

### Practice details
- **Name:** Kingston Crowley Veterinary
- **Address:** 15 Beecher St, Lackanalooha, Mallow, Co. Cork, just off Main Street, easy to reach by car or on foot
- **Phone:** 022 21258 *(taken from the shop sign in the photos; the old contact page only said "(021)")*
- **Map coordinates:** 52.1415852, -8.6510727
- **Hours:**
  - Monday – Friday: 10am – 5.30pm
  - Saturday: 10am – 1pm
  - Small animal drop-in clinic: Mon – Thurs, 6 – 7pm or by appointment
  - Out of hours: 24/7 for emergencies only

### Reviews (Google, 5/5)
- **Sarah Harris:** "Got an appointment the same day I rang, all the staff were lovely and so helpful. Thank you."
- **Marian Avery:** "A brilliant practice! Very kind and caring staff. They take excellent care of my elderly cat who has recurring ear/vestibular problems."
- **Mo:** "Ger saw my cat after hours on a Sunday evening. Super vet to deal with and brilliant treatment for my cat who had been bitten by a dog. Thanks Ger."

### Online booking (Calendly)
| Service | Calendly link |
|---|---|
| Pet Consultation | `calendly.com/raykingston-qu5h/pet-consultation-clone` |
| Vaccination | `calendly.com/raykingston-qu5h/pet-vaccination-clone` |
| Operation | `calendly.com/raykingston-qu5h/30min` |
| Post-Op Check | `calendly.com/raykingston-qu5h/post-op-check-clone` |

> ⚠️ On the old site the buttons were **wired to the wrong links** (for example, "Pet Consultation" opened the vaccination calendar).
> The new site matches each button to the link whose name fits. "Operation" gets the generic `30min` link because it's the only one left.

### Brand assets (all reused)
| Asset | Source file | Used for |
|---|---|---|
| Emblem logo (dog + cat + vet "V") | `Old Website/kingston-crowley-vet-logo.jpeg` | Footer, favicon, About section badge |
| Stethoscope wordmark | `Old Website/home_files/logo.jpg` | Header logo |
| Hero banner (dog, cat, cow, paw logo) | `Old Website/landing page template.jpg` | Home page hero |
| Exam room photo | `home_files/kingston-crowley-veterinary-6978afa8d9107.png` | Services page |
| Reception photo | `About_files/kingston-crowley-veterinary-6978afa9182e5.png` | About / contact |
| Building photo | `Requirements/Veterinary Building.jpg` | Home "About" section, Contact |

### Brand colours (taken from the logos and uniforms)
- Navy `#14284b` (wordmark text)
- Green `#3f7d34` (the "VETERINARY" text and the paw)
- Teal `#1d6f86` (staff scrubs and the shop sign)
- Warm cream `#f7f3ec` (building frontage) for soft section backgrounds

---

## 2. Team (from `/Requirements/Employees`)

| Name | Role | Photos | Key skills / interests |
|---|---|---|---|
| **Gerard (Ger) Kingston** | Veterinary Surgeon | Portrait, Ger examining a dog | Qualified 1991, 35+ years in Mallow, mixed practice, small & large animals |
| **Kenneth Crowley** | Veterinary Surgeon \| Practice Director | Portrait | Mixed practice, farm animal medicine, herd health & productivity, companion animals (especially dogs & cats). *Bio updated at Kenneth's request; see below* |
| **Pauline Fitzgerald** | Veterinary Nurse | Nursing photo with a cat | UCD-qualified (2005), in the sector since 1997, equine & mixed practice, surgery and recovery care, fosters rescue animals |
| **Deirdre Cremin** | Reception & Veterinary Support | Portrait, at reception | Animal Care & Animal Science (St. John's Central College), farm background, TB testing support, pony racing |
| **Pauline** (folder "Pauline B") | Reception & Veterinary Support *(assumed)* | Portrait | **No biography supplied** |

Each team member gets a card with a photo, name, role and skill tags. Clicking "Read bio" opens the full biography in a pop-up.

### Approved biography: Kenneth Crowley
> Kenneth asked for personal information to be removed from his bio. This approved version replaces the original everywhere:
> the website, `Biographies.txt` and this plan. Do not reintroduce family, hobby or pet details.

**Kenneth Crowley**
*Veterinary Surgeon | Practice Director*

Kenneth grew up on a farm surrounded by animals, including cattle, horses, dogs and cats. From a very young age, he dreamed of becoming a veterinary surgeon, inspired by the vets who visited the family farm. He admired their knowledge, skill and the remarkable work they carried out caring for animals.

That childhood ambition developed into a lifelong passion for veterinary medicine. Kenneth has gained extensive experience in mixed veterinary practice and has a particular interest in both farm animal medicine and the care and treatment of companion animals, especially dogs and cats.

As a director of Kingston Crowley Veterinary, Kenneth enjoys the variety that mixed veterinary practice brings, from working closely with farmers to improve herd health and productivity to caring for much-loved family pets. He takes great pride in the relationships he has built with clients over the years and is committed to providing practical, professional and compassionate veterinary care.

### ❓ Questions for you about the team
1. **Pauline B** has a photo but no biography. `Biographies.txt` has an empty "Reception & Veterinary Support" heading, so I've assumed that's her role.
   For now her card shows only name and role. Send a bio and surname when you have them.
2. **Please check the two Pauline photos.** The bio says Pauline Fitzgerald has worked in the sector since 1997.
   Make sure the photo in the `Pauline Fitzgerald` folder (nurse with a cat) and the one in `Pauline B` (in front of the sign) haven't been swapped.
   If they have, swap the two `src` paths in `site/about.html`.

---

## 3. Site structure

```
site/
├── index.html        Home
├── about.html        About us + full team & biographies
├── services.html     Companion animal, farm animal, emergency services
├── contact.html      Address, hours, map, contact form
├── book.html         Online booking (Calendly)
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── img/          Logos, team photos, building (resized for web)
└── README.md         How to host / edit
```

### Page contents
**Home**
1. Sticky header: wordmark logo, navigation, "Call 022 21258" and "Book" buttons
2. Hero: the original banner with the logo, tagline "Caring for pets & farm animals in Mallow since 1991", and Book / Call buttons
3. Highlights strip: 35+ years' experience · Mixed practice · Same-day appointments · 24/7 emergencies
4. Services preview (3 cards: Companion Animals, Farm & Large Animals, Emergency Care)
5. About split section: building photo plus practice story
6. "Meet the team" preview: 5 portrait cards linking to About
7. Google reviews
8. Hours, address and map, with a closing call to action
9. Footer: emblem logo, address, hours, quick links

**About:** intro, practice values, full team grid with bio pop-ups, photos of the practice

**Services**, grouped by the skills the team actually has:
- *Companion animals:* consultations, vaccinations, surgery (operations), post-op checks, nursing & recovery care, drop-in clinic
- *Farm & large animals:* dairy herd health, fertility, mastitis control, preventative medicine & disease prevention, TB testing, equine experience
- *Emergency care:* 24/7 out-of-hours emergencies, same-day appointments

**Contact:** contact cards (phone, address, hours), embedded Google Map, contact form

**Book:** 4 booking cards that open Calendly in a pop-up, plus "prefer to call?" info

---

## 4. Design direction

- **Clean & modern:** lots of white space, rounded corners, soft shadows, plenty of real photography
- **Fonts:** *Marcellus* for headings (close to the logo's lettering) and *Albert Sans* for body text (the old site used it too)
- **Responsive:** mobile-first, with a hamburger menu on phones
- **Touches:** subtle scroll-reveal animations, hover lift on cards, sticky header that shrinks on scroll, mobile "Call now" bar
- **Accessible:** semantic HTML, alt text on every image, keyboard-friendly pop-ups, good colour contrast, respects reduced-motion settings
- **SEO:** page titles and descriptions, Open Graph tags, and `VeterinaryCare` schema.org data (address, hours, phone, geo) so Google shows rich results

---

## 5. Hosting & things that need a decision

| Item | Status | What to do |
|---|---|---|
| Hosting | Ready | Upload `/site` to any static host. See `site/README.md` |
| Contact form | **Needs setup** | Static hosts can't send email on their own. The form is wired for [Formspree](https://formspree.io) (free tier): create a form and replace `YOUR_FORM_ID` in `contact.html` and `index.html`. Until then the form shows a "please call us" message. On Netlify, add `data-netlify="true"` instead |
| Email address | **Unknown** | No practice email in the backup. Add one to the footer and contact page if you want |
| Eircode | **Unknown** | Add it to the address if you want |
| Calendly account | Uses existing `raykingston-qu5h` links | Change the 4 URLs in `book.html` if the practice moves to its own account |
| Domain | — | Point your domain's DNS at whichever host you pick |

---

## 6. Build steps

1. [x] Extract content, assets and colours from the old site
2. [x] Read the team biographies and photos
3. [x] Write this plan
4. [x] Copy and resize images into `site/assets/img`
5. [x] Build the shared CSS design system and JS (nav, reveal animations, bio pop-ups, form)
6. [x] Build the 5 pages
7. [x] Check links, images and layout on desktop & mobile
8. [x] Write `site/README.md` with hosting instructions

---

## 7. Change log & fixes

| Date | Issue | Fix | Status |
|---|---|---|---|
| 2026-11-17 | **Team bio pop-up could not be scrolled.** Longer biographies (e.g. Kenneth's) ran off the bottom of the pop-up, so the rest couldn't be read. | The pop-up's text area had no height limit, so it grew past the window and the bottom was cut off. In `assets/css/styles.css`, the bio text panel now has a height limit and scrolls inside the pop-up, with the photo staying fixed beside it. On phones (under 760px wide) the whole pop-up scrolls, photo first. Uses `dvh` units so mobile browser toolbars don't hide the end of the text. The text panel is also keyboard-focusable (`tabindex="0"`), so it can be scrolled with arrow keys or Page Down. | ✅ Fixed and tested. All 4 bios scroll to their last paragraph on desktop (1280×700, 1280×900) and mobile (520×800) |
| 2026-11-17 | **Kenneth asked for personal information to be removed from his biography.** | Replaced his bio with the approved version (above) in `site/about.html`, and changed his title to "Veterinary Surgeon \| Practice Director" on the About and Home team cards. Removed the family, hobby and pet details, including a pet mention in the About page's "Come and meet us" banner. Updated his skill tags to match: farm animal medicine, herd health, dogs & cats. Also replaced his entry in `Requirements/Employees/Biographies.txt`. | ✅ Done |
| 2026-11-17 | **About page intro banner ("Expertise with empathy, right here in Mallow") added no value.** | Removed the banner from `site/about.html`. The page now opens with the "About us – A mixed practice built on relationships" story, which became the page's main heading (`<h1>`, same size as before) so accessibility and search engines still have one. Reduced the space above it to match. | ✅ Done |
| 2026-11-17 | **About page "How we care" values section was unnecessary.** | Removed it from `site/about.html` so the page goes straight from the practice story to "Meet the team". Gave the team section the cream background (instead of white) to keep a clear break between the story and the team cards. | ✅ Done |
| 2026-11-17 | **Book page intro banner ("Book an appointment – Choose the type of appointment…") added no value.** | Removed the banner from `site/book.html`; the page now opens directly on the 3 steps and the 4 booking cards. Kept an invisible "Book an appointment" main heading (`<h1 class="sr-only">`) for screen readers and Google. The phone number is still shown in the header, the mobile call bar and the Emergencies card. | ✅ Done |
| 2026-11-17 | **Book page: the "how it works" steps and the booking cards were both on white and ran together.** | Split them into separate sections in `site/book.html`. The 3 steps now sit on a cream band, the 4 booking cards stay on white, and the Emergencies / Farm visits / Drop-in cards remain on cream, giving the same alternating cream → white → cream rhythm as the About page. | ✅ Done |
| 2026-11-17 | **Book page: the "how it works" steps were unnecessary.** | Removed the 3-step section from `site/book.html`. The page now opens straight onto the 4 booking cards (white), followed by the Emergencies / Farm visits / Drop-in cards (cream). The hidden "Book an appointment" heading is kept. *(Replaces the cream steps band from the previous entry.)* | ✅ Done |
| 2026-11-17 | **Book page: swap the section backgrounds.** | In `site/book.html` the 4 booking cards now sit on cream and the Emergencies / Farm visits / Drop-in cards sit on white. | ✅ Done |
| 2026-11-17 | **Footer address wrapped unevenly** ("Lackanalooha" fell back under the pin icon). | Footer address on all pages now wraps as one aligned block beside the pin icon. | ✅ Done |
