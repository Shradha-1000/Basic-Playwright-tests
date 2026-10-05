import {test,expect,Locator} from '@playwright/test'

test("Verify Frames", async ({page})=> {

await page.goto('https://ui.vision/demo/webtest/frames/');

const frames = page.frames();
console.log(frames.length);
//approach - 1
const frame = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1'}); //eitherby name or url

if(frame)
{
   frame.locator('input[name="mytext1"]').fill("shradha");
}
else
{
    console.log("frame not available");
}

//approach - 2
const inputBox = page.frameLocator('[src="frame_1.html"]').locator('input[name="mytext1"]');
await inputBox.fill('shardha');

});     

test("Verify child Frames", async ({page})=> {

await page.goto('https://ui.vision/demo/webtest/frames/');

//approach - 1
const frame3 = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3'}); //either by name or url

if(frame3)
{
   await frame3.locator('input[name="mytext3"]').fill("shradha");
   const childframe = frame3.childFrames();
   console.log(childframe.length);
   await childframe[0].getByLabel('Hi, I am the UI.Vision IDE').check();
   await page.waitForTimeout(3000);
}
else
{
    console.log("frame not available");
}

});     