// Website Builder Sydney: Sydney GeoHub generator.
// Writes 5 static pages from the data below, then checks them.
// Run: node scripts/build.mjs   (no dependencies; commit the generated HTML)
//
// Facts come only from WEBSITE-BUILDER-ADVICE-ENTITY-SOURCE.md.
// data-source="..." marks live network copy reused verbatim.
// data-flag="new copy: owner sign-off" marks drafted copy.
// data-placeholder marks slots the owner must fill.

import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ORIGIN = "https://websitebuilderadvice.net";
const BUILD_DATE = "2026-10-07";

const BIZ = {
  name: "Website Builder Sydney",
  person: "Marcelo Soler",
  role: "Founder, web designer, and local SEO specialist.",
  phone: "0404 084 847",
  tel: "+61404084847",
  email: "start@websitebuilderadvice.net",
  locality: "Hurstville NSW 2220",
  gbp: "https://maps.app.goo.gl/xrakAW4nFD6ReaPy9",
  abn: "96 492 325 357",
  abr: "https://abr.business.gov.au/ABN/View?abn=96492325357",
  legal: "Marcelo Andres Soler (sole trader)",
};
// The ABR link sits on the same 2 pages as the GBP link (40% domain cap).
const abnText = (pg, prefix = "ABN ") => (pg.gbp ? ext(BIZ.abr, prefix + BIZ.abn) : prefix + BIZ.abn);

const SRC_SG = "https://stgeorgewebdesign.com.au/";
const SRC_SW = "https://sutherlandwebdesign.com.au/";
const SRC_SWA = "https://sutherlandwebdesign.com.au/about/";
const NEW = ' data-flag="new copy: owner sign-off"';
const src = (u) => ` data-source="${u}"`;

const LINKS = {
  stgeorge: "https://stgeorgewebdesign.com.au/",
  bankstown: "https://www.stgeorgewebdesign.com.au/web-design-bankstown/",
  sutherland: "https://sutherlandwebdesign.com.au/",
  sutherlandAbout: "https://sutherlandwebdesign.com.au/about/",
  parramatta: "https://webdesignparramatta.sydney/",
  wcag: "https://www.w3.org/TR/WCAG22/",
  oaic: "https://www.oaic.gov.au/privacy/australian-privacy-principles",
};
const ext = (href, text) => `<a href="${href}" rel="noopener">${text}</a>`;

// Pages ---------------------------------------------------------------------
const P = {
  sydney: { path: "/", nav: "Sydney", label: "Sydney" },
  stgeorge: { path: "/st-george-bayside/", nav: "St George & Bayside", label: "St George & Bayside" },
  bankstown: { path: "/canterbury-bankstown/", nav: "Canterbury-Bankstown", label: "Canterbury-Bankstown" },
  sutherland: { path: "/sutherland-shire/", nav: "Sutherland Shire", label: "Sutherland Shire" },
  cbd: { path: "/cbd-inner-city/", nav: "CBD & Inner City", label: "CBD & Inner City" },
};
const ORDER = ["sydney", "stgeorge", "bankstown", "sutherland", "cbd"];
const link = (key, text) => `<a href="${P[key].path}">${text}</a>`;

// Icons (inline SVG, stroke only) ------------------------------------------
const ICON = {
  page: '<path d="M6 3h9l3 3v15H6z"/><path d="M15 3v3h3"/><path d="M9 11h6M9 15h6"/>',
  pages: '<path d="M8 3h9l3 3v13H8z"/><path d="M4 7v14h12"/>',
  code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12"/>',
  pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
  refresh: '<path d="M20 11a8 8 0 10-2.3 5.7"/><path d="M20 4v7h-7"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  gallery: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
  pen: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/>',
};
const icon = (k) =>
  `<span class="card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICON[k]}</svg></span>`;

// Shared blocks: services (live copy) --------------------------------------
const SERVICES = [
  { id: "svc-onepage", icon: "page", title: "One-page business website", source: SRC_SG,
    text: "A design matched to your brand, built around your services, and tested to perform on mobile. Not a template with your logo dropped in." },
  { id: "svc-multipage", icon: "pages", title: "Multi-page website", source: SRC_SG,
    text: "Home, service, contact, and thank-you pages included, with suburb pages available on request for broader local targeting." },
  { id: "svc-custom", icon: "code", title: "Custom WordPress website", source: SRC_SG,
    text: "Fully custom website design and build on WordPress, suited to businesses that need a deeper content structure and tailored visual presentation." },
  { id: "svc-seo", icon: "pin", title: "Local SEO structure", source: SRC_SG,
    text: "Page headings, service page copy, and location signals all structured to help you appear in Google for the searches that matter." },
  { id: "svc-ads", icon: "target", title: "Google Ads landing pages", source: SRC_SG,
    text: "Best for Google Ads campaigns or Google Business Profile traffic. A focused landing page built to convert, delivered within one business day." },
  { id: "svc-redesign", icon: "refresh", title: "Website redesigns", source: SRC_SWA,
    text: "Most clients come to us because their current website is outdated, too slow, hard to update, or not pulling its weight in search." },
];
const svc = (id) => SERVICES.find((s) => s.id === id);
const svcLink = (id) => `<a href="#${id}">${svc(id).title.toLowerCase()}</a>`;

// Shared blocks: what I build (drafted from live portfolio descriptions) ----
const BUILD = {
  landing: { icon: "target", title: "Landing pages for ads and Maps traffic", text: "One focused page for a Google Ads campaign or your Google Business Profile, with a lead form and click-to-call." },
  onepage: { icon: "page", title: "One-page business sites", text: "Services, about, contact and a quote button on a single fast page, for businesses that need to look credible online quickly." },
  multipage: { icon: "pages", title: "Service and suburb pages", text: "A page for each service and, on request, each suburb you work in, so each one can be found on its own." },
  quote: { icon: "phone", title: "Quote forms and click-to-call", text: "Enquiry forms and call buttons visible in every section, so a customer on a phone can reach you in one tap." },
  gallery: { icon: "gallery", title: "Project galleries", text: "Before-and-after and portfolio galleries for builders, painters, architects and other trades whose work sells itself." },
  booking: { icon: "calendar", title: "Booking and appointment paths", text: "Clear booking paths for clinics, studios and lesson-based businesses, as on the dental and driving school sites in the portfolio." },
  practice: { icon: "list", title: "Practice-area and treatment pages", text: "Separate pages for each treatment, practice area or specialty, the structure used on the dental and legal sites in the portfolio." },
  redesign: { icon: "refresh", title: "Redesigns of slow or dated sites", text: "A rebuild for a site that is outdated, slow on mobile or hard to update, keeping what already works." },
  copy: { icon: "pen", title: "Copy written from your brief", text: "Your brief or a short phone call turned into clear page copy, for owners who know their trade but not what to write." },
};

// Shared blocks: pricing (live copy, St George home) ------------------------
const PLANS = [
  { featured: true, name: "Single Landing AI Site", price: "$500", unit: "one-off",
    text: "Best for Google Ads campaigns or Google Business Profile traffic. A focused landing page built to convert, delivered within one business day.",
    ticks: ["Lead form and click-to-call CTA", "Mobile-first build with fast load times", "Delivered live in 1 business day", "Domain connection guidance included", "Free hosting included", "Free logo included"],
    cta: "Start a landing page build" },
  { name: "Multi-page AI site", price: "from $1,000", unit: "package",
    text: "Home, service, contact, and thank-you pages included, with suburb pages available on request for broader local targeting.",
    ticks: ["5-page website build", "Suburb and service page variants on request", "Google Business Profile connected", "Live in 1 week"],
    cta: "Start a multi-page build" },
  { name: "Custom Website", price: "$5,000", unit: "project",
    text: "Fully custom website design and build on WordPress, suited to businesses that need a deeper content structure and tailored visual presentation.",
    ticks: ["10 to 15 pages", "Suburb and service variants", "3 design revisions included", "Visual design mockup in PSD"],
    cta: "Discuss a custom website" },
];

