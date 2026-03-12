# Wentworth Projects (Next.js)

Next.js rebuild of the Wentworth Projects construction site for Vercel deployment.

## Setup

```bash
npm install
npm run dev
```

Build: `npm run build`  
Start: `npm run start`

## Required assets

Add these to `public/` for full site appearance:

- **wentworthlogo.webp** – Header and footer logo
- **hero-video.mp4** – Homepage hero background video
- **images/** – Project images referenced in `lib/siteData.ts`:
  - mayfair-boutique.jpg
  - canary-wharf-offices.jpg
  - southbank-kitchen.jpg
  - harley-street-clinic.jpg
  - shoreditch-threads.jpg
  - kings-cross-cowork.jpg

Until these are added, the logo and hero video will 404; project images will show broken images unless you point `image` in `lib/siteData.ts` to placeholders (e.g. `/placeholder.svg`).

## Deploy on Vercel

Connect this repository to Vercel; the root is the Next.js app. The `LOVABLE` folder is excluded via `.vercelignore`.
