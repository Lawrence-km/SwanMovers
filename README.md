# Swan Movers Limited — website

Static marketing site (HTML, CSS, vanilla JavaScript) for **Swan Movers Limited**, Nairobi.

## Local preview

Open `index.html` in a browser, or serve the folder with any static server, for example:

```bash
npx --yes serve .
```

## Build

The build step checks that required files exist (useful in CI and on Vercel):

```bash
npm run build
```

## Deploy on Vercel

1. Push this folder to a Git repository (GitHub, GitLab, or Bitbucket).
2. In [Vercel](https://vercel.com), **Add New Project** and import the repo.
3. Use defaults: **Framework Preset** “Other”, **Build Command** `npm run build`, **Output Directory** `.` (root). Vercel will serve `index.html` at `/`.
4. Deploy.

### Contact form (FormSubmit)

The contact form posts to [FormSubmit](https://formsubmit.co/) at `swanmoversltd@gmail.com`. After the first real submission, FormSubmit sends a **one-time activation** email to that address — you must confirm it or submissions will not be delivered.

The form redirects to `thanks.html` on success; the redirect URL is set automatically from the current origin.

### Optional: environment variables

This static site does not require env vars. If you later switch to a custom API, add secrets in the Vercel project **Settings → Environment Variables** (never commit API keys).

## Project layout

| Path | Role |
|------|------|
| `index.html` | Home |
| `about.html`, `services.html`, `projects.html`, `contact.html`, `testimonials.html`, `careers.html` | Inner pages |
| `thanks.html` | Post–contact form thank-you |
| `css/styles.css` | Global styles |
| `js/script.js` | Mobile nav, smooth scroll, home testimonial scroll, contact validation |
| `images/` | Photos and logo |
| `vercel.json` | Security-related HTTP headers |
| `scripts/build.mjs` | Build-time file checks |
