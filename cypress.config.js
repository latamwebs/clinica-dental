import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'r3sdak',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
