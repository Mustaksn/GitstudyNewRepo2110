const {test,expect}=require('@playwright/test');

test("checboxes", async function({page}){



await page.goto("https://www.testkru.com/Elements/Checkboxes");

const checboxLocators=["#firstSelect1", "#secondSelect2","#thirdSelect5"];

for(const Locator of checboxLocators)
  {
await page.locator(Locator).check();
}

for(const Locator of checboxLocators)
  {
    if(await page.locator(Locator).isChecked()){
    await page.locator(Locator).uncheck();
  }
}
  
  


await page.waitForTimeout(5000);
})