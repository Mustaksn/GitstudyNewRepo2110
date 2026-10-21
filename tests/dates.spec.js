const{test,expect}=require('@playwright/test');

test('Dates', async function({page}){

await page.goto("https://testautomationpractice.blogspot.com/");

const Year = 2027;
const month = 'June';
const date = 25

await page.locator('#datepicker').click();
while(true){
const currentMonth = await page.locator('.ui-datepicker-month').textContent();
const currentYear = await page.locator('.ui-datepicker-year').textContent();

if(currentMonth==month && currentYear == Year){

  break;
}
await page.locator("//a[@title='Next']").click();


}

const dates = await page.$$("//a[@class = 'ui-state-default']");
for(const dt of dates){

if(dt.textContent() == date){
await dt.click();

}

}

await page.waitForTimeout(5000)


})