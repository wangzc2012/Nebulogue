# Nebulogue — Hexo blog

## Commands

| `npm run ...` | runs |
|---|---|
| `build` | `hexo generate` — builds site into `public/` |
| `clean` | `hexo clean` — deletes `public/` and `db.json` |
| `server` | `hexo server` — dev server |
| `deploy` | `hexo deploy` — git-deploy |

Post-build minification: `hexo generate && gulp` (gulpfile.js minifies JS/CSS/HTML in `public/`).

## Content

- New post: `npx hexo new post "Title"` (uses `scaffolds/post.md` — includes `mathjax: true` by default).
- Post files: `source/_posts/YYYY-MM-DD-title.md`
- Permalinks (`_config.yml`): `/posts/:abbrlink.html` — `abbrlink` is auto-generated (CRC32/hex) on first `generate` when missing.
- Pages at: `box/`, `life/`, `personal/`, `site/`, `social/`, `categories/`, `tags/`.
- Custom JS in `source/js/`, custom CSS in `source/css/`.
- Data files (link/widget YML) in `source/_data/`.
- Timezone: `Asia/Shanghai`, language: `zh-CN`.

## Theme: Butterfly

Config in `_config.butterfly.yml` (1126 lines). Key features:
- Local search (`search.xml`), Waline comments, KaTeX + MathJax, Fancybox lightbox.
- Swiper carousel, WOW.js animations, tag plugins (`hexo-butterfly-tag-plugins-plus`).
- Custom injects (head/bottom) in `inject:` section — JS/CSS/CDN resources.

## Build & deploy

- `public/` is committed (not in `.gitignore`). Deployed via Netlify at `https://nebulogue.netlify.app/`.
- `db.json` and `package-lock.json` are gitignored.
- No CI workflows, no lint/typecheck scripts, no tests.
- Deploy git repo URL is unconfigured in `_config.yml` — `hexo deploy` will not work without setting it.

## Quirks

- Multiple markdown renderers coexist (`hexo-renderer-markdown-it`, `hexo-renderer-kramed`, `@upupming/hexo-renderer-markdown-it-plus`) — prefer `markdown-it` for new content.
- `hexo-blog-encrypt` is available for encrypted posts.
- `hexo-abbrlink` transforms `abbrlink` front-matter into short CRC32 permalinks on first generate.
