# Sydney GeoHub build prompt (all regions)

Build the Sydney location hubs for {{BRAND}} ({{DOMAIN}}) with the reusable page template (`src/pages/_starter.html`).

This prompt builds **one page per run**. Set `{{HUB_LEVEL}}` before each run:

| `{{HUB_LEVEL}}` | Page | URL | Run |
|---|---|---|---|
| `master` | Website Design & Website Builder **Sydney** (all regions) | `/web-design-sydney/` | Once, first |
| `region` | Website Design & Website Builder **{{REGION}}** | `{{REGION_URL}}` (from the §4 table) | Once per region in §4 |

Keep trailing slashes. If a live URL already exists for any page, keep it and list the planned 301s here: {{REDIRECTS}}. **If the CBD & Inner-City hub is already live at `/web-design-sydney/`, stop and ask the owner** which page keeps that URL (the Sydney master hub or the CBD hub). Don't move a live URL without sign-off.

**GOAL:** Build a three-tier hub structure that joins {{BRAND}}, its website services and every Sydney region and suburb it serves:

**Sydney master hub → regional hubs → suburb pages**

**The main CTA is the project enquiry / quote form. A discovery call (phone or booking link) is the second option.**

**Sources, in priority order**
1. Live {{DOMAIN}} copy for this hub, any regional hubs and any existing suburb pages. **Use it verbatim.**
2. `{{BRAND}}-ENTITY-SOURCE.md`: the only source for business facts (name, ABN, address, phone, tools, years, clients, the service area).
3. `{{BRAND}}-TOPICAL-MAP.md`: the hub pillar rows, the entity map, the link rules and the service × suburb matrix.
4. `{{BRAND}}-SERVICE-GAP-ANALYSIS.md`: which services the freelancer offers and which are referred out (for example to partners).
5. `{{BRAND}}-FANOUT-SERVICE-EXPANSION.md`: the sub-query branches for the FAQ, plus the exact-facts rule.
6. `{{BRAND}}-HOMEPAGE-REVIEW-FLAGS.md`: flags already raised. Carry them over and don't re-solve them.

If a source file doesn't exist, stop and list it as missing. Don't fill the gap with invented facts.

**Service-area check (do this first).** Confirm against the entity source which regions in §4 the owner actually serves. Build a regional hub only for a confirmed region. Name unconfirmed regions in the flags list; don't build or link them.

---

## 0. Rules that override everything below

The GeoHub method below asks for richer copy than the live site probably has. These rules decide every conflict:

| The method asks for | On {{DOMAIN}}, do this |
|---|---|
| New local narratives, FAQs and About copy | Use live copy first. Where there's no live copy, write new text as a **draft for owner sign-off** and mark it `data-flag="new copy: owner sign-off"`. Drafts may state only facts from the entity source or real public places. |
| Testimonials that name suburbs or businesses | **Don't write testimonials.** Use only testimonials already published on the site or on the Google Business Profile, word for word. Name a client business only if the entity source confirms permission. Put a `data-placeholder` in each empty slot ("real testimonial from a [region/suburb] client needed"). |
| 3-tier packages with starting prices | Use prices only if the entity source lists them. Otherwise make the section a `data-placeholder`. Don't invent packages, figures, "from $X", timelines or "free" anything. Prices are the same Sydney-wide unless the entity source says otherwise; never invent regional pricing. |
| Named expert, experience, credentials | {{OWNER_NAME}}, {{ROLE}}. Show only credentials the entity source lists (for example platform partner status, certifications or a degree), each linked to its proof. No "since" year or years of experience unless the entity source states one with no conflict. |
| Local travel times, office address | Leave out travel times, distances and response times. Show an address only if the entity source has a verified one. For a home-based freelancer, use "service-area business": no map pin and no street address. Don't imply an office or base in each region. In-person meetings are mentioned only for the areas the owner confirms; otherwise say "online". |
| A new service-areas URL | Use the hub URLs in §4. Don't create `/service-areas/`, `/locations/` or anything like it. |
| Every service the method lists | Only services the freelancer delivers personally. Referred-out work (for example custom app development, paid ads management, brand identity or photography, whatever the gap analysis says) gets **one link out** or one sentence, not a card. Don't claim agency scale, a team, "offices across Sydney" or 24/7 support. |
| Portfolio and results | Only real, published case studies. No traffic, ranking or conversion percentages unless the case study states them with the client's permission. |
| Duplicate content across regions | Each regional hub must be written for its region. Don't spin one template across 14 pages by swapping place names. Shared blocks (services, pricing, About) can repeat. Hero line, narratives, FAQ local answers and "What I build" emphasis must differ. |
| Schema | None until the owner signs off. Never `aggregateRating` or `review`. |

