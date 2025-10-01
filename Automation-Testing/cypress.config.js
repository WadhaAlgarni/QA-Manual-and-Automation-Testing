const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId:'cw37mb',
  video: true, //for screen recored project
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: false,
  },
});
