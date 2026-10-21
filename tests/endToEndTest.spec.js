const{test,expect}=require("@playwright/test");

test('End to end testing ', async function({page}){ 

  //navigate to the URL
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator(".btn1").click();
  await page.locator("#firstName").fill("Mustak");
  await page.locator("#lastName").fill("Ahmed");
  await page.locator("#userEmail").fill("mak@gmail.com");
  await page.locator("#userMobile").fill("1234567890");
  const customSelect = await page.locator(".custom-select");
  await customSelect.selectOption("Engineer");
  await page.locator("[value='Male']").click();
  await page.locator("#userPassword").fill("Mustak@123");
  await page.locator("#confirmPassword").fill("Mustak@123");
  await page.locator("[type='checkbox']").click();
  await page.locator("[value='Register']").click();
  const successmessage = await page.locator(".headcolor").textContent();
  await expect(successmessage).toContain("Account Created Successfully");
  await page.locator("[routerlink='/auth']").click();
})


  test.only("Login to the application and complete the order flow", async function({page}){
    const products = page.locator(".card-body");
    const productName = "ADIDAS ORIGINAL";
  await page.goto('https://rahulshettyacademy.com/client');
  await page.locator("#userEmail").fill("mak222@gmail.com");
  await page.locator("#userPassword").fill("Mustak@123");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();


  const titles= await page.$$locator(".card-body b").allTextContents();
  console.log(titles);

  for(const product of titles){
    if(await product.locator("b").textContent() === productName){
      await product.locator("text= Add To Cart").click();
      break;
  
    }
  
    
  }
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();
  const cartProduct = await page.locator(".infoWrap h3").isVisible();
  expect(cartProduct).toBeTruthy();

  await page.locator("[type='button']").last().click();

  await page.locator("[placeholder*='Select Country']").type("ind",{delay:100});
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
  for(let i=0; i<optionsCount; ++i){
    const text = await dropdown.locator("button").nth(i).textContent();
    if(text === " India"){
      await dropdown.locator("button").nth(i).click();
      break;
    }
  }

  await page.locator(".action__submit").click();
  await page.locator(".hero-primary").waitFor();
  const confirmMessage = await page.locator(".hero-primary").textContent();
  expect(confirmMessage).toBe(" Thankyou for the order. ");
  console.log(confirmMessage);

  const orderId= await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderId);
  await page.locator("[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();

 


  })

  




