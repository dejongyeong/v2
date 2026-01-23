// jest.config.mjs

/** @type {import('jest').Config} */
const config = {
  collectCoverage: true,
  coverageProvider: "v8",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!./out/**",
    "!./.next/**",
    "!./*.config.js",
    "!./coverage/**",
  ],
  moduleNameMapper: {
    // handle css imports with css modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    // handle module aliases
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  testEnvironment: "jsdom",
  transform: {
    // use babel-jest to transpile tests with the next/babel preset
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
};

export default config;
