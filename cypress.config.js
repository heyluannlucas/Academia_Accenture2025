const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature", 
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://sampleapp.tricentis.com/101/",
    viewportWidth: 1920,
    viewportHeight: 1080,

    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on('file:preprocessor', cucumber());
    },
  },

  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports/json",
    overwrite: false,
    html: false,
    json: true
  }
    
});
