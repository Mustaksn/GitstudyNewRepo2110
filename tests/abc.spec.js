const {test,expect}=require('@playwright/test');
const { url } = require('node:inspector');

test('dialog test', async function({page}){


 const url= await page.goto('https://practice.expandtesting.com/js-dialogs');
  await expect(url).toBe('https://practice.expandtesting.com/js-dialogs');

  // handling alert
  page.on('dialog', async dialog=>{
    await expect(dialog.message()).toContain('I am a Js Alert');

    await dialog.accept();

  })
  await page.locator('#js-alert').click();
  await expect(page.locator("//label[normalize-space()='Dialog Response:']")).toHaveText('Dialog Response:')

  await page.waitForTimeout(3000);

})