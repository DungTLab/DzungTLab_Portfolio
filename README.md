# Lê Tiến Dũng — Java Backend Portfolio

Minimal bilingual portfolio built with **HTML5, TypeScript, Tailwind CSS and Vite**. Black is the default theme. Light mode remains available, and explicit language/theme choices persist when browser storage is available.

## Requirements

Node.js 22.12+ (Node 24 recommended) and npm.

## Develop

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:5173/`. Vite processes the TypeScript, CSS and HTML asset paths; opening the source HTML directly is no longer the supported development workflow.

## Validate and build

```sh
npm run typecheck
npm run build
npm run preview
```

`build` runs strict TypeScript checks before producing static files in `dist/`. The preview server serves that production output at `http://127.0.0.1:4173/`. Preview is a local inspection server, not a production server.

## Structure

```text
index.html                  Semantic English content and no-JS fallback
src/main.ts                 Application entry; initializes feature modules
src/config/preferences.ts   Persistent preference keys
src/features/preferences.ts Language/theme state and localized labels
src/features/navigation.ts  Mobile menu and active section navigation
src/features/motion.ts      Optional scroll entrance animation
src/i18n/vi.ts              Vietnamese dictionary and translation key types
src/lib/                    DOM guards and safe storage access
src/styles/index.css        Tailwind entry and explicit stylesheet order
src/styles/tokens.css       Theme colors and typography tokens
src/styles/base.css         Foundation and shared layout
src/styles/components.css   Portfolio sections
src/styles/responsive.css   Responsive, print and reduced-motion rules
src/styles/enhancements.css Typography refinements and interaction/motion styles
public/assets/images/       Active logo only
.github/workflows/pages.yml Manual GitHub Pages build/deployment
```

Tailwind is compiled during the Vite build. This project uses utility classes and `@apply` for shared layout, with custom component CSS for the editorial design. No Tailwind browser CDN or Bootstrap runtime is used.

## Update content

- Edit English copy in `index.html` and matching Vietnamese text in `src/i18n/vi.ts`.
- `TranslationKey` and `Language` constrain translation handling; missing document keys are also reported during initialization.
- CV links and CV PDFs are intentionally excluded from the public portfolio to avoid exposing the phone number. Share a CV directly when needed.
- Public assets use `%BASE_URL%` in HTML and `import.meta.env.BASE_URL` in TypeScript so build URLs remain portable.
- Edit design colors in `src/styles/tokens.css`. The black theme is independent of OS preferences.
- Theme choices use `portfolio-theme-v2`; the older prototype's saved light choice does not override the new default. Explicit choices made in this version are respected.

The two course projects distinguish personal responsibilities and AI coding assistance. The environment illustration is a concept diagram, not a production screenshot or a live status indicator. Certificate titles link to the supplied course completion certificates.

## GitHub Pages

This repository has a prepared **manual** Actions workflow. After reviewing and committing the migration:

1. Set repository Settings → Pages → Source to **GitHub Actions**.
2. Run **Deploy portfolio to GitHub Pages** from the Actions tab.

The workflow installs locked dependencies with `npm ci`, typechecks/builds, and publishes `dist/`. Vite's relative base also supports the project URL `https://dungtlab.github.io/DzungTLab_Portfolio/`. Do not publish the raw source directory as the finished site after this migration.

No workflow is triggered merely by a push. Creating the local configuration does not publish the site or change repository settings.

## Accessibility and fallback

Semantic sections, keyboard focus, a skip link, native expandable project details and reduced-motion support are retained. Storage errors do not stop the UI. With JavaScript disabled, the built English HTML, navigation, certificates, contact links remain available; dynamic controls stay hidden.

## Profile

- GitHub: https://github.com/DungTLab
- Email: Dungletiense@gmail.com
