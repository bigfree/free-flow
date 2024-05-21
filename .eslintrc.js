module.exports = {
  overrides: [
    {
      files: ["client/**/*.ts", "client/**/*.tsx"],
      // Importuje konfiguráciu pre klienta
      extends: ["./client/.eslintrc"],
    },
    {
      files: ["api/**/*.ts"],
      // Importuje konfiguráciu pre API
      extends: ["./api/.eslintrc"],
    },
  ],
};