// Shared blocks: portfolio (live labels, sutherlandwebdesign.com.au) ---------
const WORK = {
  carpet: { name: "Total Carpet Cleaning", meta: "Cleaning", tags: "Website Design + Local SEO",
    img: "total-carpet-cleaning-website-design.webp", h: 378,
    alt: "Homepage of the Total Carpet Cleaning website, with a same-day booking button and before-and-after carpet photos" },
  dental: { name: "Balgowlah Family Dental", meta: "Dental · Northern Beaches", tags: "Website Design + Lead Generation",
    img: "balgowlah-family-dental-website-design.webp", h: 390,
    alt: "Homepage of the Balgowlah Family Dental website, a family dental practice on Sydney's Northern Beaches" },
  brm: { name: "BRM Patent Attorneys", meta: "Legal · Melbourne", tags: "Website Design + Professional Services SEO",
    img: "brm-patent-attorneys-website-design.webp", h: 349,
    alt: "Homepage of the BRM Patent Attorneys website, a Melbourne patent and trademark attorney firm" },
  level: { name: "Level Architects", meta: "Architecture · Sydney", tags: "Website Design + Portfolio Website",
    img: "level-architects-portfolio-website.webp", h: 372,
    alt: "Homepage of the Level Architects website, showing a full-width photo of a modern house and pool at dusk" },
  francis: { name: "Francis Design", meta: "Home Design · Sydney", tags: "Website Design + Local SEO",
    img: "francis-design-home-design-website.webp", h: 341,
    alt: "Homepage of the Francis Design website, a Sydney building designer, headed Custom home design in Sydney" },
  bms: { name: "BMS Constructions", meta: "Commercial Construction · Sydney", tags: "Website Design + Professional Services SEO",
    img: "bms-constructions-commercial-builder-website.webp", h: 346,
    alt: "Homepage of the BMS Constructions website, a Sydney commercial builder, over a photo of a glass-fronted commercial building" },
  physio: { name: "Physio Focus", meta: "Healthcare · Sutherland Shire", tags: "Website Design + Local SEO" },
  montys: { name: "Monty's Plumbing", meta: "Plumbing · Sutherland Shire", tags: "Website Design + Local SEO" },
  ontarget: { name: "On Target Driving School", meta: "Driving School · Liverpool", tags: "Website Design + Lead Generation" },
};

// Shared blocks: testimonials (verbatim, sutherlandwebdesign.com.au videos) -
const QUOTES = {
  shani: { text: "Smooth, fast, and the pricing was spot on.", who: "Shani's Cafe, Sydney CBD" },
  rob: { text: "The site was finished in one day and looked professional.", who: "Rob's Waterproofing" },
  landscaping: { text: "Simple process, clear pricing, and no stress.", who: "Local Landscaping Business" },
};

// Section renderers ----------------------------------------------------------
function hero(pg) {
  const crumbs = pg.key === "sydney"
    ? `<li aria-current="page">Sydney</li>`
    : `<li>${link("sydney", "Sydney")}</li><li aria-current="page">${pg.label}</li>`;
  return `
<nav class="crumbs container" aria-label="Breadcrumb"><ol>${crumbs}</ol></nav>
<section class="hero" aria-labelledby="hero-h">
  <div class="container hero-grid">
    <div>
      <span class="pill"${NEW}><span class="dot"></span>${pg.pill}</span>
      <h1 id="hero-h"${NEW}>${pg.h1}</h1>
      <p class="lede"${NEW}>${pg.lede}</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="#quote">Get a website quote</a>
        <a class="btn btn-ghost" href="tel:${BIZ.tel}">Call ${BIZ.phone}</a>
      </div>
      <ul class="trust-row"${src(SRC_SG)}>
        <li>Starting from $500</li>
        <li>Built in 1 day</li>
        <li>You deal with the builder</li>
        <li>${pg.trustExtra}</li>
        <li>${abnText(pg)}</li>
      </ul>
    </div>
    <aside class="hero-card" aria-label="Starter website offer"${src(SRC_SG)}>
      <span class="eyebrow">Most popular</span>
      <h2>Single Landing AI Site</h2>
      <p class="price"><span class="gradient-text">$500</span></p>
      <p class="dim fs-sm">one-off</p>
      <ul class="ticks">
        <li>Lead form and click-to-call CTA</li>
        <li>Mobile-first build with fast load times</li>
        <li>Delivered live in 1 business day</li>
        <li>Domain connection guidance included</li>
      </ul>
    </aside>
  </div>
</section>`;
}

function services(pg) {
  const cards = SERVICES.map((s) => `
      <article class="card" id="${s.id}"${src(s.source)}>
        ${icon(s.icon)}
        <h3>${s.title}</h3>
        <p class="muted">${s.text}</p>
      </article>`).join("");
  return `
<section class="section section--alt" id="services" aria-labelledby="services-h">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Services</span>
      <h2 id="services-h"${NEW}>${pg.servicesH2}</h2>
      <p class="muted"${NEW}>${pg.servicesLead}</p>
    </div>
    <div class="grid grid-3">${cards}
    </div>
    <p class="source-note"${src(SRC_SW)}>Also offered: ecommerce websites, logo and brand design, web hosting and support, and online reputation management. If you want more than just a website, mention it when you enquire and we'll include it in your quote.</p>
  </div>
</section>
<section class="section" aria-labelledby="mid-cta-h">
  <div class="container">
    <div class="card"${NEW}>
      <h2 id="mid-cta-h">${pg.midCta}</h2>
      <p class="muted">Send a short brief through the quote form or call ${BIZ.phone}. Marcelo replies the same business day.</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="#quote">Get a website quote</a>
        <a class="btn btn-ghost" href="tel:${BIZ.tel}">Call ${BIZ.phone}</a>
      </div>
    </div>
  </div>
</section>`;
}

function pricing() {
  const cards = PLANS.map((p) => `
      <article class="card plan${p.featured ? " plan--featured" : ""}">
        ${p.featured ? '<span class="badge">Most popular</span>' : ""}
        <h3>${p.name}</h3>
        <p class="price">${p.price} <small>${p.unit}</small></p>
        <p class="muted">${p.text}</p>
        <ul class="ticks">${p.ticks.map((t) => `<li>${t}</li>`).join("")}</ul>
        <a class="btn ${p.featured ? "btn-primary" : "btn-ghost"}" href="#quote">${p.cta}</a>
      </article>`).join("");
  return `
<section class="section section--alt" id="pricing" aria-labelledby="pricing-h"${src(SRC_SG)}>
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Pricing</span>
      <h2 id="pricing-h">Simple, transparent pricing. No lock-in.</h2>
      <p class="muted">Start with what your business needs now. Upgrade when you are ready to do more. Prices are the same across Sydney.</p>
    </div>
    <div class="grid grid-3">${cards}
    </div>
    <p class="source-note">Your domain is the only extra cost, typically $15–25 per year through a registrar like Crazy Domains or Namecheap.</p>
  </div>
</section>`;
}

function whatIBuild(pg) {
  const cards = pg.build.map((k) => {
    const b = BUILD[k];
    return `
      <article class="card">
        ${icon(b.icon)}
        <h3>${b.title}</h3>
        <p class="muted">${b.text}</p>
      </article>`;
  }).join("");
  return `
<section class="section" id="what-i-build" aria-labelledby="build-h"${NEW}>
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">What gets built</span>
      <h2 id="build-h">${pg.buildH2}</h2>
      <p class="muted">${pg.buildLead}</p>
    </div>
    <div class="grid grid-3">${cards}
    </div>
  </div>
</section>`;
}

function areaCard(a) {
  const links = (a.links || []).length
    ? `<ul class="links">${a.links.map((l) => `<li>${l}</li>`).join("")}</ul>` : "";
  const status = a.status ? `<span class="status">${a.status}</span>` : "";
  return `
        <article class="card area-card"${NEW}>
          <h4>${a.name}${status}</h4>
          ${a.places ? `<p class="places">${a.places}</p>` : ""}
          <p class="muted">${a.text}</p>${links}
        </article>`;
}

