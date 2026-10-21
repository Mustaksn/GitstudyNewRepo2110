const{test, except} = require('@playwright/test');

test("Locating elements", async function({page}){

await page.goto("https://www.demoblaze.com/index.html");
// await page.locator("#userEmail").fill("mak222@gmail.com");
// await page.locator("#userPassword").fill("Mustak@123");
//  await page.locator("[value='Login']").click();

 await page.locator("#tbodyid h4 a").first().waitFor();
 
 const products = await page.$$("#tbodyid h4 a");
for(const product of products){
  const prodName = await product.textContent();
  console.log(prodName);

  if(prodName === "Samsung galaxy s6"){
    await product.click();
    break;
  }

}
await page.locator(".name").waitFor();
  await page.locator("[onclick='addToCart(1)']").click();
  await page.locator("#cartur").click();





})