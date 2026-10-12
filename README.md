# ANative Lab website

Local migration of the website from `mengzaiqiao/ANative` into
`ANative-Lab/ANative-Lab.github.io`.

## Develop and build

Requires Node.js >=22.13.0.

```sh
npm ci
npm run dev
npm run build:pages
```

The GitHub Pages entry is `github-pages/main.tsx`, which renders `app/page.tsx`.
Shared styles live in `app/`; static images and icons live in `public/`.
The static build output is `dist-pages/`.

## Deploy

`.github/workflows/deploy-pages.yml` builds and deploys pushes to `main`.
The repository's Settings → Pages → Source must use **GitHub Actions**.
The website uses the default address `https://anative-lab.github.io/`; the
source website's `anative.ai` custom domain is intentionally not migrated.
The existing source repository and its live site have not been changed.

Migration source commit: `b2e7cb82336a20fffce6c29c38cdd4ad359758e3`.
The destination's existing Apache-2.0 `LICENSE` is retained.
