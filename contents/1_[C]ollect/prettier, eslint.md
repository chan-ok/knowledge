# prettier

```json
// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see <https://prettier.io/docs/en/configuration.html>
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'all',
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  tabWidth: 2,
  semi: true,
};

export default config;

```

# eslint

```bash
npm init @eslint/config@latest
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/44390940-33bb-44db-b120-952b4abebb44/21a5c008-7c65-4582-bf48-8fc6a20f1f98/image.png)

```bash
npm install --save-dev eslint-config-prettier
```

```jsx
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...,
  eslintConfigPrettier
];
```

### webpack 사용시

```bash
npm install eslint-webpack-plugin --save-dev
```

```jsx
import globals from "globals";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
// import pluginJest from "eslint-plugin-jest";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...[
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    eslintConfigPrettier,
    // pluginJest.configs["flat/recommended"],
  ].map((config) => ({
    ...config,
    ignores: [
      "**/build/*",
      "**/src/vendor/**/*",
      "**/src/mocks/**/*",
      "**/webpack/**/*",
    ],
    rules: {
      "no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-undef": "error",
    },
  })),
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.browser, ...globals.jquery },
    },
  },
];

```

```jsx
// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see <https://prettier.io/docs/en/configuration.html>
 * @type {import("prettier").Config}
 */
export default {
  trailingComma: "all",
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  tabWidth: 2,
  semi: true,
};

```