# Managerial Accounting Dashboard (React)

React + Vite multi-page site for the Banque Misr **SME Growth Accelerator Program** (ACCT2002 managerial accounting project). It now ships with:

- `/` — Case overview with program brief, idea blueprint, market sizing, and competitive edge.
- `/implementation` — Implementation dossier with milestones, KPI cockpit, SWOT, departments, bank-specific phases, and roadmap.

## Getting started

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
# open the URL printed in the terminal (default http://localhost:5173)
```

To create a production bundle:

```bash
npm run build
npm run preview   # optional local smoke test of the build output
```

Deploy the `dist/` folder to any static host (Azure Static Web Apps, Netlify, GitHub Pages, campus server, etc.). All routing is handled client-side via React Router.

## Configure the Power BI embed

1. Open `src/content/projectData.js` and update the `embedConfig` object near the top of the file:
   - `reportUrl`: paste your Power BI share or secure embed URL.
   - `title`, `description`, `refreshStatus`, `lastRefresh`: optional metadata shown above the iframe.
2. For demos you can override the link without editing code by appending `?reportUrl=<encoded-link>` to the site URL, e.g.:

```
http://localhost:5173/?reportUrl=https%3A%2F%2Fapp.powerbi.com%2Fview%3Fr%3D123
```

If no link is provided, the UI shows guidance on how to supply one—useful while the team finalizes the KPI deck.

## Secure embed blueprint

When you need Azure AD-protected embedding (service principal or user owns data):

1. Replace the `<iframe>` block in `src/App.jsx` with a `<div id="powerbi-container" />`.
2. Install [`powerbi-client`](https://github.com/microsoft/PowerBI-JavaScript) and load it inside your component.
3. Exchange service principal credentials (or on-behalf-of tokens) for an embed token on your API tier.
4. Call `powerbi.embed(container, { type: 'report', embedUrl, accessToken, tokenType: models.TokenType.Embed, settings })`.

Keeping token generation on the server maintains control over row-level security and refresh schedules.

## Customization tips

- Update the content arrays in `src/content/projectData.js` (idea pillars, market stats, SWOT, departments, phases, impact metrics, roadmap).
- Adjust the design in `src/App.css` (colors, spacing, layout) or swap the Google Font in `index.html`.
- Extend the navigation by editing `src/components/Header.jsx` and adding more routes/pages under `src/pages/`.
