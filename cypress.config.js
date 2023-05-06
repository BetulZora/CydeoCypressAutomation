const { defineConfig } = require("cypress");


// this is a good place to define base URL define in e2e block
// do not forget the "," because e2e is a json object
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.cydeo.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
