module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "react/prop-types": "off",
    "arrow-parens": ["warn", "always"]
  },
};