import {test,expect,Locator} from '@playwright/test'

test("Bootstrap Dropdown", async ({page})=> {

    await page.goto('https://www.flipkart.com/');
    
    page.locator('(//input[@class="nw1UBF v1zwn26"])[1]').fill('smart');

    const ddOptions: Locator = page.locator('ul>li');
    await page.waitForTimeout(3000);
    const count: number = await ddOptions.count();
    console.log("count of ddoptions",count);
    console.log("all dd opyions", await ddOptions.allTextContents());
    
console.log(await ddOptions.nth(5).innerText());


for(let i=0;i<count;i++)
{
   console.log(await ddOptions.nth(i).textContent());
}

});   