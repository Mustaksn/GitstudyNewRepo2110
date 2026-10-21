const{test,expect}=require('@playwright/test');

test("Assertions", async function({page}){

await page.goto("https://www.demoblaze.com");

await expect(page).toHaveURL("https://www.demoblaze.com");

await expect(page).toHaveTitle("STORE");


}
)