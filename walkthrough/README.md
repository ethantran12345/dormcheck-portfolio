# DormCheck product walkthrough

This is the source for the portfolio demo. The phone frame, screen scenes, motion, and feature tabs are adapted directly from DormCheck's original React marketing site. The portfolio entry point adds manual scene selection. The content is illustrative and the app runs without a backend, credentials, or real student records.

| File | What to inspect |
| --- | --- |
| [offline-preview.tsx](offline-preview.tsx) | React entry point and scene selection |
| [PhoneDemo.tsx](PhoneDemo.tsx) | Home, Checklist, Marketplace, and Messages scenes |
| [FeatureShowcase.tsx](FeatureShowcase.tsx) | Interactive feature tabs and animated panels |
| [mockups.tsx](mockups.tsx), [motion.tsx](motion.tsx) | Reusable UI and animations |
| [index.css](index.css), [tokens.json](tokens.json) | Original styling and design tokens |

Run `npm install` and `npm run dev` with Node.js 22.12 or later. To build, run `npm run build`.
