module.exports = {
  clearMocks: true,
  projects: [
    '<rootDir>/packages/use-cases/jest.config.js',
    '<rootDir>/packages/presentation/jest.config.js',
  ],
  testEnvironment: 'node',
  testMatch: ['*.spec.ts', '*.spec.tsx', '*.test.ts', '*.test.tsx'],
}