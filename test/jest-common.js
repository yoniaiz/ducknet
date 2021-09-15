const path = require('path');
const ROOT = path.join(__dirname, '..');

module.exports = {
  rootDir: ROOT,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',

    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@lib/(.*)$': '<rootDir>/lib/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@ui/(.*)$': '<rootDir>/components/ui/$1',
    '^@style/(.*)$': '<rootDir>/style/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@style/(.*)$': '<rootDir>/style/$1',
    '^@style': '<rootDir>/style',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@icons': '<rootDir>/components/icons',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['../node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};