function serviceAreas(pg) {
  const groups = pg.areas.map((g) => `
    <div class="area-group">
      <h3>${g.group}</h3>
      <div class="grid grid-2">${g.items.map(areaCard).join("")}
      </div>
    </div>`).join("");
  return `
<section class="section section--alt" id="areas" aria-labelledby="areas-h">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Service areas</span>
      <h2 id="areas-h"${NEW}>${pg.areasH2}</h2>
      <p class="muted"${NEW}>${pg.areasLead}</p>
    </div>${groups}
    <div class="nearby"${NEW}>${pg.nearby}</div>
    <div class="nearby"${NEW}>
      <h3>Not in the list?</h3>
      <p class="muted">Past projects include clients on the Northern Beaches, in Wollongong and in Melbourne, so most work runs by phone and email wherever you are. Send a brief and Marcelo will tell you straight away if it's a fit.</p>
      <p><a class="card-link" href="#quote">Get a website quote</a></p>
    </div>
  </div>
</section>`;
}

function work(pg) {
  const cards = pg.work.map((k) => {
    const w = WORK[k];
    const img = w.img
      ? `<img src="/images/${w.img}" alt="${w.alt}" width="800" height="${w.h}" loading="lazy" decoding="async" />` : "";
    return `
      <article class="card${w.img ? " work-card" : ""}"${src(SRC_SW)}>
        ${img}
        <div class="${w.img ? "card-body" : ""}">
          <p class="meta">${w.meta}</p>
          <h3>${w.name}</h3>
          <p class="muted">${w.tags}</p>
        </div>
      </article>`;
  }).join("");
  const ph = pg.workPlaceholder
    ? `<div data-placeholder="local case study"><p>${pg.workPlaceholder}</p></div>` : "";
  return `
<section class="section" id="work" aria-labelledby="work-h">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Selected work</span>
      <h2 id="work-h"${NEW}>${pg.workH2}</h2>
      <p class="muted"${NEW}>${pg.workLead}</p>
    </div>
    <div class="grid grid-3">${cards}
    </div>
    ${ph ? `<div class="after-grid">${ph}</div>` : ""}
  </div>
</section>`;
}

function reviews(pg) {
  const cards = pg.quotes.map((k) => {
    const q = QUOTES[k];
    return `
      <figure class="card quote-card"${src(SRC_SW)}>
        <blockquote><p>"${q.text}"</p></blockquote>
        <figcaption>${q.who}</figcaption>
      </figure>`;
  }).join("");
  const ph = (pg.reviewPlaceholders || []).map((t) => `
      <div data-placeholder="testimonial"><p>${t}</p></div>`).join("");
  return `
<section class="section section--alt" id="reviews" aria-labelledby="reviews-h">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Reviews</span>
      <h2 id="reviews-h"${src(SRC_SG)}>What clients say after launch</h2>
    </div>
    <div class="grid grid-3">${cards}${ph}
    </div>
    <p class="source-note"${NEW}>Quotes are taken word for word from client video testimonials published on Sutherland Shire Website Design, Marcelo Soler's Sutherland Shire studio site.</p>
  </div>
</section>`;
}

function faq(pg) {
  const items = pg.faq.map((f, i) => `
      <details class="faq-item"${NEW}${i === 0 ? " open" : ""}>
        <summary>${f.q}</summary>
        <div class="faq-answer">${f.a}</div>
      </details>`).join("");
  return `
<section class="section" id="faq" aria-labelledby="faq-h">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">FAQ</span>
      <h2 id="faq-h"${NEW}>${pg.faqH2}</h2>
    </div>
    <div class="faq">${items}
    </div>
  </div>
</section>`;
}

function about(pg) {
  const long = pg.key === "sydney";
  const network = long
    ? `<p${NEW}>Marcelo also runs the studio sites that cover individual parts of Sydney: St George Web Design, Web Design Bankstown, Sutherland Shire Website Design and FP Web Design in Parramatta. Website Builder Sydney is the Sydney-wide hub that joins them. Each one quotes the same prices and the same phone number, because the same person does the work.</p>` : "";
  const extra = long ? `
      <h3${src(SRC_SG)}>Process: brief in the morning, website live by end of day</h3>
      <ol class="steps stack"${src(SRC_SG)}>
        <li><strong>Send us the brief.</strong> Tell us what you do, who you help, and what the website needs to achieve. A short brief or phone call is enough to get started.</li>
        <li><strong>We build it the same day.</strong> We design the layout, write the copy, and build the site. You receive a complete draft for review by end of business day.</li>
        <li><strong>Approve and go live.</strong> Review the draft, request any changes, and once you are happy we launch it. Your business is live and taking enquiries.</li>
      </ol>` : "";
  return `
<section class="section section--alt" id="about" aria-labelledby="about-h">
  <div class="container about-grid">
    <div class="measure">
      <span class="eyebrow">About</span>
      <h2 id="about-h"${NEW}>${pg.aboutH2}</h2>
      <p${src(SRC_SWA)}><strong>${BIZ.person}</strong>. ${BIZ.role}</p>
      <ul class="ticks"${src(SRC_SWA)}>
        <li>18+ years of brand and design experience</li>
        <li>Fast website turnarounds for time-pressed businesses</li>
        <li>Clear pricing, straightforward communication, local support</li>
      </ul>
      <p${src(SRC_SG)}>No account managers. No handoffs. You talk directly to the person doing the work, which means fewer misunderstandings and faster decisions.</p>
      <p${NEW}>${pg.aboutLocal}</p>
      ${network}${extra}
    </div>
    <aside class="card" aria-label="Business details">
      <h3>Business details</h3>
      <ul class="fact-list">
        <li><span class="k">Business</span><span>${BIZ.name}</span></li>
        <li><span class="k">Web designer</span><span>${BIZ.person}</span></li>
        <li><span class="k">Based in</span><span>${BIZ.locality}</span></li>
        <li><span class="k">Phone</span><span><a href="tel:${BIZ.tel}">${BIZ.phone}</a></span></li>
        <li><span class="k">Email</span><span><a href="mailto:${BIZ.email}">${BIZ.email}</a></span></li>
        <li><span class="k">ABN</span><span>${abnText(pg, "")}</span></li>
        <li><span class="k">Legal entity</span><span>${BIZ.legal}</span></li>
      </ul>
      ${pg.gbp ? `<p class="fs-sm after-grid">${ext(BIZ.gbp, "Website Builder Sydney on Google Maps")}</p>` : ""}
    </aside>
  </div>
</section>`;
}

function ready(pg) {
  return `
<section class="section ready" id="quote" aria-labelledby="quote-h">
  <div class="container ready-grid">
    <div>
      <span class="eyebrow">Get a quote</span>
      <h2 id="quote-h"${src(SRC_SG)}>Tell us what you need and we will have a website ready in 1 day.</h2>
      <p class="muted"${src(SRC_SG)}>Whether this is a $500 starter site, a full multi-page build, or a landing page for Google Ads, a short brief is enough to get started. We respond the same business day.</p>
      <ul class="contact-lines">
        <li>Call or text: <a href="tel:${BIZ.tel}">${BIZ.phone}</a></li>
        <li>Email: <a href="mailto:${BIZ.email}">${BIZ.email}</a></li>
        <li class="dim">${BIZ.locality} · working ${pg.workingArea}</li>
      </ul>
    </div>
    <form class="form-card" action="mailto:${BIZ.email}" method="post" enctype="text/plain" aria-label="Website quote request">
      <div class="field-row">
        <div class="field"><label for="f-name">Name <span class="req">*</span></label><input id="f-name" name="name" type="text" autocomplete="name" required /></div>
        <div class="field"><label for="f-business">Business</label><input id="f-business" name="business" type="text" autocomplete="organization" /></div>
      </div>
      <div class="field-row">
        <div class="field"><label for="f-email">Email <span class="req">*</span></label><input id="f-email" name="email" type="email" autocomplete="email" required /></div>
        <div class="field"><label for="f-phone">Phone</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" /></div>
      </div>
      <div class="field-row">
        <div class="field"><label for="f-area">Area</label>
          <select id="f-area" name="area">${["St George & Bayside", "Canterbury-Bankstown", "Sutherland Shire", "Sydney CBD & Inner City", "Somewhere else in Sydney", "Outside Sydney"].map((o) => `<option${o === pg.formArea ? " selected" : ""}>${o}</option>`).join("")}</select></div>
        <div class="field"><label for="f-service">What do you need?</label>
          <select id="f-service" name="service"><option>$500 one-page website</option><option>Multi-page website</option><option>Custom WordPress website</option><option>Google Ads landing page</option><option>Website redesign</option><option>Not sure yet</option></select></div>
      </div>
      <div class="field"><label for="f-msg">About your business <span class="req">*</span></label><textarea id="f-msg" name="message" required placeholder="What you do, where you work and what the website needs to achieve."></textarea></div>
      <button class="btn btn-primary" type="submit">Send my brief</button>
      <p class="form-note">Sending opens your email app with your brief filled in. Prefer to talk? Call or text ${BIZ.phone}.</p>
    </form>
  </div>
</section>`;
}

