module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    'import/no-unresolved': 0,
    "import/extensions": [1, {"extentions":[".js", ".jsx", ".json", ".ts", ".tsx"]}],
    "semi": ["error", "always"],

  },
};
