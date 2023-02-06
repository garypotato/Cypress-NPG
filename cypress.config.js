const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://npdata.net.au',
    testIsolation: false,
    defaultCommandTimeout: 50000,
  },
});
