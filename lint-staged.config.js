module.exports = {
  // check all typescript files
  "**/*.(ts|tsx)": () => "npx tsc --noEmit",

  // lint and format typescript
  "**/*.(ts|js)?(x)": filenames => [
    `npx eslint --fix ${filenames.join(" ")}`,
    `npx prettier --write ${filenames.join(" ")}`,
  ],

  // format markdown and json
  "**/*.(md|json)": filenames => `npx prettier --write ${filenames.join(" ")}`,
};
