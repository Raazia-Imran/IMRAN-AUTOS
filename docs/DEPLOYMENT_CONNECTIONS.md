# Deployment connections

Project: ioqs722y. Dataset: production. The Content Lake already exists on Sanity; Studio is the editing app, not a separate database server.

The frontend and Studio use this project ID by default. Public read identifiers are not secrets. No write token belongs in NEXT_PUBLIC variables or source code.

## Initial content

Open the deployed Studio, sign in to Sanity, and open **Initial content**. Click **Create missing initial content**. It writes 13 verified documents with createIfNotExists and preserves existing edits. No invented product inventory is included. Then use **Structure → Global settings** and **Pages**. Add the WhatsApp channel URL in Global settings. Product photos and original brand video can be uploaded there or on the relevant page.

If a Vercel-hosted Studio reports a CORS error, add its exact HTTPS origin under Sanity project API → CORS origins, with credentials enabled for this authenticated editor only. Do not use a wildcard credentialed origin. The public frontend reads Sanity server-side and does not need credentialed CORS.

## GitHub → Sanity hosting

The workflow `.github/workflows/deploy-sanity.yml` is ready. Create a least-privilege Sanity deployment token in your Sanity account and add it directly to GitHub repository Settings → Environments → sanity-production → Environment secrets as **SANITY_AUTH_TOKEN**. Do not paste the token into chat or commit it. Restrict the environment to main and add an environment reviewer where your GitHub plan supports it. Then run **Deploy Sanity Studio** in Actions. The configured Sanity Studio hostname is `imran-autos-ioqs722y`; availability is only confirmed by a successful deployment.

GitHub pushes update schema/UI code. Publishing a document in Studio updates Content Lake, not GitHub source. Next.js reads published content with cached revalidation; the first refresh can still serve the prior cached result while it updates. Static design previews require rebuilding.

## Instagram and WhatsApp

Use the business's original photos/videos and verified captions, uploaded into Sanity. Public Instagram links are retained. Individual post access may require an authorized logged-in browser or a connected Instagram account; no passwords or scraped session cookies are needed in the repository. Uploading the original media is the simplest reliable launch path. No post content has been copied into this seed.

The global WhatsApp channel field is implemented but the exact channel URL has not been supplied. Website click-to-chat is present. Automated WhatsApp Business message handling is later work and requires its own official API, server-side credentials, webhook validation and consent flow.

## Design references

The new glass logo concept informs the welcome screen's transparent IA monogram and light sweep. The packaging reference informs the product presentation, and the confident plug informs the original mascot. Original Cinema 4D videos, third-party packaging and character artwork are not copied. Upload an owned brand film in the Landing page or Website page editor to display it with controls and a lightweight fallback.

## Hosting and domain

Public development hosting on the existing Vercel Hobby account was explicitly requested. Vercel's policy still classifies business promotion as commercial even before payments are added. No paid upgrade or domain purchase is performed automatically. Keep indexing off until the chosen custom domain and final public launch.
