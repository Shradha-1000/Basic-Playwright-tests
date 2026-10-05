import{test, Locator, expect} from "@playwright/test"

test("Relative xpath", async ({page}) =>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
        await page.locator("//input[@name = 'username']").fill("student");
        await page.locator("//input[@name='password']").fill("Password123");
        await page.locator("//button[@id='submit']").click();
        const successMsg: Locator = page.locator("//h1[text() = 'Logged In Successfully']");
        await expect(successMsg).toBeVisible();
})

test("Absolute xpath", async ({page}) =>{

   await page.goto("https://practicetestautomation.com/logged-in-successfully/");
        
       // const successMsg: Locator = page.locator("/html/body/div/div/section/div/div/article/div/h1[text() = 'Logged In Successfully']");
       // const successMsg: Locator = page.locator("/html/body/div/div/section/div/div/article/div/h1"); 
        //or somemtime it gets confused with direct absolute paths, so we prefix it with xpath = or css =
        const successMsg: Locator = page.locator("xpath=/html/body/div/div/section/div/div/article/div/h1");

        await expect(successMsg).toBeVisible();
})

/*
//cheeck how many products available when searched for hair
test.only("product searching - bebodywise", async ({page}) =>{

    await page.goto("https://bebodywise.com/search");
        
    //search the product, assert no.of products, cclick on every other product listed(locate & store elements, 
    // click on add to cart
    
    const countprod: Locator = page.locator("//div[text() = '10 results found']");
     await expect(countprod).toHaveText('10 results found');

     const productList: Locator = page.locator("//a[contains(@href, 'hair')]");

     const prodCount: number = await productList.count();

      for (let i = 0;i<prodCount;i++)
      {
        const button:Locator = page.getByRole("button", {name : "ADD"});
        button.click();                                                                                                                  o
        await expect (page.getByTestId('quantity-selector-decrement-btn')).toBeVisible();
      }
})

dynamic xpaths - and/or
textContext - gets texts from dom(only one)
allTextCOntext - gets a list of elements
CSS - absolute(>) & Relative(#,.)
Xpath Axis
 




*/

