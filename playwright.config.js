// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */

//here the config is defined for the playwright test runner. It specifies the test directory and the browser to be used for testing.
const config = ({
  testDir: './tests',
 

use:   {
  browserName: 'chromium',
  headless: false,
  },
  reporter:'html',
});

// Export the configuration object for use by Playwright
module.exports = config;

