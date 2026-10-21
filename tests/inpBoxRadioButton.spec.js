const{test,expect}=require('@playwright/test');

test("Input box and radio button", async function({page}){

await page.goto("https://www.testkru.com/Elements/Checkboxes");

await page.locator("#firstSelect1").check();
await expect(await page.locator("#firstSelect1")).toBeChecked();
await expect(await page.locator("#firstSelect1").isChecked()).toBeTruthy();
await page.waitForTimeout(5000);
await page.locator("#firstSelect1").uncheck();


await page.locator("#sidebarTextFields").click();
// await expect(await page.locator("#firstName")).toBeEmpty();
await page.waitForTimeout(5000);
await page.locator("#firstName").nth(0).pressSequentially("Mustak",{delay:100});
await expect(await page.locator("#sidebarTextFields")).toHaveText("Mustak");





})