---

## 1. The GeoHub: NLP and sentiment

Each hub must read as a **semantic fortress** for website design and building in its area, not a list of suburb names. Google's language models should see that {{BRAND}} is relevant to the business types that actually trade there: professional services in the CBD and North Sydney, hospitality in the Inner West and Eastern Suburbs, trades and home services in the Hills, West and Shire, health precincts in Westmead, St Leonards, Kogarah and Liverpool, and multicultural retail and food in Parramatta, Canterbury-Bankstown and Fairfield.

### Positive sentiment

Write in a confident, calm, outcome-focused voice: the site launches on time, the owner can edit it themselves, it loads fast on a phone, and enquiries arrive in the inbox.

**Avoid:** "We provide website design services."

**Use (pattern only; keep claims to verified facts):** "{{OWNER_NAME}} designs and builds fast, mobile-first websites for tradies, clinics, cafés and consultants across {{REGION}}, so owners can update their own pages and customers can book, buy or enquire on the first visit."

**Why:** Google's language models judge context, usefulness and expertise, and how fully a page answers the need. They don't count repeated keywords.

### Hyper-local content stack

**Master hub:** each region gets a **regional narrative** of 2–3 sentences, then a descriptive link to its regional hub. Build it from the region's business mix and 2–3 anchor places in §4.

