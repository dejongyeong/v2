module.exports = {
  // check all typescript files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",

  // lint and format typescript and run tests
  "**/*.(ts|js)?(x)": filenames => [
    `npx eslint --fix ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
  ],

  // format markdown and json
  "**/*.(md|json)": filenames => `npx prettier --write ${filenames.join(" ")}`,

  // run tests
  "**/*.test.(ts|js)?(x)": filenames => `npm run test:staged ${filenames.join(" ")}`,
};
