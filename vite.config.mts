/// <reference types="vitest" />
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths(), dts()],
  test: {
    globals: false,
    environment: "jsdom",
  },
  build: {
    lib: {
      entry: resolve("src", "components/index.ts"),
      name: "ImageProcessingLoader",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: false,
    emptyOutDir: true,
  },
});
