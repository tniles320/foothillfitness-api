/* eslint-disable linebreak-style */
/* eslint-disable quote-props */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": ["error", "windows"],
    indent: ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "new-cap": ["error", { capIsNew: false }],
    "space-before-function-paren": ["error", "always"],
  },
};
