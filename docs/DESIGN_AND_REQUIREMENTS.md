# Imran Autos: design and scope

## What the first release does

A polished automotive landing page is the first impression for people scanning the business-card QR. A separate catalogue screen handles practical discovery and product enquiries. It remains usable while catalogue content is being prepared.

The stack is Next.js 16.4.5 + React + TypeScript, with a separate Sanity Studio. Python is used only for optional QR/print utilities; a separate Python backend is unnecessary for this catalogue and contact release. No payment, cart or stock-management service is implied by the CMS.

## Visitor journey

1. Optional short spark-plug mascot and original-logo reveal; displayed once per tab, skipped under reduced motion.
2. Bold automotive hero with interactive procedural 3D plug, ambient detail, typography and direct enquiry actions. Pointer interaction and automatic motion pause are supported. A lightweight animated SVG version appears when WebGL is unavailable.
3. Two confirmed collections: Spark plugs and Drive belts.
4. Since-1997 shop story with a moving car illustration.
5. Three steps explaining vehicle details, compatibility confirmation and purchase arrangements.
6. Common questions, real shop contact details, directions and social links.
7. Catalogue: keyword and collection filtering for published products, product detail dialog, price or Ask for price, vehicle information and WhatsApp enquiry. Until products exist, a designed enquiry screen appears.

## Palette and type

| Role | Colour | Usage |
| --- | --- | --- |
| Royal blue | #172B85 | Matches the supplied business-card identity; panels and brand accents |
| Night ink | #080D1C | Page background |
| Deep navy | #0C142B | Section backgrounds |
| Performance red | #F02C43 | Main actions, highlights and moving strip |
| Electric periwinkle | #819CFF | Secondary headings and navigation accents |
| Soft white | #F1F2F5 | Main readable text |
| Slate | #A0ACC3 | Supporting text |

Barlow Condensed 600/700/800 italic gives headlines an automotive feel. Manrope 400–700 handles reading and controls. Font files are self-hosted through npm packages; no Google Fonts request is required. Main logo artwork is rendered directly from the supplied card rather than recreated. The IA favicon is a separate small-size mark. Product illustrations do not claim to depict stocked SKUs.

## What each reference contributed

| Reference | Observed pattern | Applied now | Later |
| --- | --- | --- | --- |
| Partsware home and Toyota spark-plug collection | Vehicle/make grouping, categories and subcategories, SKUs, PKR prices, stock/price filters, cart | Collection model, searchable part numbers, optional PKR price, brand and vehicle data | Deep vehicle navigation, price/stock filters, cart only after requirements |
| Gari Parts home and spark-plug collection | Part-system menu, ignition group, category shortcuts, search, promotions, contact paths | Separate landing and catalogue, clear part groups, WhatsApp path | Promotions only when real offers exist; checkout after fulfilment decisions |
| Dribbble 4D search and supplied Ferrari screenshot | Large product focal point, dark stage, strong type and controlled red accents | Large rotating plug, ink/blue stage, red actions, performance typography | Commissioned car model or licensed render if desired |
| Sølvquist hybrid-logo reveal | Creator describes C4D greyboxing, AI detail generation and After Effects compositing | Original brand reveal and mechanical visual direction | A bespoke high-production video is a separate media asset; not reproduced here |
| Awwwards Cinema 4D | 3D, WebGL, motion and interaction reference catalogue | Progressive 3D loading and readable content fallback | Full scroll-linked 3D scenes if supported by performance and assets |
| SVGator animation examples | Real-time 3D, scrollytelling, character motion, logo reveal, hover effects | Mascot intro, logo wipe, moving car, collection hover, section reveals, reduced-motion and pause | Larger narrative animation after testing real devices |
| Instagram @imranautos1997 | Public bio: since 1997, performance spark plugs and belts, German/JDM focus | Those confirmed facts and an Instagram link | Individual product photos/captions require client supply or a permitted accessible source |

The malformed combined Awwwards/SVGator URL was split into the two intended pages. Public page content was inspected, including both example spark-plug collections. This was not a purchase-flow audit or a frame-by-frame review of every reference animation. Instagram's individual posts were not accessible through the current connection. No competitor product photos, stock, prices or testimonials were copied.

## Content to collect from the family

- Final domain, preferred hosting and public launch approval.
- Shop opening days/hours and any holiday exceptions.
- WhatsApp channel URL if it should be displayed.
- List of actual categories/subcategories and brands stocked.
- Each product: name, part number, original photos, description, collection, brand and verified car/engine/year fitments.
- Whether prices should be public, current availability and how often it is updated.
- Any special performance/racing parts and their confirmed compatibility. Do not infer racing suitability from marketing names.
- Delivery cities, charges, collection process, payment methods, return and warranty terms.
- Shop/team photographs and approval to publish them.

## Explicit later work

A full storefront comparable to the references needs individual product pages with SEO, vehicle make/model/year filtering, richer nested categories, pagination, product galleries and, if requested, an order system. Online payment, refunds, courier integration and transactional stock are separate backend requirements. The current product dialog and WhatsApp enquiry are the first catalogue workflow.

## Launch status

The frontend and Studio compile locally. The frontend and Studio dependency audits report zero known vulnerabilities after targeted transitive dependency updates. Sanity provisioning, real product publication, final domain, DNS, public commercial deployment, Search Console and website QR are pending. Keep preview indexing off. Static preview content updates on rebuild; the normal Next.js deployment can revalidate Sanity content.

## Reference links

- https://partsware.pk/
- https://partsware.pk/collections/toyota-spark-plugs
- https://gariparts.com/
- https://gariparts.com/collections/spark-plug
- https://dribbble.com/search/4d-animation
- https://dribbble.com/shots/27037051-New-Work-S-lvquist-Hybrid-Logo-Reveal
- https://www.awwwards.com/websites/cinema-4d/
- https://www.svgator.com/blog/website-animation-examples-and-effects/
- https://www.instagram.com/imranautos1997/
