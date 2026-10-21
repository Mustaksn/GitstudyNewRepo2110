const{test, expect, chromium}=require('@playwright/test');
const { asyncWrapProviders } = require('node:async_hooks');

test('windows', async function(){

const browser = await chromium.launch();
const context = await browser.newContext();

const page1= await context.newPage();
page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const pagepromise = context.waitForEvent('page');
await page1.locator('a[href="http://www.orangehrm.com"]').click();

const page2 = await pagepromise;
await expect(page2).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM');





})



// // launch the browser
// const browser =  chromium.launch();
// const context =  await browser.newContext();

// const page = await context.newPage();
// page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

// const pagePromise = await context.waitForEvent(page);
