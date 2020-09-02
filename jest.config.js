// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html
const packageJson = require('./package.json')
const applicationName = packageJson.name.replace(/-/g, ' ').toLocaleUpperCase()

module.exports = {
  collectCoverage: true,
  coverageDirectory: 'jest-coverage',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\'
  ],
  coverageProvider: 'v8',
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover'
  ],
  displayName: {
    name: applicationName,
    color: 'blue'
  },
  maxConcurrency: 5,
  maxWorkers: 3,
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node'
  ],
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|tests).[tj]s?(x)'
  ],
  testPathIgnorePatterns: [
    '\\\\node_modules\\\\'
  ],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '\\\\node_modules\\\\',
    '\\.pnp\\.[^\\\\]+$'
  ],
  notify: true
}
