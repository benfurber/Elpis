/* eslint-disable @typescript-eslint/no-var-requires */

const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig");
const { defaults: tsjPreset } = require("ts-jest/presets");

module.exports = {
  cacheDirectory: ".jest/cache",
  clearMocks: true,
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    "^@App/(.*)$": "<rootDir>/src/$1",
    "^lib/(.*)$": "<rootDir>/common/$1",
    prefix: "<rootDir>/",
  }),
  preset: "react-native",
  setupFiles: ["./jest-setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "node",
  testMatch: null,
  testPathIgnorePatterns: ["\\.snap$", "<rootDir>/node_modules/"],
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  transform: {
    ...tsjPreset.transform,
    "\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(jest-)?react-native|native-base-shoutem-theme)/",
  ],
};
