const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId:'cw37mb',
  video: true, //for screen recored project
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/report",
    charts: true,
    reportPageTitle: "OrangeHRM Demo Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    testIsolation: false,
  },
});