**Regional hub:** each suburb gets a **local narrative** of 2–3 sentences, then a descriptive link to its suburb page. Build each one from:
- the **business mix** in the topical map (it's what makes each suburb different);
- 2–3 **real public places** (streets, stations, precincts) from the table in §4;
- the services that suburb links to in the service × suburb matrix.

Patterns (drafts; flag them):
- Inner City: "In Surry Hills, much of the work is for cafés, design studios and boutique agencies along Crown and Bourke Streets, where a site has to look as considered as the brand behind it and take bookings on a phone."
- Hills District: "Around Castle Hill and Norwest, most enquiries come from builders, electricians and allied-health clinics who need a site that shows their work, lists their service areas and turns a Google search into a quote request."
- Northern Beaches: "In Brookvale and Manly, surf schools, gyms, breweries and cafés along The Corso need sites that handle bookings and seasonal menus without calling a developer."

The semantic chain this builds:

**{{BRAND}} → freelance web designer and developer → website design / website build / redesign / e-commerce / SEO-ready builds → Sydney → region → each suburb → its business mix and streets**

### Hub roles and links

**Master hub (`/web-design-sydney/`)**
- ↓ Every live regional hub, grouped as in §4 (City & East, North, West, South). Link every one in the body with a descriptive anchor ("website design for Northern Beaches businesses", not "click here" or "Northern Beaches").
- ↓ Up to 2 flagship suburb pages per region, only where the page exists with local proof.
- Name confirmed regions with no hub yet as covered, but **don't link them** until their hubs exist.

**Regional hub**
- ↑ The Sydney master hub, once in the breadcrumb (`Home › Sydney › {{REGION}}`) and once in the body.
- ↓ Every existing suburb page in the region, **grouped by precinct** (see §4). Link every one in the body.
- ↔ 1–3 **adjacent regions** listed in §4, as a short "Nearby areas" line with descriptive anchors. No full cross-region link lists.
- Name suburbs with no page yet as covered, but **don't link them** until their pages exist with local proof.

**Both levels**
- → The service pillar hubs ({{PILLARS}}: e.g. Website Design, Website Development, Redesign, E-commerce, Landing Pages, Website Care & Hosting, SEO-ready Websites), each with a short summary and a descriptive anchor.
- → The portfolio / case studies page from every "see my work" mention.
- → Each platform credential mention (for example Webflow, Shopify or WordPress partner status, if real) links to its public proof.
- → Cross-domain links only where the topical map lists them: {{CROSS_DOMAIN_LINKS}}.
- ⇒ The enquiry form mid-page (after services) and at the end, plus the phone number or booking link.

**Suburb pages** (built from a separate prompt) link up to their regional hub, not straight to the master hub.

---

## 2. Linguistic optimisation: BERT and MUVERA

Google doesn't just match keywords. It reads entities and the relationships between them.

### Contextual entity mapping

Put region and suburb names next to the service, platform and business entities that are true for that area. Use only the platforms and services the entity source confirms:

- website design, UX/UI, wireframes, mobile-first, responsive design, brand-aligned design
- website build, {{PLATFORMS}} (e.g. WordPress, Webflow, Shopify, Squarespace, Wix), CMS, custom code
- website redesign, migration, 301 redirects, keeping existing rankings
- e-commerce, online store, payments, Stripe, Square, Shopify Payments, GST-ready checkout
- small-business websites, landing pages, booking systems, menus, online ordering, quote and enquiry forms, service-area pages for tradies
- SEO-ready build, Core Web Vitals, page speed, Google Business Profile, local SEO, schema (as a service, if offered)
- multilingual-ready sites (relevant in Parramatta, Harris Park, Cabramatta, Lakemba, Hurstville, Chatswood, Eastwood), only if the owner offers it
- accessibility (WCAG 2.2 AA), privacy policy, cookie consent, Australian Privacy Principles
- hosting, domains (.com.au through auDA-accredited registrars), SSL, backups, website care plans
- copy and content, photography (link out if not offered), training so the owner can edit the site

### Region → business mix → site need (drafts; confirm against the matrix and the owner's real clients)

- **CBD & Inner City → professional services, finance, hospitality, creative studios, startups → credible, fast, accessible, design-led sites**
- **Eastern Suburbs → hospitality, fitness, boutique retail, clinics → bookings, menus, e-commerce, Google Business Profile**
- **Inner West → cafés, breweries, venues, makers, allied health → booking-led sites, online ordering, small online stores**
- **Lower North Shore → professional services, medical (St Leonards health precinct), corporate → polished service sites, practitioner profiles, appointment booking**
- **Upper North Shore → allied health, tutoring, family services, trades → clear service pages, enquiry and booking forms**
- **Northern Beaches → surf, fitness, hospitality, trades, Brookvale makers → booking, seasonal menus, quote forms**
- **Ryde & Macquarie Park → tech, pharma, education, corporate → landing pages, microsites, CMS training**
- **Hills District → builders, trades, home services, clinics → portfolio galleries, service-area pages, quote forms**
- **Greater Parramatta → professional services, health (Westmead), government suppliers, multicultural hospitality → credible service sites, multilingual-ready builds**
- **Western Sydney (Blacktown & Penrith) → trades, construction, logistics, retail, family services → quote-led sites, Google Business Profile, fast mobile pages**
- **South West Sydney → trades, health (Liverpool), multicultural food and retail, growth-area home builders → quote forms, menus, multilingual-ready sites**
- **Canterbury-Bankstown → multicultural retail and food, clinics, trades → menus, online ordering, enquiry forms**
- **St George & Bayside → health (Kogarah), logistics near the airport and Port Botany, hospitality → service sites, bookings, B2B enquiry forms**
- **Sutherland Shire → trades, light industry (Taren Point), hospitality, surf and fitness → quote forms, bookings, portfolio galleries**
- **{{BRAND}} → {{OWNER_NAME}} → {{CREDENTIALS}} → ABN {{ABN}} → website design across Sydney**

These relationships give more topical depth than repeating "web designer Sydney".

### Answering the "why": FAQ

BERT reads the meaning of a question, not just its words. Each hub has a **7-question FAQ** covering the objections of small-business owners, tradies, startup founders, marketing managers, practice managers and hospitality operators. Answers use verified facts, real places or live copy only. Any answer that needs an owner fact (prices, timelines, process, platforms, support terms, areas served) stays a flagged draft or a placeholder.

**Master hub questions:**
1. "Which parts of Sydney do you work in?" (service area: owner fact; link each confirmed regional hub)
2. "Should I use a website builder like Wix or Squarespace, or hire a freelancer?" (comparison: the core "website builder" intent; answer honestly, including when DIY is enough)
3. "How long does a small-business website take?" (placeholder until the owner confirms)
4. "Can I update the website myself after launch?" (CMS and training)
5. "Will my new website be ready for Google and work well on phones?" (SEO-ready build, Core Web Vitals, Google Business Profile)
6. "Do we need to meet in person?" (online by default; in person only where the owner confirms)
7. "Is my website accessible and compliant with Australian privacy rules?" (WCAG 2.2, Privacy Act 1988 / APPs; no legal advice)

**Regional hub questions:** keep questions 2–5 and 7 (reword so they're natural for the region, not copied). Replace 1 and 6 with:
1. A **local business-type question** built from the region's mix, e.g. "Do you build websites for tradies in the Hills District?", "Do you design websites for cafés and venues in Newtown and Marrickville?", "Can you build a booking site for a clinic in St Leonards?"
6. "Do you work with businesses across {{REGION}}, or meet in person?" (owner fact)

Every answer ties together the freelancer, the service, the searcher's intent and the place.

---

## 3. Content requirements

Sections in order. Use the class names in CLAUDE.md. Pages with `crumbs` get the solid header. Breadcrumbs: master `Home › Sydney`; regional `Home › Sydney › {{REGION}}`.

1. **Hero:** H1 from the live page. If there isn't one:
   - master: "Website Design & Builds for Sydney Small Businesses" (flagged)
   - regional: "Website Design & Builds for {{REGION}} Businesses" (flagged)

   A supporting line naming the area and the business types served. Enquiry CTA and call/booking CTA. Trust row: ABN (linked to the ABR), platform credentials and real review count only if they're verified.
2. **Services (card grid):** one card per service that has a page. Use live descriptions and link each card to its page. Planned pages get a card only once they're live.
3. **Pricing / packages:** real prices from the entity source, or a `data-placeholder`. If a cost guide exists, add one contextual link to it.
4. **What I build (icon grid):** site types and features from live headings, for example brochure sites, landing pages, online stores, booking and enquiry forms, quote forms, menus, blogs, portfolios, multi-language, migrations and redesigns, care plans. On regional hubs, order the items by the region's business mix (quote forms first in the Hills, bookings and menus first in the Inner West). Use existing sprite icons only.
5. **Service areas (the GeoHub core):**
   - master: region groups (City & East, North, West, South). Each region gets its regional narrative (§1) and a link to its hub, plus up to 2 flagship suburb links.
   - regional: precinct groups from §4. Each suburb gets its local narrative (§1), a link to its page and 1–2 service links from the matrix. Then the "Nearby areas" line (adjacent regions).

   Suburbs or regions without a page are named but not linked. End with "Not in the list?" (enquiry CTA, plus "I work with businesses Sydney-wide and remotely" only if the owner confirms).
6. **Selected work:** real case studies only: client, suburb, platform, what changed. On regional hubs, show work from that region first. If there's none, show general work and don't imply it's local. No invented metrics. Empty slots become placeholders.
7. **Reviews / testimonials:** published ones only, verbatim, with their existing flags. Empty slots become placeholders. No review schema.
8. **FAQ:** the 7 questions in §2 for this hub level, as an accordion.
9. **About {{OWNER_NAME}} (long form):** live About copy first. Cover who does the work, the legal entity / ABN, tools and platforms, how projects run (discovery, design, build, launch, training: **placeholder until the owner confirms the steps**), and the trust layer. No "since" year unless verified. No address beyond what the live site shows. On regional hubs a shorter version is fine, with a link to the full About page.
10. **Final CTA (`ready`):** enquiry form and phone or booking link.

---

## 4. Regions, precincts and local entities

Check each row against a map and against the owner's real client base before publishing. Use names only: no distances or travel times. Delete any row the owner doesn't want to target. Business mix is a draft. URLs are proposals: use the live URL where one exists.

### Region index (master hub groups)

| Group | Region | Proposed URL | Councils (LGA) | Adjacent regions |
|---|---|---|---|---|
| City & East | CBD & Inner City | `/web-design-sydney/cbd-inner-city/` | City of Sydney (+ Woollahra for Paddington / Darling Point) | Eastern Suburbs, Inner West, Lower North Shore |
| City & East | Eastern Suburbs | `/web-design-sydney/eastern-suburbs/` | Waverley, Woollahra, Randwick | CBD & Inner City, St George & Bayside |
| City & East | Inner West | `/web-design-sydney/inner-west/` | Inner West, City of Sydney (Glebe) | CBD & Inner City, Canterbury-Bankstown, Greater Parramatta |
| North | Lower North Shore | `/web-design-sydney/lower-north-shore/` | North Sydney, Willoughby, Lane Cove, Mosman, Hunters Hill | CBD & Inner City, Upper North Shore, Northern Beaches, Ryde |
| North | Upper North Shore | `/web-design-sydney/upper-north-shore/` | Ku-ring-gai, Hornsby | Lower North Shore, Ryde, Hills District |
| North | Northern Beaches | `/web-design-sydney/northern-beaches/` | Northern Beaches | Lower North Shore, Upper North Shore |
| North | Ryde & Macquarie Park | `/web-design-sydney/ryde-macquarie-park/` | City of Ryde, City of Parramatta (Epping) | Lower North Shore, Upper North Shore, Greater Parramatta |
| West | Hills District | `/web-design-sydney/hills-district/` | The Hills Shire | Greater Parramatta, Western Sydney, Upper North Shore |
| West | Greater Parramatta | `/web-design-sydney/parramatta/` | City of Parramatta, Cumberland | Hills District, Western Sydney, Inner West, Ryde |
| West | Western Sydney | `/web-design-sydney/western-sydney/` | Blacktown, Penrith | Hills District, Greater Parramatta, South West Sydney |
| South | South West Sydney | `/web-design-sydney/south-west-sydney/` | Liverpool, Fairfield, Campbelltown, Camden | Western Sydney, Canterbury-Bankstown, Sutherland Shire |
| South | Canterbury-Bankstown | `/web-design-sydney/canterbury-bankstown/` | Canterbury-Bankstown | Inner West, South West Sydney, St George & Bayside |
| South | St George & Bayside | `/web-design-sydney/st-george-bayside/` | Bayside, Georges River | Eastern Suburbs, Canterbury-Bankstown, Sutherland Shire |
| South | Sutherland Shire | `/web-design-sydney/sutherland-shire/` | Sutherland Shire | St George & Bayside, South West Sydney |

Out of scope unless the owner asks: Blue Mountains, Central Coast, Hawkesbury, Wollondilly. They're separate markets, not Sydney regions.

### Suburbs and places per region

**CBD & Inner City** (City of Sydney; Paddington / Darling Point in Woollahra)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| Core | Sydney CBD | Professional services, law, finance, retail | George St, Martin Place, Town Hall, Wynyard, Circular Quay |
| Harbour East | Woolloomooloo | Hospitality, waterfront dining | Finger Wharf, Cowper Wharf Roadway |
| Harbour East | Potts Point | Bars, restaurants, wellness | Macleay St, Kings Cross station, Challis Ave |
| Harbour East | Darlinghurst | Hospitality, creative, health clinics | Oxford St, Victoria St, Taylor Square |
| Harbour East | Paddington / Darling Point | Boutique retail, galleries, clinics | Oxford St Paddington, William St, Edgecliff station |
| South | Surry Hills | Creative studios, agencies, cafés, boutiques | Crown St, Bourke St, Central station |
| South | Chippendale | Startups, galleries, warehouse offices | Central Park, Broadway, Kensington St |
| South | Redfern | Startups, cafés, small retail | Redfern station, Regent St |
| South | Haymarket | Retail, hospitality, Tech Central startups | Chinatown, Dixon St, Paddy's Markets |
| South | Alexandria / Waterloo | Showrooms, warehouses, fitness, cafés | Bourke Rd, Green Square station |
| Harbour West | The Rocks | Tourism, hospitality, heritage retail | George St, Argyle St, Circular Quay |
| Harbour West | Barangaroo | Finance, corporate, dining | Barangaroo Reserve, Hickson Rd |
| West | Pyrmont | Tech, media, hospitality | Darling Harbour, Harris St, Pirrama Rd |
| West | Ultimo | Education, media, creative | Harris St, UTS, TAFE NSW Ultimo |

**Eastern Suburbs** (Waverley, Woollahra, Randwick)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| Beaches | Bondi / Bondi Beach | Cafés, fitness, surf, wellness | Campbell Pde, Hall St, Bondi Beach |
| Beaches | Coogee / Clovelly | Hospitality, fitness, small retail | Coogee Bay Rd, Arden St |
| Beaches | Maroubra | Cafés, trades, fitness | Anzac Pde, Maroubra Junction |
| Centres | Bondi Junction | Retail, health clinics, professional services | Oxford St Mall, Bondi Junction station, Westfield Bondi Junction |
| Centres | Randwick / Kensington | Health, education, cafés | Belmore Rd, UNSW, Prince of Wales Hospital, Anzac Pde |
| Harbour | Double Bay / Rose Bay | Boutique retail, clinics, real estate | Knox St, Cross St, New South Head Rd |

**Inner West** (Inner West Council; Glebe in City of Sydney)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| King St–Enmore | Newtown / Enmore | Venues, cafés, vintage retail, tattoo and creative studios | King St, Enmore Rd, Newtown station |
| South | Marrickville / Dulwich Hill | Breweries, makers, cafés, allied health | Marrickville Rd, Addison Rd, Dulwich Hill station |
| Peninsula | Balmain / Rozelle | Boutique retail, hospitality, professional services | Darling St, Victoria Rd |
| Peninsula | Leichhardt / Annandale | Italian hospitality, clinics, trades | Norton St, Johnston St, Booth St |
| Peninsula | Glebe | Cafés, bookshops, education-linked services | Glebe Point Rd, Glebe Markets, Wentworth Park |
| West | Ashfield / Summer Hill | Multicultural food, clinics, small retail | Liverpool Rd, Ashfield Mall, Smith St Summer Hill |

**Lower North Shore** (North Sydney, Willoughby, Lane Cove, Mosman, Hunters Hill)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| Harbour | North Sydney / Kirribilli | Professional services, corporate, cafés | Miller St, Berry St, North Sydney station, Kirribilli wharf |
| Harbour | Neutral Bay / Cremorne / Mosman | Boutique retail, clinics, hospitality | Military Rd, Grosvenor St, Spit Junction |
| Health & corporate | St Leonards / Crows Nest | Medical and allied health, professional services, dining | Royal North Shore Hospital, Pacific Hwy, Willoughby Rd |
| Centres | Chatswood | Retail, multicultural dining, corporate offices | Victoria Ave, Chatswood Chase, Chatswood station |
| Centres | Lane Cove / Artarmon | Family businesses, trades, light industry (Artarmon) | Lane Cove Plaza, Burns Bay Rd, Reserve Rd Artarmon |

**Upper North Shore** (Ku-ring-gai, Hornsby)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| Ku-ring-gai | Gordon / Pymble / Lindfield | Allied health, tutoring, professional services | Pacific Hwy, Gordon Centre, Lindfield Village |
| Ku-ring-gai | Turramurra / Wahroonga | Family services, clinics, trades | Rohini St, Coonanbarra Rd, Sydney Adventist Hospital |
| Hornsby | Hornsby / Waitara | Retail, trades, health | Westfield Hornsby, Hornsby station, Florence St |

**Northern Beaches** (Northern Beaches Council)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| South | Manly | Hospitality, tourism, surf, fitness | The Corso, Manly Wharf, South Steyne |
| Central | Dee Why / Collaroy / Narrabeen | Cafés, trades, fitness | The Strand Dee Why, Pittwater Rd |
| Central | Brookvale | Breweries, makers, trades, showrooms | Warringah Mall, Old Pittwater Rd |
| Central | Frenchs Forest | Health, family services | Northern Beaches Hospital, Forest Way |
| North | Mona Vale / Avalon | Boutique retail, hospitality, trades | Barrenjoey Rd, Avalon Pde, Mona Vale Rd |

**Ryde & Macquarie Park** (City of Ryde; Epping in City of Parramatta)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| Business park | Macquarie Park | Tech, pharma, corporate HQs, education | Macquarie Park business district, Macquarie University, Macquarie Centre |
| Centres | Ryde / Top Ryde | Retail, health, family services | Top Ryde City, Victoria Rd, Blaxland Rd |
| Centres | Eastwood / Epping | Multicultural food and retail, tutoring, clinics | Rowe St, Eastwood station, Epping station |
| River | Gladesville / Putney | Professional services, cafés, trades | Victoria Rd Gladesville, Putney Village |

**Hills District** (The Hills Shire)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| Centres | Castle Hill | Retail, clinics, trades, family services | Castle Towers, Showground Rd, Castle Hill station |
| Business park | Norwest / Bella Vista | Corporate offices, health, professional services | Norwest Business Park, Norwest Lake, Bella Vista station |
| Centres | Baulkham Hills | Trades, home services, clinics | Windsor Rd, Stockland Baulkham Hills |
| Growth area | Kellyville / Rouse Hill | Builders, home services, childcare, fitness | Rouse Hill Town Centre, Windsor Rd, Metro North West line |

**Greater Parramatta** (City of Parramatta, Cumberland)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| CBD | Parramatta | Professional services, government suppliers, hospitality | Church St, Eat Street, Parramatta Square, Parramatta Light Rail |
| Health | Westmead | Medical research, health, allied health | Westmead Health Precinct, Hawkesbury Rd |
| Centres | Harris Park | Indian restaurants, grocers, multicultural retail | Wigram St, Marion St |
| Centres | Granville / Merrylands / Auburn | Multicultural retail and food, trades, clinics | Merrylands Rd, Stockland Merrylands, Auburn Rd |
| East | Sydney Olympic Park / Rydalmere | Events, corporate, light industry | Olympic Blvd, Western Sydney University Parramatta campus (Rydalmere) |

**Western Sydney** (Blacktown, Penrith)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| Blacktown | Blacktown / Seven Hills | Trades, retail, health, logistics | Main St Blacktown, Westpoint Blacktown, Blacktown Hospital |
| Blacktown | Rooty Hill / Mount Druitt | Family businesses, trades, community services | Westfield Mount Druitt, Rooty Hill station |
| Penrith | Penrith / St Marys | Trades, construction, retail, hospitality | High St Penrith, Westfield Penrith, Nepean River, Queen St St Marys |

**South West Sydney** (Liverpool, Fairfield, Campbelltown, Camden)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| Liverpool | Liverpool | Health, professional services, retail | Macquarie St, Liverpool Hospital, Westfield Liverpool |
| Fairfield | Fairfield / Cabramatta | Multicultural food and retail, grocers, clinics | Ware St Fairfield, John St Cabramatta, Freedom Plaza |
| Macarthur | Campbelltown | Trades, health, retail | Queen St, Macarthur Square, Campbelltown Hospital |
| Macarthur | Camden / Narellan / Oran Park | Builders, home services, family services | Argyle St Camden, Narellan Town Centre, Oran Park Podium |

**Canterbury-Bankstown** (City of Canterbury-Bankstown)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| Bankstown | Bankstown | Multicultural retail, clinics, professional services | Chapel Rd, Bankstown Central, Saigon Place |
| Canterbury | Campsie / Canterbury | Multicultural food, grocers, clinics | Beamish St, Canterbury Rd |
| Canterbury | Lakemba / Punchbowl | Restaurants, sweets shops, small retail | Haldon St, The Boulevarde |
| South | Revesby / Padstow | Trades, light industry, family services | Revesby station, Padstow industrial area |

**St George & Bayside** (Bayside, Georges River)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| Georges River | Hurstville | Multicultural dining, retail, professional services | Forest Rd, Westfield Hurstville, Hurstville station |
| Georges River | Kogarah | Health, professional services | St George Hospital, Railway Pde Kogarah |
| Bayside | Rockdale / Arncliffe / Brighton-Le-Sands | Hospitality, clinics, trades | Princes Hwy, Bay St, The Grand Pde |
| Bayside | Mascot / Botany | Logistics, aviation services, corporate | Sydney Airport, Botany Rd, Mascot station, Port Botany |

**Sutherland Shire** (Sutherland Shire Council)

| Precinct | Suburb | Business mix (draft) | Real places to draw from |
|---|---|---|---|
| Coast | Cronulla | Hospitality, surf, fitness, tourism | Cronulla Mall, The Esplanade, Cronulla station |
| Centres | Miranda / Caringbah | Retail, clinics, trades | Westfield Miranda, The Kingsway, Port Hacking Rd |
| Industrial | Taren Point | Light industry, trades, showrooms | Taren Point Rd, Parraweena Rd |
| Centres | Sutherland / Engadine | Family services, trades, clinics | Eton St Sutherland, Old Princes Hwy Engadine, Royal National Park (gateway) |

---

## 5. NLP entity coverage

Each page should cover the topic map Google expects for a freelance website designer in its area:

- **Services:** website design, website development, redesign, e-commerce, landing pages, SEO-ready builds, hosting and care plans, CMS training (only those offered).
- **Platforms:** only those the entity source confirms ({{PLATFORMS}}). Compare with DIY builders honestly, without disparaging them.
- **Buyers:** small-business owner, sole trader, tradie, startup founder, marketing manager, practice manager, hospitality operator, retailer, builder.
- **Site elements:** homepage, service pages, service-area pages, contact, quote and booking forms, menus, checkout, blog, Google Business Profile, analytics, Core Web Vitals.
- **Places:** master hub: Greater Sydney, the 14 regions and their councils. Regional hub: the region, its councils (from §4), its precincts and suburbs. Name a council only where it's correct for that suburb.
- **Regulation and standards:** WCAG 2.2, Disability Discrimination Act 1992, Privacy Act 1988 and the Australian Privacy Principles, Spam Act 2003 (email sign-ups), Australian Consumer Law, auDA (.au domains). Name each only where it's relevant and give no legal advice.
- **Trust:** {{OWNER_NAME}}, {{CREDENTIALS}}, ABN {{ABN}}, {{LEGAL_NAME}}, the portfolio.

Google's NLP should read {{DOMAIN}} as the Sydney specialist for small-business, trade, hospitality, health and startup websites in each region, not a thin set of pages built around "web designer [suburb]".

## 6. BERT specificity

Every sentence answers who, what, where, why or how.

❌ "We provide website design services."

✅ "{{OWNER_NAME}} builds mobile-first {{PLATFORM}} websites for Surry Hills cafés, Castle Hill builders and Cronulla gyms, then trains the owner to update menus, prices and pages without paying a developer each time." (a pattern: every fact in it must be true for the freelancer)

## 7. MUVERA multi-vector depth

Each section answers one dimension on its own (the passage rule):

- **Problem:** a dated site that doesn't work on phones, a DIY builder site that has outgrown itself, no bookings, quotes or enquiries coming through, invisible on Google Maps.
- **Solution:** one clearly separated card per service, linked to its pillar.
- **Process:** `data-placeholder` until the owner supplies the steps (enquiry → discovery call → proposal → design → build → launch → training).
- **Local context:** region or precinct groups, business mix and real places.
- **Trust:** named freelancer, ABN with the ABR link, real portfolio, published reviews.
- **Outcome:** a fast site the owner can run, launched with little disruption. No numbers or guarantees beyond live copy.
- **Pricing:** real figures or a placeholder.
- **FAQ:** the 7 questions for this hub level.

## 8. Positive sentiment

Keep the tone reassuring and plain: no urgency, fear, "#1", "best in Sydney" or other superlatives. Let the reader see what happens next (send an enquiry, {{OWNER_NAME}} replies, a discovery call is booked). Show only process steps and reply times the owner confirms. Reviews appear only as published.

---

## 9. Hand-off checklist (per page)

- [ ] `{{HUB_LEVEL}}`, `{{REGION}}` and `{{REGION_URL}}` are set, and the region is confirmed in the entity source.
- [ ] Every live sentence from the current page is present or deliberately moved, and the move is noted.
- [ ] All new copy carries `data-flag="new copy: owner sign-off"`.
- [ ] Master hub: every live regional hub is linked in the body under its group. Regional hub: the master hub is linked up, every existing suburb page is linked under its precinct, and 1–3 adjacent regions are linked. All anchors are descriptive.
- [ ] Hero line, narratives, local FAQ answers and "What I build" order are unique to this region (no spun duplicates).
- [ ] No invented prices, packages, testimonials, client names, metrics, "since" year, travel times, map pin, regional office or schema.
- [ ] Phone, email and booking link match the entity source exactly.
- [ ] Referred-out services appear only as links out or a single sentence, never as cards.
- [ ] Images: WebP from `src/static/assets/images/`, real portfolio screenshots only (with client permission), descriptive alt text, width and height set, lazy loading except the hero. No stock "team" photos that suggest an agency.
- [ ] The page meets its own claims: WCAG 2.2 AA contrast, keyboard-usable accordion, good Core Web Vitals.
- [ ] The build runs with no warnings (one H1, alt text and dimensions present, no leftover `{{ }}` or TODO).
- [ ] A flags list for the owner: new copy to approve, empty placeholders, unconfirmed platforms and credentials, unconfirmed regions, the `/web-design-sydney/` URL decision, address / service-area-business decision, in-person meeting areas, client-name permissions.

### Build order

1. Master hub (`/web-design-sydney/`), with regions named but unlinked until their hubs are live.
2. Regional hubs, starting with the regions where the owner has the most real clients and case studies.
3. After each regional hub goes live, update the master hub to link it.
4. Suburb pages (separate prompt), each linking up to its regional hub. Link them from the regional hub only once they're live with local proof.
