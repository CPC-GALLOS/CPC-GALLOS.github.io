# AGENTS.md — CPC-GALLOS Jekyll Site

## Stack
Jekyll static site using the **jekyll-theme-chirpy** theme (~7.0). Content is in Spanish.

## Commands
- **Serve locally:** `bundle exec jekyll serve`
- **Build:** `bundle exec jekyll build`
- **Build (production):** `JEKYLL_ENV=production bundle exec jekyll b -d _site`
- **Test (html-proofer):** `bundle exec htmlproofer _site --disable-external --ignore-urls "/^http:\/\/127.0.0.1/,/^http:\/\/0.0.0.0/,/^http:\/\/localhost/"`
- **Install deps:** `bundle install`

## Post Conventions (`_posts/`)
- Filename format: `YYYY-MM-DD-Title_With_Underscores.md`
- Required front matter fields: `title`, `description`, `date`, `categories`, `author`, `tags`, `pin`, `mermaid`, `image`
- `author` must match an entry in `_data/authors.yml`
- `tags` must be lowercase, comma-separated
- `categories` is a list (e.g., `[Club]`, `[Recursos]`)
- `image` path: `/assets/img/posts/<filename>`

## Formatting
- Indent: 2 spaces (see `.editorconfig`)
- Charset: UTF-8, LF line endings, final newline required
- JS/CSS/SCSS: single quotes; YAML: double quotes
- Markdown: trailing whitespace allowed (not trimmed)
- Links: MUST use `https://` (using `http://` will cause CI/build failures)
- Content language: Spanish; code samples may be in English/C++
