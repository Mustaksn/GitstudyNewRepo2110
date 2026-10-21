const{test,expect}=require('playwright/test');

test('Invalid Login', async function({page}){

  //navigate to the URL
//locators are used to identify elements on the page. Here, we are using locators to find the username and password input fields and the sign-in button.
  const username=page.locator("#username");
  const password=page.locator("#password");
  const signInButton=page.locator("[name = 'signin']");

//navigate to the login page of Rahul Shetty Academy
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

  //log the title of the page to the console
  console.log(await page.title());

  //assert that the title of the page is "LoginPage Practise | Rahul Shetty Academy"
  expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

  //fill the username field with the value "rahulshettyacademy"
  await username.fill("rahulshettyacademy");

  //fill the password field with the value "Learning"
  await password.fill("Learning");

  //click on the sign in button
  await signInButton.click();

  //this will extract the text content of the element that has a style attribute containing 'block' and log it to the console.
  console.log(await page.locator("[style*='block']").textContent());

});



test('valid Login', async function({page}){

 
  const username=page.locator("#username");
  const password=page.locator("#password");
  const signInButton=page.locator("[name = 'signin']");
  const dropdown = await page.locator("select.form-control");
  const radiobutton = await page.locator(".radiotextsty").last();
  const checkbox = await page.locator("#terms");
  const alertmessage = page.locator("#okayBtn");
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


  console.log(await page.title());

  expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

  await username.fill("rahulshettyacademy");

  await password.fill("Learning@830$3mK2");

  dropdown.selectOption("consult");

  await radiobutton.click();

  await alertmessage.click();

  await checkbox.click();

  console.log(await page.locator("#terms").isChecked());


  await signInButton.click();

  console.log(await page.locator('[class="card-body"] a').last().textContent());
  console.log(await page.locator('[class="card-body"] a').allTextContents());

  //expect(await page.locator('[class="card-body"] a').last().textContent()).toEqual("Blackberry");




});