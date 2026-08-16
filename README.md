# Ripo Personal Page

Minimal, single-page personal site. Left-aligned layout, Inter typeface, no nav/header, with a dark footer linking out to work and social profiles.

## Project Structure

- `index.html` — the entire site (markup + inline CSS)
- `ripo-portrait.jpg` — portrait photo used on the page
- `README.md` — project overview

## Notes

- No build step — it's a single static HTML file, open it directly or serve the folder as-is.
- The favicon is an inline SVG (a light blue dot) embedded directly in `index.html`'s `<head>`, so no separate icon file is needed.
- `firebase.js` and `firestore.rules` are left over from an earlier version of the site and are not referenced by the current `index.html`.
