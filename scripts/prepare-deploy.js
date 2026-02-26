#!/usr/bin/env node
import fs from "fs/promises";
import path from "path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const apiDir = path.join(root, "api");
const configDir = path.join(root, "config");
const deployDir = path.join(root, "deploy");

async function main() {
  // Clean deploy folder
  await fs.rm(deployDir, { recursive: true, force: true });
  await fs.mkdir(deployDir, { recursive: true });

  // Copy dist (front)
  await fs.cp(distDir, deployDir, { recursive: true });

  // Copy api (PHP endpoint)
  const targetApi = path.join(deployDir, "api");
  await fs.cp(apiDir, targetApi, { recursive: true });

  // Remove any logs subfolder accidentally copied inside api
  await fs.rm(path.join(targetApi, "logs"), { recursive: true, force: true });

  // Copy config: prefer config.php if present, else sample
  const targetConfigDir = path.join(deployDir, "config");
  await fs.mkdir(targetConfigDir, { recursive: true });

  const configPhp = path.join(configDir, "config.php");
  const htaccessSrc = path.join(configDir, ".htaccess");

  try {
    await fs.access(configPhp);
    await fs.cp(configPhp, path.join(targetConfigDir, "config.php"));
  } catch (err) {
    // fallback: create empty template to be filled after upload
    const template = `<?php\nreturn [\n    'smtpHost' => 'smtp.ionos.fr',\n    'smtpPort' => 465,\n    'smtpUser' => 'contact@fit-ontheroad.fr',\n    'smtpPass' => '',\n    'smtpFrom' => 'contact@fit-ontheroad.fr',\n    'smtpTo' => 'contact@fit-ontheroad.fr',\n    'recaptchaSecret' => '',\n];\n`;
    await fs.writeFile(path.join(targetConfigDir, "config.php"), template, "utf8");
  }

  try {
    await fs.access(htaccessSrc);
    await fs.cp(htaccessSrc, path.join(targetConfigDir, ".htaccess"));
  } catch (err) {
    // ignore if not present
  }

  console.log("[deploy] Bundle prêt dans ./deploy (dist + api + config)");
}

main().catch((err) => {
  console.error("[deploy] Erreur", err);
  process.exit(1);
});
