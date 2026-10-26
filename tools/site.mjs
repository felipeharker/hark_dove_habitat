/**
 * This site, and where its links lead. tools/check.mjs and tools/serve.mjs
 * read this file.
 *
 *   SITE       this repository's site: its address, and the folder Render
 *              publishes
 *   LINKS      the running head and the site links at the foot of the page.
 *              This is a project site, opened from its tile on the
 *              portfolio, so they lead home and nowhere else. It is not one
 *              of the family of sites in every other hark_ repository's
 *              site links (hark_web, tools/sites.mjs).
 *   STYLESHEET the one shared stylesheet, served by hark_web. Every page links
 *              it by this address; nothing copies it.
 *   SCRIPT     the one shared script, served by hark_web beside the stylesheet.
 *              Every page links it, so it is set in the design the reader
 *              chose on felipeharker.org's front page.
 */

import { existsSync, statSync } from 'node:fs';
import { join, normalize } from 'node:path';

export const SITE = { name: 'Dove Habitat', url: 'https://hark-dove-habitat.onrender.com/', dir: 'site', kind: 'static' };

export const LINKS = [
  { name: 'Portfolio', url: 'https://felipeharker.org/' },
];

export const STYLESHEET = 'https://felipeharker.org/standards/hark.css';
export const SCRIPT = 'https://felipeharker.org/standards/hark.js';
export const STANDARDS = 'https://felipeharker.org/standards/';

/** The href a site link carries: root-relative to this site, absolute to the others. */
export const siteLinkHref = (site) => (site.url === SITE.url ? '/' : site.url);

/**
 * The file a URL path is served from, or null. Like Render: the path as a
 * file, then with .html, then as a folder's index.html.
 */
export function resolveUrl(root, urlPath) {
  const rest = normalize(decodeURIComponent(urlPath || '/'));
  const base = join(root, rest);
  if (!base.startsWith(root)) return null;
  for (const candidate of [base, `${base}.html`, join(base, 'index.html')]) {
    if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  }
  return null;
}
