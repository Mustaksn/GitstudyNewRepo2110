const{test,expect}=require('playwright/test');

test('autosuggest dropdown', async function({page}){

  await page.goto("https://assertqa.com/practice/dropdowns");
  await page.getByPlaceholder("Start typing a city").fill('Berlin');

  const options = await page.$$("input[placeholder='Start typing a city']");
  for(const option of options){

  const value = await option.textContent();
if(value==='Berlin'){

  await option.click();



}}

  await page.waitForTimeout(3000);




})