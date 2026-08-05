# Christian Matt — Jekyll website

A static, bilingual Jekyll website. Content lives in lean Markdown pages under `pages/`; page structure lives in three layouts (`default`, `home`, and `subpage`) plus shared includes; all visual rules live in `assets/css/site.css`; client-side behaviour lives in `assets/js/site.js`.

## Edit content

Open the relevant `.md` file in `pages/`. Horizontal rules (`---`) divide the page into semantic sections interpreted in their existing order. Repeating items are ordinary Markdown lists.

All public content pages except the homepage use `layout: subpage`; legacy URL redirects use the shared `default` shell directly. The `sections` front-matter array maps each Markdown section, in order, to a shared presentation type such as `hero`, `cards`, `benefits`, `tags`, `prose`, `note`, `contact`, `legal`, or `cta`. A section may also define an `id` for anchor links and `tone: surface` for the alternating white band. Keep the array order aligned with the Markdown sections below the front matter.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Deploy

In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. A push to `main` triggers `.github/workflows/pages.yml`.
