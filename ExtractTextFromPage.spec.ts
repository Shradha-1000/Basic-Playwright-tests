import{test, Locator, expect} from "@playwright/test"

test("all()", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    const option:Locator = page.locator('//select[@id="country"]/option');
    
    const locatorArrays:Locator[] = await option.all();

    for(const loc of locatorArrays)
    {
        //console.log(loc); this will return direct loctors -> locator('//select[@id="country"]/option').first()
        console.log(await loc.innerText());
    }

    for(let i in locatorArrays)
    {
       console.log(await locatorArrays[i].innerText());
    }
});