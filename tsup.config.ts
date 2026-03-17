import { defineConfig } from "tsup";

export default defineConfig([
  {
    entry: { index: "src/index.ts" },
    format: ["esm", "cjs"],
    dts: true,
    clean: true,
    treeshake: true,
    sourcemap: false,
    external: [
      "react",
      "react-dom",
      "framer-motion",
      "next",
      "next/link",
      "next/image",
      "next/navigation",
      "next-themes",
      "tailwindcss",
    ],
    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      };
    },
  },
  {
    entry: { templates: "src/templates.ts" },
    format: ["esm", "cjs"],
    dts: true,
    treeshake: true,
    sourcemap: false,
    external: [
      "react",
      "react-dom",
      "framer-motion",
      "next",
      "next/link",
      "next/image",
      "next/navigation",
      "next-themes",
      "tailwindcss",
    ],
  },
]);
