/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      // root
      "@app": path.resolve(__dirname, "./src"),
      // directories
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@helpers": path.resolve(__dirname, "./src/helpers"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  plugins: [mode === "development" ? eslint() : null, react()].filter(
    Boolean,
  ) as any,
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.ts",
    include: ["**/?(*.){test,spec}.?(c|m)[jt]s?(x)"],
    exclude: [
      "sauvegarde/**",
      "**/node_modules/**",
      "**/dist/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/cypress/**",
      "**/.{cypress,cache}/**",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html", "cobertura", "lcov"],
      all: true,
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "**/__mocks__",
        "**/models",
        "**/i18next.d.ts",
        "**/vite-env.d.ts",
        "**/vite.config.ts",
        "**/node_modules/**",
        "sauvegarde/**",
        "dist/**",
      ],
    },
  },
  build: {
    chunkSizeWarningLimit: 1024, // Adjust the limit in kilobytes
    sourcemap: mode !== "production", // Keep maps in dev/staging only
  },
}));
