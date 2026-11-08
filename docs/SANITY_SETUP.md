# Set up your shop manager

The schema and frontend integration are implemented. A real Sanity project has not been provisioned or connected yet. The Studio build is validated locally with a non-live build identifier; that does not create a dataset.

## Connect once

1. Sign in to https://www.sanity.io/manage with the account that will own Imran Autos.
2. Create a project named **Imran Autos**, with a **public** dataset named **production**. Only public catalogue information belongs in this dataset. Customer messages and orders remain outside it.
3. Copy the project ID into `studio/.env.local` as `SANITY_STUDIO_PROJECT_ID`. Set `SANITY_STUDIO_DATASET=production`. Use `studio/.env.example` as a template. No API token is needed by the public website.
4. Copy `.env.example` to `.env.local` at the repository root. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` to the same project ID and `NEXT_PUBLIC_SANITY_DATASET=production`.
5. In Windows CMD, run:

```bat
npm ci
npm --prefix studio ci
npm --prefix studio run dev
```

6. Sign in to Studio. Its default local URL is printed in the terminal. Set up **Shop details & contact numbers**, then **Landing page words**.
7. Add two collections: Spark plugs (`spark-plugs`, illustration Spark plug) and Drive belts (`drive-belts`, illustration Drive belt). Write a short description and turn on **Show on website**. Click **Publish**.
8. Add part brands and verified vehicles, then products. Each product needs name, slug, part number, description, collection and at least one photo with an image description. Leave price blank for **Ask for price**. Publish only verified fitments.
9. Deploy the editor using `npm --prefix studio run deploy`. Choose a unique Studio hostname in the signed-in account. It is separate from the customer-facing website.
10. Add the public project ID and dataset to the website host environment, rebuild and deploy. Vercel normal mode revalidates content approximately every 60 seconds on subsequent requests; CDN caching can add delay. A static export requires rebuilding after content changes. Set a Sanity publish webhook to the host's deploy hook for static hosting. Keep the deploy-hook URL private.
11. Prove the connection by publishing one real product, seeing it appear in the catalogue, checking its photo and fitments, then editing it and verifying the change. This live test is pending.

## Your father's daily workflow

Open the Shop Manager bookmark → sign in → Products → create or edit → add photos and vehicle details → preview the text → turn on Show on website → Publish. Use a separate invited account with an appropriate content-editing role; do not share your developer login. Available roles depend on the Sanity plan. Check current plan options in the dashboard.

To remove a product from the customer website, switch off Show on website and publish the change. Deleting a draft does not remove its previously published version.

## Seven content types

| Type | Purpose |
| --- | --- |
| Shop details | Phone numbers, WhatsApp contacts, address, email, Instagram, optional channel |
| Landing page | Main title, small title and opening paragraph |
| Collections | Categories, optional parent category, picture, description, display order |
| Part brands | Names and logos of brands actually stocked |
| Compatible vehicles | Make, model, years, engine/chassis details |
| Products | Part number, photos, description, category, brand, fitment, optional price, availability |
| Common questions | Answers and display order |

Only top-level collections appear in the initial collection selector. Nested category navigation, individual SEO product URLs, advanced make/model/year filtering, pagination and checkout are later catalogue milestones. A parent field is prepared, but those deeper browsing flows are not yet implemented.

## Troubleshooting

If the website still shows the two default collections and no products, first verify project ID and dataset, public read access, published documents, Show on website, and host rebuild/revalidation. The website deliberately falls back to the verified shop details when the CMS is unreachable. Sanity is not a payment processor, order system or live inventory system.
