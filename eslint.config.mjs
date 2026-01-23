import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import tseslint from "typescript-eslint";
import nextPlugin from "@next/eslint-plugin-next";

export default [
  // base js recommendations
  js.configs.recommended,
  // typescript recommendations
  ...tseslint.configs.recommended,
  {
    files: ["**/*.(ts|js)?(x)"],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      "jsx-a11y": jsxA11yPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      "@next/next": nextPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      // TypeScript
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      // React
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx", ".js", ".jsx"] }],
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": [2, { namedComponents: "arrow-function" }],
      // Hooks
      ...reactHooksPlugin.configs.recommended.rules,
      // Import
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      // Accessibility
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
      // Misc
      "no-nested-ternary": "off",
      // Next.js
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      // Prettier
      "prettier/prettier": "error",
    },
  },
  {
    ignores: ["node_modules", ".next", "out", "public", "build", "coverage"],
  },
];
