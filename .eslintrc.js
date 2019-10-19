module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ["react", "@typescript-eslint", "prettier"],
  parserOptions: {
    project: "tsconfig.json"
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'prettier/@typescript-eslint',
    "plugin:prettier/recommended"
  ],
  rules: {
    "prettier/prettier": ["error", { "singleQuote": true, semi: false, tabWidth: 2, usedTabs: true }]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}