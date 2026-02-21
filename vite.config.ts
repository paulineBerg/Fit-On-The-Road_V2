/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  resolve: {
    alias: {
      // root
      "@app": path.resolve(__dirname, "./src"),
      // directories
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      // modules
      "@document": path.resolve(__dirname, "./src/modules/document"),
      "@search": path.resolve(__dirname, "./src/modules/search"),
      "@shared": path.resolve(__dirname, "./src/modules/shared"),
    },
  },
  plugins: [eslint(), react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.ts",
    include: ["**/?(*.){test,spec}.?(c|m)[jt]s?(x)"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "cobertura", "lcov"],
      all: true,
      include: ["**/*.{d.ts,ts,tsx}"],
      exclude: [
        "**/__mocks__",
        "**/models",
        "**/i18next.d.ts",
        "**/vite-env.d.ts",
        "**/vite.config.ts",
      ],
    },
  },
  build: {
    chunkSizeWarningLimit: 1024 // Adjust the limit in kilobytes
  }
});
