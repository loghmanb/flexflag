/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      // Apply ts-jest to .ts/.tsx files, with your tsconfig
      '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    },
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    roots: ['<rootDir>/__tests__'],
};
