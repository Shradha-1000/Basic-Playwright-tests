import {test,expect,Locator} from '@playwright/test'

test("Verify Alert", async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/');

//#confirmBtn
page.on('dialog', dialog => {

    console.log(dialog.type());
    //console.log("Default value:",dialog.defaultValue());
    console.log("message in alert", dialog.message());
    dialog.accept();

});

await page.locator('#alertBtn').click();

await page.waitForTimeout(2000);
});          


test("Verify Confirmation Box", async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/');

//#confirmBtn
page.on('dialog', dialog => {

    console.log(dialog.type());
    //console.log("Default value:",dialog.defaultValue());
    console.log("message in alert", dialog.message());
    dialog.accept();
    const message = page.locator('#demo');
    expect(message).toHaveText('You pressed OK!');

});

await page.locator('#confirmBtn').click();

await page.waitForTimeout(2000);

});    


test.only("Verify Prompt Box", async ({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/');

//#confirmBtn
page.on('dialog', dialog => {

    console.log(dialog.type());
    console.log("Default value:",dialog.defaultValue());
    console.log("message in alert", dialog.message());
    dialog.accept('shradha');
    const message = page.locator('#demo');
    expect(message).toHaveText('Hello shradha! How are you today?');

});

await page.locator('#promptBtn').click();

await page.waitForTimeout(2000);

});    