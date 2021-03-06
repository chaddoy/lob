module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser,
  rules: {
    strict: 0,
    "prettier/prettier": "warn",
  },
  plugins: ["@typescript-eslint"],
  settings: {
    "import/resolver": {
      alias: {
        extensions: [".ts", ".js", ".jsx", ".json"],
      },
    },
  },
};
