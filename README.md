# ANative Lab website

Source of the ANative Lab website, served at `https://anative-lab.github.io/`.

## Develop and build

Requires Node.js >=22.13.0.

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

`.github/workflows/deploy-pages.yml` builds and deploys pushes to `main`.
The repository's Settings → Pages → Source must use **GitHub Actions**.
With "Deploy from a branch", GitHub also runs a Jekyll build of the repository
root on every push, and whichever deployment finishes last wins: the site may
then show this README instead of the built pages.

The website uses the default address `https://anative-lab.github.io/` with no
custom domain.
