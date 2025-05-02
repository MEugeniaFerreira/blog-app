import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig  = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/app/components/$1',
    '^@types/(.*)$': '<rootDir>/types/$1',
    '^@data/(.*)$': '<rootDir>/data/$1',
    '^@services/(.*)$': '<rootDir>/services/$1',
    '^@services$': '<rootDir>/services/index',
  },
  testMatch: [
    '**/tests/**/*.(test|spec).{js,jsx,ts,tsx}',
  ],
};

export default createJestConfig(customJestConfig );