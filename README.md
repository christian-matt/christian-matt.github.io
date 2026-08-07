# Christian Matt — Jekyll website

This repository contains the bilingual professional website of Prof. Dr. Christian Matt. It presents his work on digital transformation and responsible AI, together with his consulting, workshops, talks, executive education, and contact information. The site is built with Jekyll and published through GitHub Pages.

## Edit content

Most content can be edited in the corresponding German or English Markdown file under `pages/`. Files ending in `-en.md` contain the English version. Keep each page's front matter at the top of the file because it defines metadata, URLs, language links, and the layout Jekyll uses to render the content.

The page hierarchy is:

```text
pages/*.md
├── layout: home
│   └── _layouts/home.html
│       └── _layouts/default.html
└── layout: subpage
    └── _layouts/subpage.html
        └── _layouts/default.html
            ├── _includes/head.html
            ├── _includes/header.html
            └── _includes/footer.html
```

- `_layouts/default.html` provides the shared HTML shell and inserts the common head, navigation, footer, stylesheet, and JavaScript.
- `_layouts/home.html` arranges the homepage content from `pages/index.md` and `pages/index-en.md`.
- `_layouts/subpage.html` arranges all regular content pages. It also inserts `_includes/contact-form.html` on the contact page.
- `_includes/` contains reusable fragments shared across pages. Navigation and contact-form text are read from the language-specific files in `_data/`.

Horizontal rules (`---`) divide Markdown content into sections. On subpages, keep those sections in the same order as the `sections` entries in the page's front matter. Repeating content such as topic cards is usually represented by ordinary Markdown lists.

## Run locally

Jekyll requires Ruby 2.7 or newer, RubyGems, GCC, and Make. Follow the official [Jekyll installation guide](https://jekyllrb.com/docs/installation/) for the setup instructions for Windows, macOS, or Linux. After installing Ruby, install Bundler if it is not already available:

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
