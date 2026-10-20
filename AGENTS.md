# hark_dove_habitat — agent guide

Dove Habitat, https://hark-dove-habitat.onrender.com/: the design
documentation for a modular cage accessory system, as one page. Read
[`README.md`](README.md) first. It is built to the standard of the sites at
felipeharker.org; the standard, the decision log and the roadmap live in
[`hark_web`](https://github.com/felipeharker/hark_web) (`web/standards/`,
`planning/`).

## Rules

1. **`main` is live.** Render deploys every push to `main`. Work on a branch;
   push or merge to `main` only when the user asks. Never change Render
   settings unless asked.
2. **The repository is public.** Every file here can be read by anyone, not
   only what is served. No secrets, no `.env`, no private notes.
3. **Privacy.** No street address, no one else's contact details, no client
   named and no work done for one shown.
4. **No links to private `github.com/felipeharker/…` repositories.** A
   visitor gets GitHub's 404. The public `hark_` repositories may be linked.
5. **One stylesheet, and it is not here.** The page links
   `https://felipeharker.org/standards/hark.css`, served by `hark_web`, then
   `assets/site.css`, which holds only what this page adds, commented, in
   classes of its own. Never copy the standard; a change to a shared
   component is a change to it, in `hark_web`. No inline `style` attributes,
   no CSS framework, no build step, no JavaScript.
6. **Only `site/` is published.** The model, the STLs, PDFs and other working
   files go in `source/`, which git ignores. No page links a PDF.
7. **Names.** Anything served is a URL, so it is lowercase kebab-case
   (`img/split-ph1.webp`).
8. **Links.** Within this site: relative. The running head and the site links
   lead home to the portfolio, `https://felipeharker.org/`, in the same tab,
   and nowhere else (`tools/site.mjs`, `LINKS`). To anyone else: absolute,
   `target="_blank" rel="noopener noreferrer"`.
9. **Text.** Plain language; headings in Title Case, never numbered. Part and
   plate codes (MP-1, P1) are recorded identifiers, in mono. The page opens
   with the running head and ends with the colophon; the standards link is
   `https://felipeharker.org/standards/`.
10. **Third-party material** — the cage manufacturer's instructions, vendor
    models — never goes in the repository. It stays in `source/`.
11. **Keep the docs true.** A change to how something works updates the
    README in the same commit. A decision goes in `hark_web`'s
    `planning/decisions.md`.

## Before a commit

1. `node tools/check.mjs` passes.
2. `node tools/serve.mjs`, and open the page at desktop width and at 390 px.

Commit messages end with the attribution line the session gives, for example
`Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
