# Christian Matt — Jekyll website

This repository contains the bilingual professional website of Prof. Dr. Christian Matt. It presents his work on digital transformation and responsible AI, together with his consulting, workshops, talks, executive education, and contact information. The site is built with Jekyll and published through GitHub Pages.

## Edit content

- **Page text:** Edit the matching Markdown file in `pages/`. English pages end in `-en.md` (for example, `index-en.md`).
- **Page settings:** Keep the YAML front matter at the top; it controls the URL, language link, layout, and—on subpages—the section order.
- **Sections:** Separate subpage sections with `---` and keep them in the order listed in the front matter.
- **Shared labels:** Edit navigation in `_data/navigation.yml` and contact-form text in `_data/contact.yml`; both have `de` and `en` entries.
- **Page structure:** For layout or reusable-fragment changes, see `_layouts/` and `_includes/`.

## Run locally

Jekyll requires Ruby 2.7 or newer. Follow the official [Jekyll installation guide](https://jekyllrb.com/docs/installation/) for the setup instructions for Windows, macOS, or Linux. After installing Ruby, install Bundler if it is not already available:

```bash
gem install bundler
```

Check the installation of Jekyll:

```bash
jekyll -v
```

From the repository root, install the project dependencies and start the local development server:

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`. Stop the server with `Ctrl+C`.

## Deploy

GitHub Pages provides the Jekyll build and deployment workflow for this repository. No custom workflow file or manual Jekyll build is required. Push changes to the configured publishing branch; GitHub Pages will build and publish the site automatically. The deployment status is visible in the repository's **Actions** and **Settings → Pages** sections.