// Layout ---------------------------------------------------------------------
function header(pg) {
  const items = ORDER.map((k) => `<li><a href="${P[k].path}"${k === pg.key ? ' aria-current="page"' : ""}>${P[k].nav}</a></li>`).join("");
  return `
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="${P.sydney.path}" aria-label="${BIZ.name}, home">
      <span class="brand-mark" aria-hidden="true">WB</span>
      <span class="brand-name">${BIZ.name}<small>Freelance web design</small></span>
    </a>
    <nav class="nav" aria-label="Primary"><ul>${items}</ul></nav>
    <div class="header-actions">
      <a class="header-phone" href="tel:${BIZ.tel}">${BIZ.phone}</a>
      <a class="btn btn-primary" href="#quote">Get a quote</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" data-menu-toggle>
        <span aria-hidden="true">☰</span><span class="sr-only">Menu</span>
      </button>
    </div>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    <ul>${items}<li><a href="tel:${BIZ.tel}">Call ${BIZ.phone}</a></li></ul>
  </div>
</header>`;
}

function footer(pg) {
  const related = ORDER.filter((k) => k !== pg.key)
    .map((k) => `<li><a href="${P[k].path}">${k === "sydney" ? "Web design across Sydney" : `Web design for ${P[k].label} businesses`}</a></li>`).join("");
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <p><strong>${BIZ.name}</strong></p>
        <p${NEW}>Fast, mobile-first websites for Sydney small businesses, designed and built by ${BIZ.person}. Starting from $500, built in 1 day.</p>
      </div>
      <div>
        <h2>Areas</h2>
        <ul>${related}</ul>
      </div>
      <div>
        <h2>On this page</h2>
        <ul><li><a href="#services">Services</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#areas">Service areas</a></li><li><a href="#faq">FAQ</a></li></ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul><li><a href="tel:${BIZ.tel}">${BIZ.phone}</a></li><li><a href="mailto:${BIZ.email}">${BIZ.email}</a></li><li>${BIZ.locality}</li></ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p${NEW}>${BIZ.name} acknowledges the Traditional Custodians of the lands across Sydney where we live and work, and pays respect to Elders past and present.</p>
      <p>© <span id="year">2026</span> ${BIZ.name}. ABN ${BIZ.abn}. All rights reserved.</p>
    </div>
  </div>
</footer>`;
}

function page(pg) {
  const url = ORIGIN + pg.path;
  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${pg.title}</title>
<meta name="description" content="${pg.description}" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_AU" />
<meta property="og:site_name" content="${BIZ.name}" />
<meta property="og:title" content="${pg.title}" />
<meta property="og:description" content="${pg.description}" />
<meta property="og:url" content="${url}" />
<meta name="theme-color" content="#070b12" />
<link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Newsreader:ital,opsz,wght@0,6..72,400;1,6..72,400&display=swap" />
<link rel="stylesheet" href="/css/styles.css?v=1" />
<script src="/js/main.js" defer></script>
</head>
<body>
${header(pg)}
<main id="main">
${hero(pg)}
${services(pg)}
${pricing()}
${whatIBuild(pg)}
${serviceAreas(pg)}
${work(pg)}
${reviews(pg)}
${faq(pg)}
${about(pg)}
${ready(pg)}
</main>
${footer(pg)}
</body>
</html>
`;
}

// Shared FAQ answers reused in regional wording -----------------------------
const A_WIX = (local) => `<p>If you have a simple offer, a free weekend and you enjoy tinkering, a builder like Wix or Squarespace can be enough, and both are reasonable platforms. A freelancer makes more sense when your time is worth more than the build, when you need the site structured for local search from day one, or when a DIY attempt took all weekend and still looks off.${local}</p><p>With ${BIZ.name} the starting point is a $500 one-page site, live in 1 business day, so the gap between DIY and done-for-you is smaller than most owners expect.</p>`;
const A_TIME = `<p>A single landing page is delivered live in 1 business day once the brief is ready. A multi-page site (home, service, contact and thank-you pages) is live in 1 week. A Custom Website of 10 to 15 pages on WordPress is scoped with you before work starts.</p>`;
const A_EDIT = `<p>It depends on the build. The $500 and multi-page sites are fast static builds (clean HTML and CSS, no WordPress or plugins), so changes are made for you on request and Marcelo stays your contact for updates. If you want to edit pages yourself, the Custom Website is built on WordPress, which gives you a content editor.</p>`;
const A_GOOGLE = (local) => `<p>Every build is mobile-first and fast-loading, with page headings, service copy and location signals structured for local search. Multi-page sites are connected to your Google Business Profile.${local} Nobody can honestly promise a ranking, but a clear, fast site gives Google and your customers less reason to look elsewhere.</p>`;
const A_RULES = (linkWcag, linkOaic) => `<p>Builds use mobile-first layouts, clear headings, readable contrast and labelled forms, which are core parts of ${linkWcag ? ext(LINKS.wcag, "WCAG 2.2") : "WCAG 2.2"}, the accessibility standard most Australian guidance points to. If your site collects names, emails or phone numbers, it needs a privacy policy, and the ${linkOaic ? ext(LINKS.oaic, "OAIC's guide to the Australian Privacy Principles") : "OAIC's guide to the Australian Privacy Principles"} explains when those principles apply to a business.</p><p>This is general information, not legal advice. Check your obligations with a qualified adviser.</p>`;

