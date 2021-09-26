const path = require('path');

module.exports = {
  displayName: 'client',
  ...require('./jest-common'),
  testEnvironment: 'jsdom',
  coverageDirectory: path.join(__dirname, '../coverage/client'),
  testMatch: ['**/__client__tests__/**/*.test.{js,ts,tsx,jsx}'],
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],
};
