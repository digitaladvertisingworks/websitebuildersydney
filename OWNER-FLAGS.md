# Flags for the owner (Marcelo Soler)

Settle these before the site goes live. In the HTML, `data-flag="new copy: owner sign-off"` marks drafted text, `data-placeholder` marks empty slots, and `data-source="…"` marks copy reused word for word from a live network site.

## Launch blockers

1. **Email mailbox.** The quote form now posts to Web3Forms (the FP Web Design key), so briefs reach that key's inbox. The address shown on the pages, `start@websitebuilderadvice.net`, still doesn't exist: create it, or tell me which address to show.
2. **Form handler: done.** The form uses Web3Forms with access key 3ab512ef… (shared with webdesignparramatta.sydney), with in-page success and error messages and a honeypot spam check. For separate lead tracking, create a key just for this site and swap `BIZ.formKey` in `scripts/build.mjs`.
3. **Domain and DNS.** websitebuilderadvice.net doesn't resolve. Canonicals assume `https://websitebuilderadvice.net` (non-www). Confirm what the server and SSL actually serve before launch.
4. **Register the business name "Website Builder Sydney" with ASIC** if it isn't already. Your ABN is a sole trader ABN in your own name (Marcelo Andres Soler), and trading under any other name requires registration on the Business Names Register. I couldn't check the register from here. The pages show ABN 96 492 325 357 and "Marcelo Andres Soler (sole trader)".

## Entity consistency (most common way the network gets mismatched NAP)

5. **Six different addresses** across the network: 40 Wisdom St Connells Point (St George schema), Castlereagh St Sydney (St George About), Level 7/169 Castlereagh St (st-george-web-design-sydney repo), 9/13 Wentworth St Greenacre (Bankstown), Pines Parade Gymea (Sutherland), and Suite 558 Church St Parramatta (FP). The GBP pin is on Australia Street, Hurstville. This site shows **"Hurstville NSW 2220" only**. Confirm the GBP street address, then decide what each node should show.
6. **Second phone number.** St George's schema lists +61290998025. Every visible page uses 0404 084 847.
7. **www vs non-www on stgeorgewebdesign.com.au.** The root redirects www to non-www, but `/web-design-bankstown/` only resolves on www, and the `/sydney/` canonicals use www. This site links to the final 200 URLs.
8. **GBP name doesn't match.** The business name is "Website Builder Sydney" (owner, 2026-10-07), but the GBP is named "Website Builder advice". Rename the GBP to "Website Builder Sydney" so the name matches character for character across the site, the GBP and every citation. Google may ask for verification when a profile is renamed.
9. **The homepage (/) vs stgeorgewebdesign.com.au/sydney/.** Both target "web design Sydney". Decide which keeps that intent. If it's this domain, retarget or 301 the St George `/sydney/` page.
10. **Brand relationships stated in public.** The Sydney hub's About says Marcelo runs St George Web Design, Web Design Bankstown, Sutherland Shire Website Design and FP Web Design. Confirm you're happy for that to be public. It's the core DAN corroboration.

## Claims to confirm

- **ABR postcode.** The ABR lists your main business location as NSW 2218. The pages show Hurstville NSW 2220 (the GBP pin). Both are fine, but update whichever is out of date so they agree.
- **Not registered for GST.** The prices shown are therefore GST-free. No page says "inc. GST". Revisit if you register.
11. "18+ years of brand and design experience": from sutherlandwebdesign.com.au/about, used verbatim. Confirm it's still accurate.
12. "Free hosting included", "Free logo included", "Live in 1 week", "We respond the same business day": live St George copy, used verbatim.
13. Reuse of the three video testimonial quotes, and of client names and screenshots in the work sections: confirm each client's permission.
14. **Total Carpet Cleaning location.** The Sutherland portfolio labels it "Sutherland Shire", but the screenshot shows Campbelltown. It's shown with no location and isn't used as Shire proof.
15. **Physio Focus and Monty's Plumbing** are used as Sutherland Shire proof, based on their live portfolio labels.
16. The services note lists ecommerce, logo and brand design, hosting and support, and online reputation management (from the Sutherland footer). Confirm you deliver these personally. Multilingual sites aren't offered anywhere on the site.
17. In-person meetings: every FAQ says "ask when you call". Confirm whether you meet clients, and where.
18. Acknowledgement of Country (footer): new wording, needs approval.

## New copy to approve

All elements with `data-flag`: hero H1s and ledes, service-area narratives, "What gets built" cards, FAQ answers, About local paragraphs, the mid-page CTA and the footer blurb. Service-area narratives name real streets and precincts only, never past clients, apart from the client names in item 15.

## Empty placeholders

- Local case studies: St George & Bayside, Canterbury-Bankstown, CBD & Inner City.
- Local testimonials: St George & Bayside, Canterbury-Bankstown, Sutherland Shire, CBD (a written professional-services testimonial).

## Deliberate deviations from SYDNEY-GEOHUB-PROMPT.md

- **No `src/pages/_starter.html` or CLAUDE.md exists.** The pages are generated by `scripts/build.mjs`, using the network's St George design tokens. Run `node scripts/build.mjs` after edits and commit the output.
- **Service cards have no links.** No service pages exist yet. Area cards link to the service cards on the same page instead. Add pillar pages and point the cards at them.
- **Suburbs are named but not linked.** No suburb pages exist on this domain. Each regional hub links once to the network node that holds that area's suburb pages.
- **The Sydney hub is the homepage (`/`) and the regions sit at `/<region>/`** (owner decision, 2026-10-07), not `/web-design-sydney/…` as the prompt proposes. Breadcrumbs read `Sydney › Region`, where "Sydney" is the homepage.
- **Unconfirmed regions aren't built** (Eastern Suburbs, North Shore, Northern Beaches, Ryde, Hills, Western Sydney, South West, Inner West). They're mentioned only as "covered by phone and email". That's a draft claim: confirm it.
- **DAN link caps** are enforced by the build: at most 6 outbound links per page, and no domain linked from more than 2 of the 5 pages (40%). That's why the CBD hub doesn't link to stgeorgewebdesign.com.au/sydney/.
