# Abandoned but not Forgotten — HTML Edition

A lightweight, framework-free version of the interactive space documentary.

## Stack
- HTML5
- Tailwind CSS via CDN
- Vanilla JavaScript
- Custom CSS (`styles.css`)

No React, Vite, build step, package installation, or JavaScript framework is required.

## Run locally
Open `index.html` in a modern browser. For a local server, from this folder run:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project structure
- `index.html` — page structure and Tailwind CDN configuration
- `styles.css` — custom documentary styling, transitions, responsive layout
- `app.js` — mission data and interactive documentary engine

## Notes
- NASA imagery is loaded from remote NASA image assets; an internet connection is needed to display it.
- Tailwind is loaded from its CDN, so an internet connection is needed for utility classes.
- Audio/Tone.js was removed to keep the project dependency-light.
- Review all mission facts, image captions, dates, coordinates, and source references against primary NASA/mission sources before submission.
- Concept diagrams and explanatory markers must not be described as NASA engineering blueprints or precise component locations.


## AI-assisted development disclosure
AI assistance was used to help structure and integrate the additional mission entries and their JavaScript data. NASA imagery remains credited to NASA and its stated mission partners; no NASA logos or official visual identity were generated.

## Project Link:
https://echoes-beyond-earth.infinityfree.io/
