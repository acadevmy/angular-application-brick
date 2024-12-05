// @ts-check
const tseslint = require("typescript-eslint");
const devmy = require("@devmy/eslint-plugin");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    plugins: {"devmy": devmy},
    extends: [devmy.configs["angular-recommended"]],
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          "type": "attribute",
          "prefix": "{{prefix.paramCase()}}",
          "style": "camelCase"
        }
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          "type": "element",
          "prefix": "{{prefix.paramCase()}}",
          "style": "kebab-case"
        }
      ],
    }
  },
  {
    files: ["**/*.html"],
    plugins: {"devmy": devmy},
    extends: [devmy.configs["angular-template-recommended"]],
  }
);
