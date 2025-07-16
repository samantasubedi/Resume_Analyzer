import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // bring in the Next.js presets
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 👉 your project‑specific overrides
  {
    rules: {
      // turn the rule off globally
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
