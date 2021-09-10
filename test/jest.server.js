const path = require("path");

module.exports = {
  displayName: "server",
  ...require("./jest-common"),
  testEnvironment: "node",
  coverageDirectory: path.join(__dirname, "../coverage/server"),
  testMatch: ["**/__server__tests__/**/*.{js,ts}"],
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.server.js"],
};
