# Maria Angelica — AI/ML Portfolio

A personal portfolio site built with **Next.js (App Router)**, ready to deploy on **Vercel**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (easiest way)

1. Push this folder to a **GitHub** repository.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New… → Project"**, then import your repository.
4. Vercel auto-detects Next.js — just click **Deploy**. No extra config needed.
5. Your site goes live at `your-project-name.vercel.app`.

> Tip: Every time you `git push`, Vercel redeploys automatically.

## Add your CV download

Put your CV PDF in the `public/` folder and name it **`CV_Maria_Angelica.pdf`**
(the "Download CV" buttons already point to `/CV_Maria_Angelica.pdf`).

## Add your publications

Open `app/page.js` and find the `Publications` block in the
**Achievements & Publications** section. Replace the placeholder with each
paper's title, journal/venue, year, and link/DOI.

## Customize

- **Text & data:** edit the arrays at the top of `app/page.js`
  (`projects`, `skillGroups`, `certs`, `achievements`).
- **Colors & fonts:** edit `app/globals.css` (`:root` variables) and the font
  imports in `app/layout.js`.
