module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  moduleFileExtensions: ["js", "jsx"],
  testEnvironment: "jsdom",
  testRegex: "./src/.*\\.(test|spec)?\\.(js|jsx)$",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/src/mocks/fileMock.js",
    "^@/(.*)": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
}
