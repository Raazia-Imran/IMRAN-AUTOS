# Imran Autos: two-day launch checklist

The urgent launch is a complete branded landing page with contact and enquiry paths. The full store catalogue can follow without changing the QR destination.

## Decisions needed before public launch

- Exact permanent domain. No domain has been purchased, reserved or checked for availability in this implementation.
- Hosting: Vercel Pro in Raazia's account, or an approved alternative such as Cloudflare Pages for the static release. Vercel Hobby excludes commercial business promotion; a coming-soon business page is still commercial. No paid plan has been purchased or upgraded.
- Confirm all contact details from the supplied business card. Confirm whether the WhatsApp channel should appear; no channel URL was supplied.

## Day 1: finished landing page and stable destination

1. Review the preview, particularly the business name, phone numbers and address. Confirm that 1997 is the correct start year.
2. Choose and purchase the permanent domain in your Namecheap account. Review the first-year price and renewal price before payment. Do not print an unpurchased address.
3. Import `Raazia-Imran/IMRAN-AUTOS` into the chosen hosting account. For Vercel, select Next.js, repository root, Node 22 or 24 supported by the selected dependencies, `npm ci` and `npm run build`. The Studio is a separate app under `studio/` and must not be used as the storefront root.
4. Set `NEXT_PUBLIC_SITE_URL=https://<your-owned-domain>` and initially leave `SITE_INDEXABLE=false`. Public Sanity identifiers can be added later; the landing page works without them.
5. Add apex and www in the host dashboard. Choose one canonical hostname and redirect the other.
6. In Namecheap Advanced DNS, enter only the records returned for this exact project by the host. Do not copy old IP addresses from other projects. Preserve existing MX and email-related TXT records. Record DNS before changes.
7. Wait for host domain verification and valid HTTPS. Test apex/www redirect, certificate, homepage and all contact links on mobile data and Wi-Fi. DNS propagation varies; allow time within the two-day window.

## Day 2: search setup and print QR

1. Add a **Domain property** in Google Search Console for the purchased domain. Add its exact verification TXT record to Namecheap. Keep that TXT record after verification.
2. When the real public site is approved, set `SITE_INDEXABLE=true` for production only and redeploy. Keep preview environments noindex. Noindex reduces accidental search visibility but is not access control.
3. Verify robots.txt permits crawling and sitemap.xml lists the correct HTTPS canonical host. Submit `https://<your-owned-domain>/sitemap.xml` in Search Console. Inspect the homepage and request indexing. Verification and sitemap submission do not guarantee immediate Google indexing.
4. Validate the social-card URL is absolute and loads publicly. Check a WhatsApp link preview after deployment; cached previews may take time to refresh. Confirm favicon and apple touch icon.
5. Generate the QR from the verified HTTPS homepage using the included QR script. QR completion is intentionally pending the domain. Do not use the private design preview or an expiring deployment URL on printed cards.
6. Open the SVG/PNG in the card layout, keep the square four-module white border, use high-contrast black on white, and aim for at least 25 mm square for reliable scanning. Avoid decorative logos inside the QR.
7. Scan the actual printer proof from two phones at normal card size. Check that it reaches the public HTTPS website without login or certificate prompts. Approve printing only after this check.

## Later, without replacing the QR

Connect Sanity, add verified products and stock details, add subcategory navigation and vehicle filters, then evaluate order/payment requirements separately. Keep the same domain and homepage URL. Renew the domain before expiry.

## References checked 8 November 2026

- https://vercel.com/docs/plans/hobby
- https://vercel.com/docs/limits/fair-use-guidelines
- https://vercel.com/legal/terms
- https://nextjs.org/docs/app/getting-started/installation
- https://www.sanity.io/docs/studio/installation
- https://support.google.com/webmasters/answer/9008080

Live DNS values and verification codes must come from the selected accounts. Neither Search Console nor Namecheap is connected in this session, so those changes have not been performed.
