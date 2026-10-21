const{test,expect}= require('@playwright/test');

test.only('Frames', async function({page}){

await page.goto('https://ui.vision/demo/webtest/frames/');

// const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
// await frame3.fill("[name='mytext3']",'Hello');

const frame3 = await page.frameLocator("frame[src='frame_3.html']").locator("[name='mytext3']")
frame3.fill('hello');


const childFrames=await frame3.childFrames();

await childFrames[0].locator("//*[@id='i5']/div[3]/div").check();
await page.waitForTimeout(5000);

})