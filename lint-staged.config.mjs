// lint-staged.config.mjs

export default {
  // check all TypeScript files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",

  // lint and format TypeScript / JavaScript
  "**/*.(ts|js)?(x)": filenames => [
    `npx eslint --fix ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
  ],

  // format markdown and json
  "**/*.(md|json)": filenames => `npx prettier --write ${filenames.join(" ")}`,

  // run tests
  "**/*.test.(ts|js)?(x)": filenames => `npm run test:staged ${filenames.join(" ")}`,
};
