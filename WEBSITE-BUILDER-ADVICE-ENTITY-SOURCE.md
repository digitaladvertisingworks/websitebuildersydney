# Website Builder Sydney: entity source and DAN role

The only source for business facts on websitebuilderadvice.net. Every fact below was read from a live network site or the Google Business Profile on 2026-10-07. If a fact isn't here, the pages don't state it.

## 1. Entities

| Entity | Type | Value | Source |
|---|---|---|---|
| Website Builder Sydney | Organisation (this domain's business name) | Confirmed by the owner on 2026-10-07. The GBP is currently named "Website Builder advice" | Google Business Profile, https://maps.app.goo.gl/xrakAW4nFD6ReaPy9 (place id 0x6b12b9a573f99e89:0xce6803ded4f515d2) |
| Marcelo Soler | Person (central entity) | "Founder, web designer, and local SEO specialist." | https://sutherlandwebdesign.com.au/about/ |
| Experience claim | Person attribute | "18+ years of brand and design experience" | https://sutherlandwebdesign.com.au/about/ (single source; no conflicting year found) |
| Phone | NAP | 0404 084 847 (+61404084847) | Every network site |
| Email | NAP | start@websitebuilderadvice.net | **Proposed**, following the network's `start@<domain>` pattern. The mailbox doesn't exist yet |
| Location | NAP | Hurstville NSW 2220 (suburb only) | GBP pin -33.97354, 151.10284, which reverse-geocodes to Australia Street, Hurstville (OpenStreetMap) |
| ABN | Organisation | 96 492 325 357, active from 01 Jul 2008, last updated 28 Mar 2025 | ABR, https://abr.business.gov.au/ABN/View?abn=96492325357 (extracted 2026-10-07) |
| Legal entity | Organisation | SOLER, MARCELO ANDRES: Individual/Sole Trader. ABR trading name: "Marcelo Soler" | ABR |
| GST | Organisation | Not currently registered for GST. Prices must not say "inc. GST" | ABR |
| ABR business location | Organisation | NSW 2218 (Allawah / Carlton). GBP pin is Hurstville 2220, next door | ABR |
| Experience corroboration | Person | ABN active since July 2008, which matches "18+ years" as of 2026 | ABR + sutherlandwebdesign.com.au/about |

## 2. The network (DAN nodes)

| Property | Role | Brand | NAP shown on the site | Status (2026-10-07) |
|---|---|---|---|---|
| websitebuilderadvice.net | **Sydney GeoHub** (commercial master hub plus regional hubs) | Website Builder Sydney | Hurstville NSW 2220 | New domain, doesn't resolve yet |
| stgeorgewebdesign.com.au | St George studio site, plus a `/sydney/` page | St George Web Design | 40 Wisdom St, Connells Point NSW 2221 (schema); Castlereagh St NSW 2000 (About); schema phone +61290998025 | 200. Root redirects www to non-www |
| www.stgeorgewebdesign.com.au/web-design-bankstown/ | Canterbury-Bankstown node with suburb pages | Web Design Bankstown | 9/13 Wentworth St, Greenacre NSW 2190 | 200, but only on www (the non-www URL 301s to www) |
| sutherlandwebdesign.com.au | Sutherland Shire node | Sutherland Shire Website Design | Pines Parade, Gymea NSW 2227 | 200 |
| webdesignparramatta.sydney | Parramatta / Western Sydney node | FP Web Design | Suite 558/6/197–205 Church St, Parramatta | 200 |
| stgeorgewebdesign.com.au/sydney/ (local repo: st-george-web-design-sydney) | Sydney-wide page | St George Web Design | Level 7/169 Castlereagh St, Sydney NSW 2000 | 200 (canonical uses www) |

**Role of this domain:** the owner chose the commercial GeoHub (2026-10-07). websitebuilderadvice.net is the Sydney-wide entry point: master hub → regional hubs → studio-site nodes, which hold the suburb pages. It is the network's GBP-backed property, once the GBP name matches (see the flags list).

**Known overlap:** `/web-design-sydney/` targets the same intent as stgeorgewebdesign.com.au/sydney/. The owner accepted this when choosing the commercial GeoHub. Decide which URL keeps "web design Sydney" before both are pushed. See the flags list.

## 3. Services and prices (live copy, stgeorgewebdesign.com.au home)

- Single Landing AI Site: $500 one-off, delivered live in 1 business day, free hosting, free logo, domain connection guidance.
- Multi-page AI site: from $1,000. A 5-page build, Google Business Profile connected, live in 1 week.
- Custom Website: $5,000, WordPress, 10 to 15 pages, 3 design revisions, PSD mockup.
- Domain: "typically $15–25 per year through a registrar like Crazy Domains or Namecheap" (sutherlandwebdesign.com.au).
- Services named in nav and footers: $500 Starter Website, Growth Website, Local SEO, Google Ads Pages, Website Redesigns (St George); Web Design & Development, SEO, Lead Generation, Ecommerce Websites, WordPress, Logo & Brand Design, Web Hosting & Support, Online Reputation Management (Sutherland).
- Build tech: "No WordPress, no plugins, no bloat. Clean HTML, CSS, and hosting setup" for the starter sites. Custom builds are on WordPress.

## 4. Confirmed service areas

| Region | Evidence | Built on this domain |
|---|---|---|
| St George & Bayside | GBP in Hurstville; St George `areaServed`: St George, Hurstville, Kogarah, Rockdale | Yes |
| Canterbury-Bankstown | Web Design Bankstown node; St George `areaServed` includes Bankstown | Yes |
| Sutherland Shire | Sutherland node; its portfolio lists Shire clients | Yes |
| Sydney CBD & Inner City | St George footer "Sydney CBD"; Castlereagh St listing; Shani's Cafe testimonial (Sydney CBD) | Yes |
| Greater Parramatta | FP Web Design node | Named and linked out (FP Web Design), no hub |
| Other 9 regions in the prompt §4 | No evidence | Not built, not linked |

## 5. Proof reused (verbatim)

- Portfolio labels from sutherlandwebdesign.com.au ("Every site below is live right now"): Total Carpet Cleaning, Balgowlah Family Dental, Physio Focus, BRM Patent Attorneys, Level Architects, Francis Design, Western Sharpening, On Target Driving School, Monty's Plumbing, BMS Constructions, A Exterior Architecture, CKS Projects.
- Video testimonial quotes from sutherlandwebdesign.com.au: Shani's Cafe, Sydney CBD: "Smooth, fast, and the pricing was spot on."; Rob's Waterproofing: "The site was finished in one day and looked professional."; Local Landscaping Business: "Simple process, clear pricing, and no stress."
- Process steps and pricing text from the stgeorgewebdesign.com.au home page.
- Screenshots: six mockups from the st-george-web-design-sydney repo, checked by eye against the client names and converted to WebP.

## 6. Schema (prepared, not published)

The pages carry **no JSON-LD**, per the GeoHub prompt ("none until the owner signs off"). Once the address is settled, add one `@graph` to `/web-design-sydney/`, defined once and referenced from the regional hubs:

- `ProfessionalService` `@id` https://websitebuilderadvice.net/#business: name, telephone, `taxID` "96492325357", the `areaServed` regions in §4, `founder` → Person, `sameAs` the GBP URL.
- `Person` `@id` https://websitebuilderadvice.net/#marcelo-soler: name, jobTitle "Web designer and local SEO specialist", `worksFor` → #business. Make it byte-identical across every network node.
- Regional hubs: a `WebPage` with `about` → #business, plus a `BreadcrumbList`.
- Never `aggregateRating` or `review`. Never invent `sameAs` profiles; verify each on the web first.
