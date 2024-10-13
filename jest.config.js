const { defaults: tsjPreset } = require("ts-jest/presets")

/** @type {import('@jest/types').Config.ProjectConfig} */
module.exports = {
  ...tsjPreset,
  preset: "jest-expo",
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)",
    "jest-runner",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.maestro/",
    "@react-native",
    "<rootDir>/test/i18n.test.ts",
  ],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/mockFile.ts",
    "\\.(css|less)$": "<rootDir>/test/mockFile.ts",
  },
  setupFiles: ["<rootDir>/test/setup.ts"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  coverageDirectory: "<rootDir>/test/coverage",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
    "!**/test/**",
    "!**/coverage/**",
    "!**/.expo/**",
    "!**/android/**",
    "!**/ios/**",
  ],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    "ts-jest": {
      diagnostics: false,
    },
  },
}