// Page data --------------------------------------------------------------------
const PAGES = [
  {
    key: "sydney",
    title: "Website Design Sydney from $500 | Website Builder Sydney",
    description: "Freelance website design for Sydney small businesses by Marcelo Soler. Fast, mobile-first sites from $500, built in 1 day. St George, Bankstown, Sutherland Shire and the CBD.",
    pill: "Website design Sydney · Hurstville based",
    h1: 'Website Design &amp; Builds for <span class="gradient-text">Sydney Small Businesses</span>',
    lede: "Marcelo Soler designs and builds fast, mobile-first websites for tradies, clinics, cafés and professional firms across southern Sydney and the CBD, so customers can call, book or ask for a quote on their first visit.",
    trustExtra: "Based in Hurstville",
    servicesH2: "Website services for Sydney small businesses",
    servicesLead: "Six services, one person doing the work. Each one is built around getting a customer from a Google search to a phone call or a quote request.",
    midCta: "Know what you need? Send a short brief.",
    build: ["onepage", "landing", "quote", "multipage", "gallery", "booking", "practice", "redesign", "copy"],
    buildH2: "What gets built for Sydney businesses",
    buildLead: "Site types and features from real projects in the portfolio, from one-page trade sites to multi-page clinic and legal sites.",
    areasH2: "Website design across Sydney, region by region",
    areasLead: "Each region has its own business mix, so each hub explains what a website there needs to do. Pick the region your customers are in.",
    areas: [
      { group: "South", items: [
        { name: link("stgeorge", "Website design for St George &amp; Bayside businesses"), places: "Hurstville · Kogarah · Rockdale · Mascot",
          text: "Home base for Website Builder Sydney. Restaurants and retailers around Forest Road in Hurstville, practices near St George Hospital in Kogarah, and logistics firms near Sydney Airport each need a different kind of site." },
        { name: link("bankstown", "Website design for Canterbury-Bankstown businesses"), places: "Bankstown · Campsie · Lakemba · Padstow",
          text: "Family businesses, food, clinics and trades from Chapel Road in Bankstown to Beamish Street in Campsie and the Padstow industrial area, where a phone search usually ends in a call." },
        { name: link("sutherland", "Website design for Sutherland Shire businesses"), places: "Cronulla · Miranda · Taren Point · Engadine",
          text: "Cafés and gyms near Cronulla Mall, clinics and retailers around Westfield Miranda, and workshops on Taren Point Road. Healthcare and plumbing clients in the Shire are already in the portfolio." },
      ] },
      { group: "City & East", items: [
        { name: link("cbd", "Website design for Sydney CBD &amp; inner-city businesses"), places: "Sydney CBD · Surry Hills · Pyrmont · Haymarket",
          text: "Professional firms around Martin Place, cafés and studios in Surry Hills, and startups near Central and Pyrmont, competing for attention with much bigger budgets." },
      ] },
      { group: "West", items: [
        { name: "Greater Parramatta", status: "Covered by FP Web Design", places: "Parramatta · Westmead · Harris Park",
          text: `Parramatta and Western Sydney projects run through ${ext(LINKS.parramatta, "FP Web Design in Parramatta")}, the same freelance service with the same pricing.` },
      ] },
    ],
    nearby: `<h3>Other parts of Sydney</h3><p class="muted">Regions without their own hub yet are still covered by phone and email. If your business is on the North Shore, the Northern Beaches or in the Eastern Suburbs, send a brief through the form.</p>`,
    workH2: "Real work for real Australian businesses",
    workLead: "Every site below is live, built for a real client. Locations are where each client trades.",
    work: ["bms", "francis", "level", "dental", "brm", "carpet"],
    quotes: ["shani", "rob", "landscaping"],
    faqH2: "Website design in Sydney: common questions",
    faq: [
      { q: "Which parts of Sydney do you work in?",
        a: `<p>${BIZ.name} is based in Hurstville and works with businesses across ${link("stgeorge", "St George and Bayside")}, ${link("bankstown", "Canterbury-Bankstown")}, the ${link("sutherland", "Sutherland Shire")} and the ${link("cbd", "Sydney CBD and inner city")}. Parramatta projects run through FP Web Design. Past clients also include businesses on the Northern Beaches, in Wollongong and in Melbourne, so distance is rarely a problem.</p>` },
      { q: "Should I use a website builder like Wix or Squarespace, or hire a freelancer?", a: A_WIX("") },
      { q: "How long does a small-business website take?", a: A_TIME },
      { q: "Can I update the website myself after launch?", a: A_EDIT },
      { q: "Will my new website be ready for Google and work well on phones?", a: A_GOOGLE("") },
      { q: "Do we need to meet in person?",
        a: `<p>Usually not. A short brief or a phone call is enough to get started, and the draft is reviewed online before anything goes live. If you would rather talk it through face to face, ask when you call ${BIZ.phone}.</p>` },
      { q: "Is my website accessible and compliant with Australian privacy rules?", a: A_RULES(true, true) },
    ],
    aboutH2: "About Website Builder Sydney",
    aboutLocal: `${BIZ.name} is a freelance web design service based in Hurstville, in Sydney's St George area. It builds websites for trades and service businesses, professional services, builders, health and allied health clinics, and local operators who want to improve their SEO.`,
    gbp: true,
    workingArea: "across Sydney",
    formArea: "Somewhere else in Sydney",
  },
  {
    key: "stgeorge",
    title: "Web Design Hurstville & St George | Website Builder Sydney",
    description: "Website design for Hurstville, Kogarah, Rockdale and Bayside businesses. Hurstville-based freelancer Marcelo Soler builds fast, mobile-first sites from $500 in 1 day.",
    pill: "Web design St George &amp; Bayside · Hurstville",
    h1: 'Website Design &amp; Builds for <span class="gradient-text">St George &amp; Bayside Businesses</span>',
    lede: "Website Builder Sydney is based in Hurstville. Marcelo Soler builds fast, mobile-first sites for the way St George and Bayside businesses win customers: restaurants and retailers around Forest Road, practices near St George Hospital, and trades and freight firms from Rockdale to Mascot.",
    trustExtra: "Based in Hurstville",
    servicesH2: "Website services for St George and Bayside businesses",
    servicesLead: "The same six services offered across Sydney, ordered here by what local businesses ask for most: a one-page site that gets calls, then pages for each service as the business grows.",
    midCta: "Trading in Hurstville, Kogarah or Rockdale? Send a short brief.",
    build: ["onepage", "practice", "quote", "landing", "booking", "redesign", "multipage", "gallery", "copy"],
    buildH2: "What gets built for St George and Bayside businesses",
    buildLead: "Practice and treatment pages come early here, because Kogarah's health precinct and Hurstville's professional offices need each service explained on its own.",
    areasH2: "Website design across St George and Bayside",
    areasLead: "Two councils, two kinds of local economy: Georges River centres around Hurstville and Kogarah, and Bayside suburbs running down to the airport and Botany Bay.",
    areas: [
      { group: "Georges River", items: [
        { name: "Hurstville", places: "Forest Rd · Westfield Hurstville · Hurstville station",
          text: "Hurstville is home base for Website Builder Sydney. Restaurants, grocers and professional offices around Forest Road compete for the same searches, so a site needs clear service lists, a phone button that works one-handed and location signals Google can read.",
          links: [svcLink("svc-onepage"), svcLink("svc-seo")] },
        { name: "Kogarah", places: "St George Hospital · Railway Pde",
          text: "Around St George Hospital and Railway Parade, specialists, allied-health practices and accountants need sites that explain each service plainly and make booking or calling easy, with a page for each treatment or practice area.",
          links: [svcLink("svc-multipage"), svcLink("svc-seo")] },
        { name: "Penshurst, Mortdale &amp; Oatley", places: "Penshurst station · Mortdale station · Oatley station",
          text: "Along the rail line through Penshurst, Mortdale and Oatley, many businesses are trades and family-run services. A quote form, a list of the suburbs you cover and photos of real jobs usually do more than a long homepage.",
          links: [svcLink("svc-onepage"), svcLink("svc-ads")] },
      ] },
      { group: "Bayside", items: [
        { name: "Rockdale, Arncliffe &amp; Brighton-Le-Sands", places: "Princes Hwy · Bay St · The Grand Pde",
          text: "From cafés and restaurants on The Grand Parade and Bay Street to clinics and trades along the Princes Highway, Bayside businesses get a lot of near-me searches from phones. Fast pages and a visible call button matter more here than extra animation.",
          links: [svcLink("svc-onepage"), svcLink("svc-redesign")] },
        { name: "Mascot &amp; Botany", places: "Sydney Airport · Botany Rd · Mascot station · Port Botany",
          text: "Near Sydney Airport and Port Botany, freight, logistics and aviation-services businesses sell to other businesses. Their sites need credible service pages and a clear enquiry form for B2B quotes rather than a shopfront feel.",
          links: [svcLink("svc-multipage"), svcLink("svc-custom")] },
      ] },
    ],
    nearby: `<h3>Also covered, and nearby areas</h3><p class="muted">Also covered across St George: Bexley, Carlton, Allawah, Blakehurst, Carss Park, Connells Point, Sans Souci, Ramsgate and Monterey.</p><p class="muted">Next door: ${link("bankstown", "website design for Canterbury-Bankstown businesses")} and ${link("sutherland", "website design for Sutherland Shire businesses")}. For the St George studio site itself, see ${ext(LINKS.stgeorge, "St George Web Design")}. Back to ${link("sydney", "website design across Sydney")}.</p>`,
    workH2: "Recent work, from Sydney and beyond",
    workLead: "None of these clients is in St George yet, so they are shown with the area each one trades in. The structure is what carries across: clear services, fast pages and an obvious way to enquire.",
    work: ["dental", "brm", "bms"],
    workPlaceholder: "Case study from a St George or Bayside client needed: client name (with permission), suburb, platform and what changed.",
    quotes: ["rob", "landscaping"],
    reviewPlaceholders: ["Real testimonial from a Hurstville, Kogarah or Rockdale client needed."],
    faqH2: "Website design in St George and Bayside: common questions",
    faq: [
      { q: "Do you build websites for restaurants, shops and clinics in Hurstville?",
        a: `<p>Yes. ${BIZ.name} is based in Hurstville, and a $500 one-page site suits most Forest Road restaurants, shops and practices: services or menu highlights, opening details, a map link and a call button, live in 1 business day. Clinics in Kogarah usually move to a multi-page site so each treatment gets its own page.</p>` },
      { q: "Is a Wix or Squarespace site good enough for a St George business?", a: A_WIX(" For a Hurstville or Rockdale business competing on near-me searches, the structure of the page matters as much as how it looks.") },
      { q: "How quickly can a Kogarah or Rockdale business have a site live?", a: A_TIME },
      { q: "Can I change my prices or services after the site launches?", a: A_EDIT },
      { q: "Will the site help me show up in Google around Hurstville?", a: A_GOOGLE(" For St George businesses that means naming the suburbs you actually serve, such as Hurstville, Kogarah or Rockdale, in your page headings and copy.") },
      { q: "Do you work with businesses across St George and Bayside, or meet in person?",
        a: `<p>Website Builder Sydney is based in Hurstville and works with businesses across the Georges River and Bayside council areas, from Penshurst and Oatley to Brighton-Le-Sands and Mascot. Most projects run by phone and email. If you would like to meet, ask when you call ${BIZ.phone}.</p>` },
      { q: "Does my clinic or shop website need to meet accessibility or privacy rules?", a: A_RULES(false, false) },
    ],
    aboutH2: "Your Hurstville web designer",
    aboutLocal: `${BIZ.name} is based in Hurstville, so St George is home ground. You can read more about how projects run on the ${"<a href=\"/#about\">Sydney hub</a>"}.`,
    gbp: true,
    workingArea: "across St George and Bayside",
    formArea: "St George & Bayside",
  },
  {
    key: "bankstown",
    title: "Web Design Canterbury-Bankstown | Website Builder Sydney",
    description: "Website design for Bankstown, Campsie, Lakemba and Padstow businesses. Freelancer Marcelo Soler builds fast, mobile-first sites for food, clinics and trades from $500.",
    pill: "Web design Canterbury-Bankstown",
    h1: 'Website Design &amp; Builds for <span class="gradient-text">Canterbury-Bankstown Businesses</span>',
    lede: "From Chapel Road in Bankstown to Haldon Street in Lakemba and the Padstow industrial area, Canterbury-Bankstown runs on family businesses, food, clinics and trades. Marcelo Soler builds them fast, mobile-first websites that turn a phone search into a call.",
    trustExtra: "Bankstown suburb pages available",
    servicesH2: "Website services for Canterbury-Bankstown businesses",
    servicesLead: "Most local businesses start with a one-page site or a landing page for Google Ads, then add suburb pages when they want to be found in Punchbowl, Revesby or Greenacre as well as Bankstown.",
    midCta: "Running a shop, clinic or trade in Bankstown? Send a short brief.",
    build: ["quote", "onepage", "landing", "multipage", "gallery", "redesign", "booking", "practice", "copy"],
    buildH2: "What gets built for Canterbury-Bankstown businesses",
    buildLead: "Quote forms and click-to-call come first here: a lot of local work is trades and family businesses whose customers want to ring, not read.",
    areasH2: "Website design across Canterbury-Bankstown",
    areasLead: "One council area with three distinct centres: the Bankstown CBD, the Canterbury side around Campsie and Lakemba, and the trade and industrial suburbs to the south.",
    areas: [
      { group: "Bankstown", items: [
        { name: "Bankstown", places: "Chapel Rd · Bankstown Central · Saigon Place",
          text: "Bankstown's centre mixes Vietnamese and Lebanese food, grocers, clinics and professional offices around Chapel Road, Saigon Place and Bankstown Central. A site that loads quickly on mobile data and puts the phone number and directions first serves that foot traffic well.",
          links: [svcLink("svc-onepage"), svcLink("svc-seo")] },
        { name: "Greenacre, Yagoona &amp; Chester Hill", places: "Waterloo Rd · Yagoona station · Chester Hill station",
          text: "Through Greenacre, Yagoona and Chester Hill, much of the local economy is trades, mechanics and family services. A quote form, the suburbs you cover and photos of finished jobs give a customer what they need to pick up the phone.",
          links: [svcLink("svc-ads"), svcLink("svc-multipage")] },
      ] },
      { group: "Canterbury", items: [
        { name: "Campsie &amp; Canterbury", places: "Beamish St · Canterbury Rd",
          text: "Beamish Street in Campsie is lined with Korean, Chinese and Lebanese restaurants, grocers and clinics. Opening details, a map link and a call button that work on a small screen do most of the selling.",
          links: [svcLink("svc-onepage"), svcLink("svc-redesign")] },
        { name: "Lakemba &amp; Punchbowl", places: "Haldon St · The Boulevarde",
          text: "Restaurants and sweets shops along Haldon Street and The Boulevarde see big seasonal rushes, so opening hours and contact details need to be accurate and easy to find from a phone.",
          links: [svcLink("svc-onepage"), svcLink("svc-ads")] },
      ] },
      { group: "South", items: [
        { name: "Revesby, Padstow &amp; Panania", places: "Revesby station · Padstow industrial area",
          text: "Around Revesby station and the Padstow industrial area, light industry and trades sell to builders and other businesses. Clear service pages and a B2B enquiry form matter more than a retail look.",
          links: [svcLink("svc-multipage"), svcLink("svc-seo")] },
      ] },
    ],
    nearby: `<h3>Also covered, and nearby areas</h3><p class="muted">Also covered: Belmore, Roselands, Wiley Park, Birrong, Bass Hill, Georges Hall, Condell Park, Chullora, Sefton, Regents Park and Mount Lewis. Individual suburb pages for the area are on ${ext(LINKS.bankstown, "Web Design Bankstown")}.</p><p class="muted">Next door: ${link("stgeorge", "website design for St George &amp; Bayside businesses")}. The Inner West and South West Sydney are covered by phone and email. Back to ${link("sydney", "website design across Sydney")}.</p>`,
    workH2: "Recent work, from Sydney and beyond",
    workLead: "No Canterbury-Bankstown client is shown here yet. The nearest is a driving school in Liverpool; the rest are listed with the area each one trades in.",
    work: ["ontarget", "carpet", "bms"],
    workPlaceholder: "Case study from a Canterbury-Bankstown client needed: client name (with permission), suburb, platform and what changed.",
    quotes: ["rob", "landscaping"],
    reviewPlaceholders: ["Real testimonial from a Bankstown, Campsie or Padstow client needed."],
    faqH2: "Website design in Canterbury-Bankstown: common questions",
    faq: [
      { q: "Do you build websites for tradies and shops in Bankstown?",
        a: `<p>Yes. Trades, shops, food businesses and clinics are the core of the work. A $500 one-page site with a quote form and click-to-call suits most Bankstown, Greenacre and Padstow businesses, and suburb pages can be added later when you want to be found in each suburb you serve.</p>` },
      { q: "My Bankstown business has a DIY site. Is it worth paying for a new one?", a: A_WIX(" If your DIY site already brings in calls, keep it. If it looks off on a phone or nobody finds it, that is when a rebuild pays for itself.") },
      { q: "How long does a website take for a Canterbury-Bankstown business?", a: A_TIME },
      { q: "Can I update my opening hours or prices myself?", a: A_EDIT },
      { q: "Will a new website help my shop show up on Google Maps in Bankstown?", a: A_GOOGLE(" Your Google Business Profile is what appears on Maps, so the website and the profile should name the same business, phone number and suburb.") },
      { q: "Do you work with businesses across Canterbury-Bankstown, or meet in person?",
        a: `<p>Yes, from Campsie and Lakemba to Revesby and Panania. ${BIZ.name} is based in Hurstville, a short trip away, and most projects run by phone and email. If you would like to meet, ask when you call ${BIZ.phone}.</p>` },
      { q: "Do small Bankstown businesses need a privacy policy on their website?", a: A_RULES(false, false) },
    ],
    aboutH2: "Who builds your Canterbury-Bankstown website",
    aboutLocal: `Marcelo also runs Web Design Bankstown, which holds the suburb-by-suburb pages for this area. Read more about how projects run on the <a href="/#about">Sydney hub</a>.`,
    gbp: false,
    workingArea: "across Canterbury-Bankstown",
    formArea: "Canterbury-Bankstown",
  },
  {
    key: "sutherland",
    title: "Web Design Sutherland Shire & Cronulla | Website Builder Sydney",
    description: "Website design for Cronulla, Miranda, Caringbah and Taren Point businesses. Marcelo Soler builds fast, mobile-first Sutherland Shire websites from $500, built in 1 day.",
    pill: "Web design Sutherland Shire",
    h1: 'Website Design &amp; Builds for <span class="gradient-text">Sutherland Shire Businesses</span>',
    lede: "Cronulla cafés and gyms, Taren Point workshops and trades from Miranda to Engadine all need a website that works on a phone and gets the enquiry. Marcelo Soler builds them, starting with a $500 one-page site live in 1 business day.",
    trustExtra: "Shire clients in the portfolio",
    servicesH2: "Website services for Sutherland Shire businesses",
    servicesLead: "Healthcare and trade clients in the Shire started with a focused site and local SEO structure. The same services are available to every Shire business.",
    midCta: "Based in Cronulla, Miranda or Taren Point? Send a short brief.",
    build: ["quote", "gallery", "booking", "onepage", "landing", "multipage", "redesign", "practice", "copy"],
    buildH2: "What gets built for Sutherland Shire businesses",
    buildLead: "Quote forms and project galleries lead here, because so much Shire work is trades and workshops whose finished jobs are the best advertising.",
    areasH2: "Website design across the Sutherland Shire",
    areasLead: "From the beach at Cronulla to the industrial strip at Taren Point and the centres along the train line, each part of the Shire buys differently.",
    areas: [
      { group: "Coast", items: [
        { name: "Cronulla", places: "Cronulla Mall · The Esplanade · Cronulla station",
          text: "Around Cronulla Mall and The Esplanade, cafés, surf and fitness businesses have busy seasons and quiet ones. A site with clear booking or contact paths, current details and fast mobile pages keeps up with both.",
          links: [svcLink("svc-onepage"), svcLink("svc-ads")] },
      ] },
      { group: "Centres", items: [
        { name: "Miranda, Caringbah &amp; Gymea", places: "Westfield Miranda · The Kingsway · Port Hacking Rd",
          text: "Clinics, retailers and trades around Westfield Miranda, The Kingsway and Port Hacking Road make up much of the Shire's local work. Physio Focus and Monty's Plumbing, both Shire clients, are in the portfolio.",
          links: [svcLink("svc-seo"), svcLink("svc-multipage")] },
        { name: "Sutherland &amp; Engadine", places: "Eton St · Old Princes Hwy · Royal National Park",
          text: "From Eton Street in Sutherland to the Old Princes Highway in Engadine, near the Royal National Park, family services, trades and clinics need a simple site that shows which suburbs they cover and how to get a quote.",
          links: [svcLink("svc-onepage"), svcLink("svc-redesign")] },
      ] },
      { group: "Industrial", items: [
        { name: "Taren Point", places: "Taren Point Rd · Parraweena Rd",
          text: "Showrooms, workshops and light industry along Taren Point Road and Parraweena Road sell to builders and homeowners alike. Product categories, a project gallery and a quote request flow do the work a showroom visit used to.",
          links: [svcLink("svc-multipage"), svcLink("svc-custom")] },
      ] },
    ],
    nearby: `<h3>Also covered, and nearby areas</h3><p class="muted">Also covered: Kirrawee, Jannali, Sylvania and Menai. For the Shire studio site, see ${ext(LINKS.sutherland, "Sutherland Shire Website Design")}.</p><p class="muted">Next door: ${link("stgeorge", "website design for St George &amp; Bayside businesses")}. South West Sydney is covered by phone and email. Back to ${link("sydney", "website design across Sydney")}.</p>`,
    workH2: "Work for Sutherland Shire businesses",
    workLead: "Two Shire clients first, then recent work from elsewhere in Sydney, each shown with the area the client trades in.",
    work: ["physio", "montys", "francis", "level", "dental"],
    workPlaceholder: "",
    quotes: ["rob", "landscaping"],
    reviewPlaceholders: ["Real testimonial from a Cronulla, Miranda or Taren Point client needed."],
    faqH2: "Website design in the Sutherland Shire: common questions",
    faq: [
      { q: "Do you build websites for trades and workshops in Taren Point and Caringbah?",
        a: `<p>Yes. Trades and workshops are a large part of the work, and Monty's Plumbing in the Shire is in the portfolio. A one-page site with a quote form and a gallery of finished jobs suits most Taren Point and Caringbah businesses, and a multi-page site adds a page for each service.</p>` },
      { q: "Is Squarespace or Wix enough for a Cronulla café or gym?", a: A_WIX(" For a Cronulla café or gym, what matters most is that hours, bookings and contact details are right on a phone.") },
      { q: "How long does a Sutherland Shire website take to build?", a: A_TIME },
      { q: "Can I update my class times or menu myself?", a: A_EDIT },
      { q: "Will a new website help my Shire business show up on Google?", a: A_GOOGLE(" For Shire businesses that usually means naming suburbs such as Miranda, Caringbah or Engadine where you actually work.") },
      { q: "Do you work with businesses across the Sutherland Shire, or meet in person?",
        a: `<p>Yes, from Cronulla and Kurnell to Menai and Engadine. Marcelo also runs Sutherland Shire Website Design, and most projects run by phone and email. If you would like to meet, ask when you call ${BIZ.phone}.</p>` },
      { q: "Does a Shire clinic website need to meet privacy rules?", a: A_RULES(false, true) },
    ],
    aboutH2: "Who builds your Sutherland Shire website",
    aboutLocal: `Marcelo also runs Sutherland Shire Website Design, the Shire studio site where the testimonials on this page were first published. Read more about how projects run on the <a href="/#about">Sydney hub</a>.`,
    gbp: false,
    workingArea: "across the Sutherland Shire",
    formArea: "Sutherland Shire",
  },
  {
    key: "cbd",
    title: "Web Design Sydney CBD & Inner City | Website Builder Sydney",
    description: "Website design for Sydney CBD, Surry Hills, Pyrmont and Haymarket businesses. Freelancer Marcelo Soler builds fast, credible websites from $500, built in 1 day.",
    pill: "Web design Sydney CBD &amp; inner city",
    h1: 'Website Design &amp; Builds for <span class="gradient-text">Sydney CBD &amp; Inner-City Businesses</span>',
    lede: "Professional firms around Martin Place, cafés and studios in Surry Hills and startups near Central and Pyrmont all compete with much bigger marketing budgets. Marcelo Soler builds them fast, credible websites, starting with a $500 one-page site live in 1 business day.",
    trustExtra: "CBD clients in the portfolio",
    servicesH2: "Website services for CBD and inner-city businesses",
    servicesLead: "In the city, credibility comes first: a site has to look established, load fast and explain each service clearly. A Custom Website on WordPress suits firms that need a deeper content structure.",
    midCta: "Working in the CBD or inner city? Send a short brief.",
    build: ["practice", "landing", "redesign", "multipage", "booking", "onepage", "gallery", "quote", "copy"],
    buildH2: "What gets built for CBD and inner-city businesses",
    buildLead: "Practice-area pages and campaign landing pages lead here. City firms are often searched by service, not by suburb, and many already run Google Ads.",
    areasH2: "Website design across the Sydney CBD and inner city",
    areasLead: "Mostly the City of Sydney council area, grouped by precinct. Each one has a different mix of firms, venues and startups.",
    areas: [
      { group: "Core", items: [
        { name: "Sydney CBD", places: "George St · Martin Place · Town Hall · Wynyard · Circular Quay",
          text: "Law, finance and professional-services firms between Martin Place, Wynyard and Town Hall need a site that looks as established as their office, with a page for each practice area. Shani's Cafe in the CBD is among the video testimonials.",
          links: [svcLink("svc-custom"), svcLink("svc-multipage")] },
      ] },
      { group: "Harbour West", items: [
        { name: "The Rocks &amp; Barangaroo", places: "Circular Quay · Argyle St · Barangaroo Reserve · Hickson Rd",
          text: "Between Circular Quay, Argyle Street and Barangaroo Reserve, tourism, hospitality and corporate tenants sell to visitors and office workers. Fast landing pages for campaigns and clear booking paths fit that mix.",
          links: [svcLink("svc-ads"), svcLink("svc-onepage")] },
      ] },
      { group: "South", items: [
        { name: "Surry Hills", places: "Crown St · Bourke St · Central station",
          text: "Cafés, design studios and boutique agencies along Crown and Bourke Streets need a site that looks as considered as the brand behind it, and takes enquiries and bookings on a phone.",
          links: [svcLink("svc-redesign"), svcLink("svc-custom")] },
        { name: "Haymarket &amp; Chippendale", places: "Chinatown · Dixon St · Central Park · Broadway",
          text: "From Dixon Street in Chinatown to Central Park on Broadway, restaurants, retailers and startups near Central need fast pages and campaign landing pages that keep up with a lot of foot and online traffic.",
          links: [svcLink("svc-ads"), svcLink("svc-onepage")] },
      ] },
      { group: "West &amp; Harbour East", items: [
        { name: "Pyrmont &amp; Ultimo", places: "Harris St · Pirrama Rd · UTS",
          text: "Along Harris Street and Pirrama Road and around UTS, tech, media and education businesses often need a multi-page site with a page for each service or program.",
          links: [svcLink("svc-multipage"), svcLink("svc-seo")] },
        { name: "Darlinghurst &amp; Potts Point", places: "Oxford St · Victoria St · Macleay St · Kings Cross station",
          text: "Bars, restaurants, wellness studios and clinics along Oxford, Victoria and Macleay Streets live on near-me searches at night and on weekends, so hours, bookings and a call button need to be right on mobile.",
          links: [svcLink("svc-onepage"), svcLink("svc-seo")] },
      ] },
    ],
    nearby: `<h3>Also covered, and nearby areas</h3><p class="muted">Also covered: Woolloomooloo, Millers Point, Redfern, Alexandria and Waterloo.</p><p class="muted">The Eastern Suburbs, Inner West and Lower North Shore don't have their own hub yet and are covered by phone and email. Back to ${link("sydney", "website design across Sydney")}.</p>`,
    workH2: "Work for city and professional-services clients",
    workLead: "Professional-services and design-led sites from the portfolio, each shown with the area the client trades in.",
    work: ["brm", "bms", "level"],
    workPlaceholder: "Case study from a CBD or inner-city client needed: client name (with permission), suburb, platform and what changed.",
    quotes: ["shani", "rob"],
    reviewPlaceholders: ["Real written testimonial from a CBD professional-services client needed."],
    faqH2: "Website design in the Sydney CBD: common questions",
    faq: [
      { q: "Do you build websites for professional firms in the Sydney CBD?",
        a: `<p>Yes. Professional-services sites are a regular part of the work, including the BRM Patent Attorneys site in the portfolio. CBD firms usually choose a multi-page site or a Custom Website on WordPress, with a page for each practice area so each service can be found on its own.</p>` },
      { q: "Should a city business use a website builder or a freelancer?", a: A_WIX(" In the CBD, where competitors often have agency-built sites, looking established on the first visit is part of the job.") },
      { q: "How fast can a Surry Hills or Pyrmont business get a site live?", a: A_TIME },
      { q: "Can my team update the website after launch?", a: A_EDIT },
      { q: "Will the site support our Google Ads and local search in the city?", a: A_GOOGLE(" For Google Ads, a single-purpose landing page usually converts better than sending clicks to a busy homepage.") },
      { q: "Do you work with businesses across the CBD and inner city, or meet in person?",
        a: `<p>Yes, from Barangaroo and The Rocks to Surry Hills and Pyrmont. Most projects run by phone and email, with drafts reviewed online. If you would like to meet in the city, ask when you call ${BIZ.phone}.</p>` },
      { q: "Does a city business website need to meet accessibility and privacy rules?", a: A_RULES(true, false) },
    ],
    aboutH2: "Who builds your city website",
    aboutLocal: `${BIZ.name} is based in Hurstville and works with CBD and inner-city businesses by phone, email and online review. Read more about how projects run on the <a href="/#about">Sydney hub</a>.`,
    gbp: false,
    workingArea: "across the CBD and inner city",
    formArea: "Sydney CBD & Inner City",
  },
];

