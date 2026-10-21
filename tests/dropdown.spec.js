const{test,expect}=require('@playwright/test');

test("Dropdown", async function({page}){


  await page.goto("https://www.testkru.com/Elements/Dropdowns");

  // to select an option from dropdown we can use selectOption() method. It accepts value, label and index as parameter.
  await page.locator("#singleSelect").selectOption({value: 'java'}); // select option by value
  await page.locator("#singleSelect").selectOption({label: 'Python'});// select option by label
  await page.locator("#singleSelect").selectOption({index: 3}); // select option by index 
  await page.locator("#singleSelect").selectOption('Java'); // select option by passing the value as string




  await page.waitForTimeout(5000);



})

test("dropdown options count", async function({page}){


  await page.goto("https://www.testkru.com/Elements/Dropdowns");

  // to select an option from dropdown we can use selectOption() method. It accepts value, label and index as parameter.
  await page.locator("#singleSelect").selectOption({value: 'java'}); // select option by value
  await page.locator("#singleSelect").selectOption({label: 'Python'});// select option by label
  await page.locator("#singleSelect").selectOption({index: 3}); // select option by index 
  await page.locator("#singleSelect").selectOption('Java'); // select option by passing the value as string


//to verify the options i the dropdown.

const options = await page.locator("#singleSelect option");
let status = false;
for(const option of options){

  const optionText = await option.textContent();
  console.log(optionText);
  if(optionText==="Python"){

    status= true;
    break;
  }

  
}
})



test.only("dropdown options count values", async function({page}){


  await page.goto("https://www.testkru.com/Elements/Dropdowns");


//to verify the options count in the dropdown.

const options = await page.locator("#singleSelect option");
await 
await expect(options).toHaveCount(6);
// for(const option of options){

//   const optionText = await option.textContent();
//   console.log(optionText);
//   if(optionText==="Python"){

//     status= true;
//     break;
//   }

  
// }
})