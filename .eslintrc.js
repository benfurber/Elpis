module.exports = {
  extends: [
    "@react-native-community",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    typescript: true
  },
  plugins: ["jest", "prettier", "react", "react-native", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/indent": ["error", 2],
    "import/prefer-default-export": false,
    indent: "off",
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [0]
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      },
      "babel-module": {}
    },
    react: {
      version: "detect"
    }
  },
  root: true
};
