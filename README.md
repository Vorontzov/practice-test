# SHSAT Math Practice Platform

Static GitHub Pages-ready prototype based on the supplied SHSAT screenshots and Math teaching document.

## Run locally
Open `index.html` in a modern browser, or serve the directory with a simple local server.

## Current functionality
- Reference-style opening and Math test interfaces
- 50 / 100 / 150 / 200 / 250-question sessions
- Timed or untimed mode
- Timed sessions count down from 3:00:00; multi-test sessions automatically reset to 3:00:00 whenever the clock reaches zero
- Randomized Math archetype order
- Deep parametric question generation with persistent unseen-first IDs in localStorage
- Teach Me explanations generated for the exact current values
- Practice This More branches to a fresh unseen variant of the same archetype
- Multiple choice, short answer, dropdown, diagram, and categorization interactions
- Reference, Compact, Minimal, High Contrast, Institutional, and Random interface modes
- Responsive desktop, tablet, and mobile layouts

## Persistence
The browser stores seen question IDs and the saved name/email profile in `localStorage`. Clearing site data resets that history.

## GitHub Pages
This project has no build step. Publish the folder contents from the repository root or `/docs` folder using GitHub Pages.

## Generator validation
All 50 archetypes were runtime-validated after the latest expansion. In a 1,000-draw sampling pass, every archetype produced more than 500 distinct question IDs, and all generated interaction objects passed structural checks.
