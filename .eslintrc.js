const appTsFiles = ["app/**/*.ts", "app/**/*.tsx"];

// https://nextjs.org/docs/app/api-reference/file-conventions
const nextConventionFiles = [
  "app/**/default.tsx",
  "app/**/error.tsx",
  "app/**/layout.tsx",
  "app/**/loading.tsx",
  "app/**/not-found.tsx",
  "app/**/page.tsx",
  "app/**/route.tsx",
  "app/**/template.tsx",
];

const orderedKeys = ["children", "className"];

module.exports = {
  $schema: "https://json.schemastore.org/eslintrc",
  root: true,
  extends: ["plugin:@typescript-eslint/recommended", "next/core-web-vitals", "prettier"],
  plugins: ["sort-keys-custom-order", "unused-imports"],
  rules: {
    curly: ["error"],
    "prefer-const": ["error"],
    "prefer-arrow-callback": ["error"],
    "arrow-body-style": ["error", "always"],
    "func-style": ["error", "declaration"],
    "@typescript-eslint/no-var-requires": ["off"],
    "unused-imports/no-unused-imports": ["error"],
    "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
  },
  settings: {
    next: { rootDir: true },
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
    },
    {
      files: appTsFiles,
      rules: {
        "@typescript-eslint/no-var-requires": ["error"],
        "react/destructuring-assignment": ["error", "always"],
        "@next/next/no-img-element": "off",
        "sort-keys-custom-order/type-keys": ["error", { orderedKeys }],
        "sort-keys-custom-order/object-keys": ["error", { orderedKeys }],
      },
    },
    {
      files: appTsFiles,
      rules: { "import/no-default-export": "error" },
      excludedFiles: nextConventionFiles,
    },
  ],
};