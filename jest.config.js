module.exports = {
  clearMocks: true,
  projects: [
    '<rootDir>/packages/web/jest.config.js',
  ],
  testEnvironment: 'node',
  testMatch: ['*.spec.ts', '*.spec.tsx', '*.test.ts', '*.test.tsx'],
}