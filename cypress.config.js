const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://www.saucedemo.com",
    env: {
      hideXHR: true
    },
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: "reports",
        html: true,
        json: false,
        overwrite: true
    },
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*.js",
    viewportWidth: 1440,
    viewportHeight: 900,
    video: false,
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
    }
  }
});