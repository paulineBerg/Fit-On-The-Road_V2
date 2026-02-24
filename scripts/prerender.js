import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { chromium } from "playwright-chromium";
import { preview } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const routesConfigPath = path.join(
  projectRoot,
  "src",
  "shared",
  "routes.config.json",
);

async function loadRoutes() {
  const raw = await fs.readFile(routesConfigPath, "utf-8");
  const parsed = JSON.parse(raw) ?? [];
  const paths = parsed
    .filter((r) => r.prerender !== false)
    .map((r) => r.path)
    .filter(Boolean);
  return paths.includes("/") ? paths : ["/", ...paths];
}

function routeToFilePath(route) {
  const cleaned = route === "/" ? "" : route.replace(/^\//, "");
  const dir = path.join(distDir, cleaned);
  const file = path.join(dir, "index.html");
  return { dir, file };
}

async function prerenderRoute(browser, baseUrl, route) {
  const page = await browser.newPage();
  const url = `${baseUrl}${route}`;
  await page.goto(url, { waitUntil: "networkidle" });
  const html = await page.evaluate(
    () => "<!DOCTYPE html>\n" + document.documentElement.outerHTML,
  );
  const { dir, file } = routeToFilePath(route);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(file, html, "utf-8");
  await page.close();
  // eslint-disable-next-line no-console
  console.log(`Prerendered ${route} -> ${path.relative(projectRoot, file)}`);
}

async function main() {
  const routes = await loadRoutes();

  // Start a local preview server from the built dist
  const previewServer = await preview({
    preview: {
      host: "127.0.0.1",
      port: 4173,
    },
  });
  const addressInfo = previewServer.httpServer.address();
  const port =
    typeof addressInfo === "object" && addressInfo?.port
      ? addressInfo.port
      : 4173;
  const baseUrl = `http://127.0.0.1:${port}`;

  const browser = await chromium.launch({ headless: true });
  try {
    for (const route of routes) {
      await prerenderRoute(browser, baseUrl, route);
    }
  } finally {
    await browser.close();
    await previewServer.httpServer.close();
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
