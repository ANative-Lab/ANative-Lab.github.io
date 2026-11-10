# ANative Lab website

Source of the ANative Lab website, served at `https://anative.ai/`.

## Develop and build

Requires Node.js >=22.18.0 (the tests import TypeScript files directly).

```sh
npm ci
npm run dev
npm run build:pages
npm run preview:pages
```

The GitHub Pages entry is `github-pages/main.tsx`, which renders `app/page.tsx`.
Shared styles live in `app/`; static images and icons live in `public/`.
The static build output is `dist-pages/`.

Open `http://127.0.0.1:4173/` after starting the preview server. Do not open the
built HTML directly as a `file://` URL: module scripts and root-relative assets
need an HTTP server.

Navigation uses separate HTML pages (`research.html`, `systems.html`,
`vision.html`, `people.html`, `activities.html`, and `join.html`) alongside
`index.html`. Each page can be opened, refreshed, and shared directly on GitHub
Pages without server rewrite rules. The current page is highlighted in the
navigation. Activities contains separate Talks and Workshops sections. News is
hidden until real updates are available, and the empty Papers placeholder has
been removed.

## Deploy

`.github/workflows/deploy-pages.yml` builds, runs `npm run test:pages`, and
deploys pushes to `main`; a failing test stops the deploy.
The repository's Settings → Pages → Source must use **GitHub Actions**.
With "Deploy from a branch", GitHub also runs a Jekyll build of the repository
root on every push, and whichever deployment finishes last wins: the site may
then show this README instead of the built pages.

The website is served at `https://anative.ai/`, the custom domain set in
Settings → Pages; `https://anative-lab.github.io/` redirects there. With GitHub
Actions deploys the domain lives only in that setting, so the repository has no
`CNAME` file.
