# Eric Zhang Chen's homepage

A minimal, single-page Astro website, published with GitHub Pages. The page presents About, Experience, Education, and Publications in that order. There is no blog or project section.

## Local development

Use Node.js 24 LTS (or a compatible version >=22.12.0).

```sh
npm ci
npm run dev
```

Open `http://localhost:4321`. Validate and preview the production build with:

```sh
npm run check
npm run build
npm run preview
```

No environment file, database, external font service, or server adapter is required.

## Editing content

| File | Content |
| --- | --- |
| `src/data/profile.json` | Biography, links, education, and experience |
| `src/data/publications.json` | Publication records, ordered newest first |
| `src/data/scholar.json` | Google Scholar source, verification date, and citation snapshot |
| `src/pages/index.astro` | Single-page structure |
| `src/components/Publication.astro` | Publication formatting |
| `src/styles/global.css` | Typography, spacing, colors, and responsive layout |

All publications are displayed in one continuous list, ordered newest first. Links to older publication URLs redirect to the corresponding entry using native anchor navigation; no expansion step or client script is required.

Education was migrated from the previous website. The standalone Interests list was removed at the site owner’s request. The current position and five visible experience entries were updated on October 2, 2026 from the LinkedIn screenshot supplied by the site owner; dates preserve the months shown. Truncated responsibilities and experience entries outside the screenshot were not inferred. The biography uses the three-paragraph summary approved by the site owner, covering AI research, product development, mentorship, technical interests, and education. The introduction displays the name, biography, and social icons without a separate role/company line or portrait. The footer contains only a back-to-top link. Publications were updated from the public [Google Scholar profile](https://scholar.google.com/citations?user=7mrZzpYAAAAJ&hl=en) on October 2, 2026. Its 68 records produce 67 displayed entries: one identical-title, identical-author pair was combined, with both source references retained. Other preprint and conference versions remain separate, so this is not a count of distinct peer-reviewed papers. Each entry retains its Scholar source and verification date. The original 21 publication slugs and existing code links are preserved.

Dates retain the source's precision (year, month, or day). The two records missing dates and venues in Scholar were supplemented from their official ISMRM abstract pages: NAA (2025, Abstract 3984) and real-time MRI in gastroesophageal reflux disease (2023, Abstract 0505). Their original Scholar fields and the additional ISMRM sources are retained in the data. The citation snapshot is 6,200 total citations, h-index 23, and i10-index 36. Citation metrics are retained in the source snapshot rather than repeated in the biography. This is a manually verified snapshot, not a live Scholar integration. For future updates, edit the publication data and refresh the verification date and citation snapshot together.

The original `content/`, `config/`, `static/`, and `themes/` directories are retained as migration references. Astro does not build them, and the Hugo theme submodule is not needed for development or deployment. Edit `src/data/` for the new website.

## GitHub Pages

1. In this repository's **Settings > Pages**, choose **GitHub Actions** as the source.
2. Push the reviewed changes to `astro-pages`. This dedicated deployment branch leaves the legacy `master` branch unchanged during the Netlify migration.
3. The workflow checks the source, builds the static files, and deploys them.

The workflow reads the site's origin and base path from GitHub Pages. It supports both a project URL such as `https://chvlyl.github.io/academic-kickstart-netlify/` and a custom domain without hardcoding the repository name in page assets or redirects.

To validate a project-path build locally:

```sh
PAGES_SITE=https://chvlyl.github.io PAGES_BASE=/academic-kickstart-netlify npm run build
PAGES_SITE=https://chvlyl.github.io PAGES_BASE=/academic-kickstart-netlify npm run preview
```

For local builds without these variables, canonical URLs use `https://www.ericzchen.me` and assets use the root path. These variables are build-time settings supplied by the workflow or shell.

## Moving the custom domain

First verify the GitHub Pages deployment. Then configure the custom domain in the repository's Pages settings, update the corresponding DNS records, and rebuild so the workflow uses the new domain. If the domain is already assigned to another GitHub Pages repository, move that assignment to this repository.

The old README stated that DNS was managed by Netlify. Website hosting and DNS are separate: changing the hosting does not move the DNS service. If moving DNS away from Netlify as well, preserve all existing DNS records, including any mail records, before changing nameservers. This code change does not modify DNS, GitHub settings, or the live Netlify site.

Official references:

- [Astro on GitHub Pages](https://docs.astro.build/en/guides/deploy/github/)
- [Custom domains for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
