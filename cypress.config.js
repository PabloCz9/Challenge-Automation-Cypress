import { defineConfig } from 'cypress';


export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  reporter: 'mochawesome',

  reporterOptions: {
    reportDir: 'reports',
    reportFilename: 'reporteHTML',
  },
  e2e: {
    specPattern: ['cypress/e2e/**/*.js'],
    baseUrl: 'https://site-e2e-git-develop-nyla.vercel.app/products/qa',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
