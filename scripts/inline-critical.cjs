/* Inline critical CSS into prerendered pages using Critters */
const fs = require("fs");
const path = require("path");
const Critters = require("critters");

const distDir = path.resolve(__dirname, "..", "dist");

async function processFile(file, critters) {
  const html = await fs.promises.readFile(file, "utf8");
  const inlined = await critters.process(html);
  await fs.promises.writeFile(file, inlined, "utf8");
  console.log(`✔ inlined critical CSS -> ${path.relative(distDir, file)}`);
}

async function main() {
  const critters = new Critters({
    path: distDir,
    publicPath: "/",
    preload: "swap",
    pruneSource: false,
  });

  const recurse = async (dir) => {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isFile() && entry.name.endsWith(".html")) {
        await processFile(full, critters);
      } else if (entry.isDirectory()) {
        await recurse(full);
      }
    }
  };

  await recurse(distDir);
}

main().catch((err) => {
  console.error("Critical CSS inlining failed:", err);
  process.exitCode = 1;
});
