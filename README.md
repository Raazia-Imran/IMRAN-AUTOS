# Imran Autos

Animated automotive landing page and a headless catalogue for Imran Autos, Karachi.

**Stack:** Next.js 16.4.5, React, TypeScript, Three.js, self-hosted Barlow Condensed + Manrope fonts, separate Sanity Studio. No separate Python backend is needed; Python only supports the optional print QR utility.

## Run locally (Windows CMD)

```bat
git clone https://github.com/Raazia-Imran/IMRAN-AUTOS.git
cd IMRAN-AUTOS
npm ci
copy .env.example .env.local
npm run dev
```

Open the localhost address printed in the terminal. The verified business-card content works immediately without a Sanity project or API token. Only two confirmed collections appear; no fake stock or prices are loaded.

## Checks

```bat
npm run typecheck
npm run build
npm audit --omit=dev
npm --prefix studio ci
npm --prefix studio run typecheck
```

Studio requires the real project ID for use; see [Sanity setup](docs/SANITY_SETUP.md). The Studio build was also validated locally using a non-live identifier; that is not a live CMS test.

## Deploy

See [two-day launch checklist](docs/LAUNCH_CHECKLIST.md). The storefront root is this folder, not `studio/`. Use `npm run build` on Vercel with the Next.js preset. Vercel Hobby excludes commercial use; arrange Pro or approve another suitable host before public business deployment. No paid service is purchased by this project.

For an approved static host, set `STATIC_EXPORT=1` during `npm run build` and publish `out/`. Static hosting requires rebuilding after Sanity changes. Normal Vercel/Next deployment supports cached revalidation. Preview environments must remain noindex. Public launch requires `NEXT_PUBLIC_SITE_URL` and `SITE_INDEXABLE=true`; do not enable it for a private design preview.

## Website QR after DNS is verified

```bat
py -m pip install -r scripts/requirements-qr.txt
py scripts/make_qr.py https://YOUR-OWNED-DOMAIN --confirmed-domain
```

Replace the domain before running. Outputs PNG, vector SVG and vector PDF. No final website QR exists yet because the permanent domain is undecided. Never print a login-protected design preview QR.

## Dependency maintenance

The frontend and Studio production dependency audits report zero known vulnerabilities at handoff. Studio includes scoped overrides for js-yaml, smol-toml, undici and minimatch to resolve inherited advisories. The Studio type check and build passed after those updates. Re-check these overrides when upgrading Sanity; do not use npm audit fix --force without reviewing changes.

## Guides

- [Design, references and requirements](docs/DESIGN_AND_REQUIREMENTS.md)
- [Sanity setup and daily editing](docs/SANITY_SETUP.md)
- [Domain, DNS, Google Search Console and QR launch](docs/LAUNCH_CHECKLIST.md)

Product data and photographic assets remain to be supplied. Contact numbers and address come from the provided card; the establishment year and spark-plug/belt focus come from the Instagram public bio. Product illustrations are original presentation assets, not inventory photos. The supplied logo is preserved in `public/brand-logo.png`.
