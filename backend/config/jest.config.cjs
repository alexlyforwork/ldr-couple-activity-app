module.exports = {
  testEnvironment: 'node',
  roots: ['../tests'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/../src/$1"
  }
};