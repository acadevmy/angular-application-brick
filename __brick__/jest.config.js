module.exports = {
  // Required for ESM support
  preset: "jest-preset-angular/presets/defaults-esm",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  testMatch: ["<rootDir>/src/app/**/*.(spec|jest).ts"],
  moduleNameMapper: {
    "^rxjs(/operators$)?$":
      "<rootDir>/node_modules/rxjs/dist/bundles/rxjs.umd.js",
    tslib: "<rootDir>/node_modules/tslib/tslib.es6.mjs",
  },

  // @dotenv-run/jest-angular transformer
  transform: {
    "^.+\\.(ts)$": [
      "@dotenv-run/jest-angular",
      {
        useESM: true,
      },
    ],
  },
};