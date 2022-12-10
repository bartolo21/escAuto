const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8100/",
    viewportHeight: 1080,
    viewportWidth: 640,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
