# Ripo Personal Page

Minimal, single-page personal site. Left-aligned layout, Inter typeface, no nav/header, with a dark footer linking out to work and social profiles.

## Project Structure

- `index.html` — the entire site (markup + inline CSS)
- `ripo-portrait.jpg` — portrait photo used on the page
- `favicon.png` — light blue dot tab icon (PNG fallback)
- `README.md` — project overview

## Notes

- No build step — it's a single static HTML file, open it directly or serve the folder as-is.
- The favicon is a light blue dot, declared twice in `index.html`'s `<head>`: an inline SVG for browsers that support it, with `favicon.png` as a PNG fallback for the ones that don't.
- `firebase.js` and `firestore.rules` are left over from an earlier version of the site and are not referenced by the current `index.html`.
