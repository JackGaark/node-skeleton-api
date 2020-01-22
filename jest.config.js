module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage",
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  verbose: true,
  coveragePathIgnorePatterns: ["src/shared/configurations", "src/server.ts"]
};
