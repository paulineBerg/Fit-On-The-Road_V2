import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, "..");
const publicDir = path.join(projectRoot, "public");
const routesPath = path.join(projectRoot, "src/shared/routes.config.json");

const SITE_URL = process.env.SITE_URL?.replace(/\/$/, "") || "https://fit-ontheroad.fr";

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

async function generate() {
  const raw = await fs.readFile(routesPath, "utf-8");
  const routes = JSON.parse(raw);
  const lastmod = formatDate(new Date());

  const urlset = routes
    .map((route) => {
      const loc = `${SITE_URL}${route.path}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    ${route.changefreq ? `<changefreq>${route.changefreq}</changefreq>` : ""}\n    ${route.priority ? `<priority>${route.priority}</priority>` : ""}\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n${urlset}\n</urlset>\n`;

  await fs.writeFile(path.join(publicDir, "sitemap.xml"), xml, "utf-8");

  const robots = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /admin/",
    "Disallow: /private/",
    "Disallow: /api/",
    "",
    `Sitemap: ${SITE_URL}/sitemap.xml`,
    "",
  ].join("\n");
  await fs.writeFile(path.join(publicDir, "robots.txt"), robots, "utf-8");

  const llms = [
    "User-Agent: *",
    "Allow: /",
    "Disallow: /admin/",
    "Disallow: /private/",
    "Disallow: /api/",
    "AI-Training: allowed",
    "AI-Commercial-Training: disallowed",
    "AI-Attribution: required",
    "AI-Content-Modification: disallowed",
    "Crawl-delay: 5",
    "",
    "User-Agent: GPTBot",
    "Allow: /",
    "Disallow: /admin/",
    "Disallow: /private/",
    "Disallow: /api/",
    "AI-Training: allowed",
    "AI-Commercial-Training: disallowed",
    "AI-Attribution: required",
    "AI-Content-Modification: disallowed",
    "",
    "User-Agent: ClaudeBot",
    "Allow: /",
    "Disallow: /admin/",
    "Disallow: /private/",
    "Disallow: /api/",
    "AI-Training: allowed",
    "AI-Commercial-Training: disallowed",
    "AI-Attribution: required",
    "AI-Content-Modification: disallowed",
    "",
    "User-Agent: Google-Extended",
    "Allow: /",
    "Disallow: /admin/",
    "Disallow: /private/",
    "Disallow: /api/",
    "AI-Training: allowed",
    "AI-Commercial-Training: disallowed",
    "AI-Attribution: required",
    "AI-Content-Modification: disallowed",
    "",
    "User-Agent: PerplexityBot",
    "Allow: /",
    "Disallow: /admin/",
    "Disallow: /private/",
    "Disallow: /api/",
    "AI-Training: allowed",
    "AI-Commercial-Training: disallowed",
    "AI-Attribution: required",
    "AI-Content-Modification: disallowed",
    "",
  ].join("\n");
  await fs.writeFile(path.join(publicDir, "llms.txt"), llms, "utf-8");

  console.log(`Sitemap generated with ${routes.length} routes at ${lastmod}`);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
