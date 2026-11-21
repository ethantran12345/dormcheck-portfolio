# DormCheck

**A student housing and move-in app built for Pitt and Carnegie Mellon.**

DormCheck helped students explore housing, coordinate move-in with roommates, and buy or sell dorm gear through a campus-only marketplace. It reached **80+ student signups** across both universities. I designed and built it as a solo founder.

## Product screenshots

These screens were captured with fictional demo data.

| Home | Campus marketplace | Move-in checklist |
| --- | --- | --- |
| ![DormCheck home screen](home.png) | ![DormCheck campus marketplace](marketplace.png) | ![DormCheck move-in checklist](checklist.png) |

## What I built

- A housing explorer, shared move-in checklist, sublease listings, and direct messaging.
- University email verification and campus-scoped access for student accounts.
- A shared React and TypeScript client for web, iOS, and Android, backed by Supabase and Postgres.
- Interactive maps with Mapbox and native mobile builds with Capacitor.

DormCheck was shelved in November 2026. Its hosted services are offline.

[License](LICENSE)

## Run the original product logic locally

Clone this repo and run `node --experimental-strip-types demo.ts` with Node.js 22.18 or later. The demo uses fictional data and needs no dependencies, accounts, or API keys.

| Source | What it demonstrates |
| --- | --- |
| [Roommate matching](roommateMatch.ts) | Scores lifestyle fit, dealbreakers, shared interests, and housing preferences. Returns reasons, conflicts, and a confidence rating. |
| [Roommate preferences](roommateOptions.ts) and [academic-year logic](academicYear.ts) | Defines survey responses and helps interpret class-year context. |
| [Checklist importer](parseChecklistNotes.ts) | Converts pasted notes into checklist items, preserving completed items and associated links. |
| [Housing normalization](housing-match.ts) | Normalizes residence hall and floor labels for consistent matching. |
| [Demo](demo.ts) | Runs selected flows using fictional student and checklist data. |

The five source modules come from DormCheck's original code. The roommate matcher uses relative imports here so it can run outside the original app. The full UI, backend, and deployment configuration are outside this showcase.
