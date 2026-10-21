const {test,expect}=require('@playwright/test')

test('dialog test', async function({page}){


  await page.goto('https://practice.expandtesting.com/js-dialogs');

  // handling alert
  page.on('dialog', async dialog=>{
    await expect(dialog.message()).toContain('I am a Js Alert');

    await dialog.accept();

  })
  await page.locator('#js-alert').click();
  await expect(page.locator("//label[normalize-space()='Dialog Response:']")).toHaveText('Dialog Response:')

  await page.waitForTimeout(3000);

})