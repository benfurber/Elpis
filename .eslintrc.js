module.exports = {
  extends: [
    "airbnb",
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  plugins: ["jest", "prettier", "react", "react-native"],
  rules: {
    "@typescript-eslint/indent": ["error", 2],
    "import/prefer-default-export": false,
    indent: "off",
    "no-extraneous-dependencies": false,
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [0]
  },
  settings: {
    "import/resolver": {
      "babel-module": {}
    },
    react: {
      version: "detect"
    }
  }
};
