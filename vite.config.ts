/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  test: {
    globals: false,
    environment: "jsdom",
  },
  build: {
    lib: {
      entry: resolve("src", "component/index.ts"),
      name: "ImageProcessingLoader",
      formats: ["es", "umd"],
      fileName: (format) => `image-processing-loader.${format}.js`,
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
