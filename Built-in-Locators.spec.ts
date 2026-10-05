import{test, Locator, expect} from "@playwright/test"

test("getByAltText Locator", async ({page})=>{

    page.goto("https://demo.nopcommerce.com/");

    const altText:Locator =page.getByAltText('Picture of Build your own computer');
    await expect(altText).toBeVisible();
    await altText.click();
    expect(page.getByText("Build your own computer")).toBe('Build your own computer');
});

test("getByText - Locator", async ({page}) => {
    
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    //const text:Locator = page.getByText("Test Login");//full string
    //const text:Locator = page.getByText("Test");//sub string
    const text:Locator = page.getByText("/test+\s+Login/i");//regular Expression

    await expect(text).toBeVisible();

})

test("getByRole - Locator", async ({page}) => {
    
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    
    const button:Locator = page.getByRole("button", {name: "Submit"});
    await button.click();
    expect(page.getByText('Your username is invalid!')).toBeVisible();
    

})

test("getByLabel - Locator", async ({page}) => {
    
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    
    await page.getByLabel("username").fill("student");
    await page.getByLabel("Password").fill("Password123");
    const submitB: Locator = page.getByRole("button",{name: "Submit"});
    await submitB.click();
    
})

test("getByplaceholder - Locator", async ({page}) => {
    
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    // page.getByPlaceholder() - elements w/ placeholder w/o any label -> search box
})

test.only("getByTitle - Locator", async ({page}) => {
    
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    
    page.getByTitle('Test Login | Practice Test Automation');
    
})

test.only("getByTitle - Locator", async ({page}) => {
    
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    //getBytestId() - it can be customizable through config file
    
})