// Build ----------------------------------------------------------------------
for (const pg of PAGES) {
  Object.assign(pg, P[pg.key]);
  const out = join(ROOT, pg.path, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  const html = page(pg)
    .replace(/&(?![a-zA-Z][a-zA-Z0-9]*;|#\d+;)/g, "&amp;")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n");
  writeFileSync(out, html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map((pg) => `  <url><loc>${ORIGIN}${pg.path}</loc><lastmod>${BUILD_DATE}</lastmod><priority>${pg.key === "sydney" ? "1.0" : "0.8"}</priority></url>`).join("\n")}
</urlset>
`;
writeFileSync(join(ROOT, "sitemap.xml"), sitemap);

// Checks ---------------------------------------------------------------------
const problems = [];
const domainPages = {};
const IGNORE = ["fonts.googleapis.com", "fonts.gstatic.com"];
for (const pg of PAGES) {
  const html = readFileSync(join(ROOT, pg.path, "index.html"), "utf8");
  const where = pg.path;
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) problems.push(`${where}: ${h1} h1 elements`);
  if (/\{\{|\}\}|TODO/.test(html)) problems.push(`${where}: leftover {{ }} or TODO`);
  if (/—/.test(html)) problems.push(`${where}: em dash in copy`);
  for (const img of html.match(/<img [^>]+>/g) || []) {
    if (!/ alt="[^"]+"/.test(img) || !/ width="\d+"/.test(img) || !/ height="\d+"/.test(img)) problems.push(`${where}: image missing alt/size ${img}`);
    const s = img.match(/src="([^"]+)"/)[1];
    if (!existsSync(join(ROOT, s))) problems.push(`${where}: missing image ${s}`);
  }
  const anchors = [...html.matchAll(/<a [^>]*href="([^"]+)"[^>]*>/g)].map((m) => ({ h: m[1], tag: m[0] }));
  const ids = new Set([...html.matchAll(/ id="([^"]+)"/g)].map((m) => m[1]));
  const outDomains = new Set();
  let outCount = 0;
  for (const { h, tag } of anchors) {
    if (h.startsWith("#")) { if (!ids.has(h.slice(1))) problems.push(`${where}: broken anchor ${h}`); continue; }
    if (h.startsWith("tel:") || h.startsWith("mailto:")) continue;
    if (h.startsWith("/")) {
      const [p, hash] = h.split("#");
      if (!existsSync(join(ROOT, p, "index.html"))) problems.push(`${where}: broken internal link ${h}`);
      if (p === pg.path && !hash && !/aria-current|class="brand"/.test(tag)) problems.push(`${where}: links to itself ${h}`);
      continue;
    }
    const d = new URL(h).hostname.replace(/^www\./, "");
    if (IGNORE.includes(d)) continue;
    outCount++;
    outDomains.add(d);
  }
  if (outCount > 6) problems.push(`${where}: ${outCount} outbound links (max 6)`);
  for (const d of outDomains) (domainPages[d] ||= []).push(where);
  console.log(`${where.padEnd(42)} outbound ${outCount}  ${[...outDomains].join(", ")}`);
}
const cap = Math.floor(PAGES.length * 0.4);
for (const [d, pages] of Object.entries(domainPages)) {
  if (pages.length > cap) problems.push(`${d} is linked from ${pages.length} of ${PAGES.length} pages (40% cap = ${cap})`);
}
if (problems.length) {
  console.error("\nCHECK FAILED\n" + problems.map((p) => " - " + p).join("\n"));
  process.exit(1);
}
console.log(`\nOK: ${PAGES.length} pages, one h1 each, links and anchors resolve, outbound and 40% domain caps hold.`);
