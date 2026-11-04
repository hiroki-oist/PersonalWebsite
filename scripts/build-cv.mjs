#!/usr/bin/env node
// CV builder: cv/data/*.yaml -> cv/dist/cv_{jp,en}.html -> cv/dist/cv_{jp,en}.pdf
//
//   npm run cv              # build both languages into cv/dist/
//   npm run cv -- --publish # also copy the PDFs to public/cv/ (the site's CV links)
//
// PDF rendering uses headless Google Chrome (set CHROME_PATH to override).

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import yaml from "js-yaml";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const cvDir = path.join(root, "cv");
const distDir = path.join(cvDir, "dist");
const publish = process.argv.includes("--publish");

const CHROME =
  process.env.CHROME_PATH ||
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const LANGS = [
  { lang: "ja", file: "cv.ja.yaml", out: "cv_jp" },
  { lang: "en", file: "cv.en.yaml", out: "cv_en" },
];

// Own name variants to highlight in author lists.
const ME = /(Hiroki Sawada|Sawada Hiroki|H\. Sawada|澤田\s?拓希)/g;

// FAILSAFE_SCHEMA keeps every scalar a string, so periods like 2026.10 are not read as the number 2026.1.
const load = (f) =>
  yaml.load(fs.readFileSync(path.join(cvDir, "data", f), "utf8"), { schema: yaml.FAILSAFE_SCHEMA });

const publications = load("publications.yaml");
const pubByKey = new Map(publications.map((p) => [p.key, p]));

function render(cv) {
  // Number publications in the order their sections appear in this CV.
  const numbers = new Map();
  for (const s of cv.sections) {
    if (s.type !== "publications") continue;
    for (const p of publications.filter((p) => p.group === s.group)) {
      if (!numbers.has(p.key)) numbers.set(p.key, numbers.size + 1);
    }
  }

  const cite = (text) =>
    String(text).replace(/\{\{cite:([^}]+)\}\}/g, (_, keys) => {
      const nums = keys.split(",").map((k) => {
        const key = k.trim();
        if (!pubByKey.has(key)) throw new Error(`Unknown citation key: ${key}`);
        if (!numbers.has(key)) throw new Error(`Cited "${key}" is not listed in any publications section`);
        return numbers.get(key);
      });
      return `[${nums.join(", ")}]`;
    });

  const entry = (it) => {
    const periods = [].concat(it.period ?? []);
    const long = (it.bullets?.length ?? 0) >= 4 ? " long" : "";
    return `
      <div class="entry${long}">
        <div class="period">${periods.map((p) => `<div>${p}</div>`).join("")}</div>
        <div>
          ${it.title ? `<div class="title">${cite(it.title)}</div>` : ""}
          ${(it.lines ?? []).map((l) => `<div>${cite(l)}</div>`).join("")}
          ${it.meta ? `<div class="meta">${it.meta}</div>` : ""}
          ${it.project ? `<div class="project">${cite(it.project)}</div>` : ""}
          ${it.bullets?.length ? `<ul>${it.bullets.map((b) => `<li>${cite(b)}</li>`).join("")}</ul>` : ""}
        </div>
      </div>`;
  };

  const pub = (p) => {
    const authors = p.authors.replace(ME, '<span class="me">$1</span>');
    const format = p.format ? `, ${p.format}` : "";
    const year = p.date
      ? `, ${p.date}`
      : p.year && !String(p.venue).includes(String(p.year)) ? ` (${p.year})` : "";
    const note = p.note ? ` (${p.note})` : "";
    const title = p.url ? `<a href="${p.url}">${p.title}</a>` : p.title;
    return `<li><span class="num">[${numbers.get(p.key)}]</span>
      <span>${authors}${p.authors.trim().endsWith(".") ? "" : "."} “${title}.” <span class="venue">${p.venue}</span>${format}${year}.${note}</span></li>`;
  };

  const section = (s) => {
    let body = "";
    if (s.type === "entries") body = s.items.map(entry).join("");
    else if (s.type === "rows")
      body = s.items
        .map((r) => `<div class="row"><div class="label">${r.label}</div><div>${r.value}</div></div>`)
        .join("");
    else if (s.type === "publications")
      body = `<ol class="pubs">${publications.filter((p) => p.group === s.group).map(pub).join("")}</ol>`;
    else throw new Error(`Unknown section type: ${s.type}`);
    return `<section><h2>${s.title}</h2>${body}</section>`;
  };

  const contact = cv.contact
    .map((c) => `<div>${c.label}: ${c.href ? `<a href="${c.href}">${c.value}</a>` : c.value}</div>`)
    .join("");

  const css = fs.readFileSync(path.join(cvDir, "style.css"), "utf8");

  return `<!doctype html>
<html lang="${cv.lang}">
<head>
<meta charset="utf-8">
<title>CV – ${cv.name}</title>
<style>${css}</style>
</head>
<body class="${cv.lang}">
<header><h1>${cv.name}</h1><div class="contact">${contact}</div></header>
${cv.sections.map(section).join("\n")}
</body>
</html>`;
}

fs.mkdirSync(distDir, { recursive: true });

for (const { file, out } of LANGS) {
  const html = render(load(file));
  const htmlPath = path.join(distDir, `${out}.html`);
  const pdfPath = path.join(distDir, `${out}.pdf`);
  fs.writeFileSync(htmlPath, html);

  execFileSync(
    CHROME,
    [
      "--headless",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ],
    { stdio: "ignore" },
  );
  console.log(`built ${path.relative(root, pdfPath)}`);

  if (publish) {
    const dest = path.join(root, "public", "cv", `${out}.pdf`);
    fs.copyFileSync(pdfPath, dest);
    console.log(`  -> ${path.relative(root, dest)}`);
  }
}
