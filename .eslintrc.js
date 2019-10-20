module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ["react", "@typescript-eslint", "prettier"],
  parserOptions: {
    project: "tsconfig.json",
    ecmaFeatures: {
      jsx: true
    }
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
    "prettier/prettier": ["error", { "singleQuote": true, semi: false, tabWidth: 2, useTabs: true, printWidth: 160 }]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}