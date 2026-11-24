<p align="center"><img src="public/brand-logo.png" alt="Imran Autos" width="280" /></p>
<h1 align="center">The right parts for real performance.</h1>
<p align="center">An animated automotive website and Sanity-powered enquiry catalogue for Imran Autos, Karachi.</p>
<p align="center"><a href="https://imranautos.com">Website</a> · <a href="https://imran-autos-ioqs722y.sanity.studio/">Shop Manager</a> · <a href="#quick-start">Developer setup</a> · <a href="#next-milestones">Roadmap</a></p>

![Imran Autos brand preview](public/social-card-v2.png)

## Project status

The current release introduces the shop, presents its two initial collections, and connects customers with the team through WhatsApp, phone and email. **Purchases are arranged with the shop. Full e-commerce remains future work.**

Status recorded **24 November 2026**, from source inspection, public responses and connected project metadata:

| Area | Current evidence |
| --- | --- |
| Website | imranautos.com responded successfully; Vercel lists apex and www domains |
| Content platform | Sanity ioqs722y / production; 13 public non-draft documents |
| Inventory | No public product records at this snapshot; no invented stock or prices |
| Collections | Spark plugs and Drive belts |
| Search | Public robots/sitemap available; a saved 10 Nov screenshot shows successful submission with 10 discovered pages |
| QR | Saved PNG/SVG/PDF print pack targets https://imranautos.com/ |
| Checkout | Cart, payments, orders and transactional inventory are not implemented |

Sitemap submission does not establish current Google indexing. Builds, audits and device acceptance checks were **not rerun** for this documentation update.

## Experience

- Animated logo/mascot intro, procedural 3D spark plug and SVG fallback.
- Motion controls, reduced-motion handling and a navbar that becomes a floating pill on scroll.
- Searchable catalogue, collection filters and product details when real products are published.
- Named contacts, fitment guidance, directions and business-card previews.
- Editable settings, page copy, collections, brands, vehicles, products and FAQs in a separate Studio.
- Canonical metadata, social cards, sitemap, robots, privacy and enquiry terms.

Illustrations are presentation assets, not evidence of stock or vehicle compatibility.

## Stack and structure

**Next.js 16.4.5 · React 19 · TypeScript · Three.js · Sanity Studio**

Barlow Condensed and Manrope fonts are self-hosted through npm packages. No separate Python application backend is required for this enquiry release; Python supports the optional QR utility.

| Path | Purpose |
| --- | --- |
| app/ | Pages, metadata, robots and sitemap |
| components/ | Landing page, catalogue, content views and illustrations |
| lib/content.ts | Public CMS reads, defaults, contacts and indexing controls |
| lib/pages.ts | Supported page defaults and policy wording |
| public/ | Original logo, icons, business cards and social artwork |
| studio/ | Separate editor, schemas, seed data and deployment configuration |
| scripts/ | Development wrapper and QR utility |
| .github/workflows/ | Sanity Studio deployment workflow |

## Quick start

Use Git and Node.js/npm. The connected Vercel project uses **Node 24.x**. Follow AGENTS.md before changing code and preserve existing work before pulling or replacing files.

Windows CMD:

```bat
git clone https://github.com/Raazia-Imran/IMRAN-AUTOS.git
cd IMRAN-AUTOS
npm ci
if not exist .env.local copy .env.example .env.local
npm run dev
```

Open the localhost URL printed in the terminal. The website reads published content from the public dataset and falls back to supplied business details if the CMS request fails.

Root .env.local:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=ioqs722y
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SITE_URL=https://imranautos.com
SITE_INDEXABLE=false
GOOGLE_SITE_VERIFICATION=
```

Keep local/preview indexing disabled. Enable SITE_INDEXABLE=true deliberately for the verified production origin only. Public project/dataset IDs are not secrets; write tokens never belong in NEXT_PUBLIC variables or committed files.

## Run the Shop Manager locally

```bat
npm --prefix studio ci
if not exist studio\.env.local copy studio\.env.example studio\.env.local
npm --prefix studio run dev
```

Use the terminal's Studio URL and an authorized Sanity account. The project already exists: **do not recreate the dataset or replay seed/contact-update scripts as routine installation**.

Publish only real, reviewed product photos, part numbers, prices and fitments. Keep the named WhatsApp contacts mapped correctly: **Ghufran is primary; Imran is secondary**. Customer/order records do not belong in the public catalogue dataset.

## Deployment and content updates

The storefront is the **repository root**, with the Next.js preset and npm run build. The studio/ folder is a separate app. See the [Vercel storefront dashboard](https://vercel.com/raazias-projects-142c0b42/imran-autos). Review current ownership, billing and configuration before changes.

Normal Next.js mode requests published Sanity content with 60-second revalidation; caching can delay updates. Static export uses STATIC_EXPORT=1 and outputs out/, but needs rebuilding after CMS changes.

The Studio workflow uses GitHub environment sanity-production and secret SANITY_AUTH_TOKEN. Secret availability and current successful unattended deployment were not verified in this task. GitHub code changes and Sanity publication are separate workflows.

## Checks when verification is requested

```bat
npm run typecheck
npm run build
npm --prefix studio run typecheck
npm --prefix studio run build
```

Use committed lockfiles. Review existing Studio overrides during maintenance; historical audit results are not a current security guarantee. Avoid forced automatic dependency upgrades.

## Next milestones

1. Collect real product photos, SKUs, fitments, pricing and availability rules with the shop.
2. Verify one approved product through the Studio-to-website editing workflow.
3. Add individual product pages, galleries, vehicle filters, nested navigation and pagination as inventory grows.
4. Agree order confirmation, payment, delivery, returns, warranty and stock-management rules.
5. Implement the approved commerce backend and revise policies to match its behavior.

Real-device/WebGL checks, printed QR scanning, current search coverage and analytics setup remain review items. Vercel Analytics/Speed Insights integration is not evidenced in the current source.

## Existing guides and historical context

- [Design and requirements](docs/DESIGN_AND_REQUIREMENTS.md)
- [Sanity editing guide](docs/SANITY_SETUP.md)
- [Deployment connections](docs/DEPLOYMENT_CONNECTIONS.md)
- [Launch checklist](docs/LAUNCH_CHECKLIST.md)
- [Historical verification notes](docs/VERIFICATION.md)

Some older guide paragraphs still say the domain, CMS, channel or QR are pending. Those statements predate the evidence summarized above. Preserve useful setup/design instructions, but recheck their status claims. The separately prepared 24 Nov continuity package includes the detailed handover, setup, services, backlog, source snapshot, public-content backup and available assets.

Product data and original photography still need business input. No delivery timeframe, warranty, inventory quantity, payment capability or final owner acceptance is implied by this repository.
