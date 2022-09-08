const { defineConfig } = require("cypress");
const Mochawesome = require("mochawesome");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  chromeWebSecurity: false,
  videoUploadOnPasses: false,

  reporter: "mochawesome",
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true
  }

});
