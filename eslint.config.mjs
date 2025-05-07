import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["packages/**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: { 
      globals: { ...globals.browser, ...globals.node },
      parser: tseslint.parser
     },
    rules: {
      'semi': 'off'
    }
  },
  pluginVue.configs["flat/essential"],
  {
    files: ["packages/**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  }
]);
