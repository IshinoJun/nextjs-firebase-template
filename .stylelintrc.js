module.exports = {
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-config-standard",
    "stylelint-config-recess-order",
  ],
  plugins: ["stylelint-scss", "stylelint-order"],
  ignoreFiles: ["**/node_modules/**"],
  rules: {
    "string-quotes": "single",
    "at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["include", "mixin", "function", "return"] },
    ],
  },
};
