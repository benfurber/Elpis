module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    typescript: true,
  },
  plugins: [
    "jest",
    "prettier",
    "react",
    "react-native",
    "sort-keys-fix",
    "@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/indent": ["error", 2],
    "import/prefer-default-export": 0,
    indent: "off",
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [0],
    "sort-keys-fix/sort-keys-fix": "warn",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
      "babel-module": {},
    },
    react: {
      version: "detect",
    },
  },
  root: true,
};
