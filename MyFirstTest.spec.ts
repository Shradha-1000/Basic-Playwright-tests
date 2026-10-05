import {test,expect} from '@playwright/test'

test("Verify login button - Amazonn", async ({page})=> {

await page.goto('https://www.amazon.com/');

await expect(page.locator("#nav-logo")).toBeVisible();

});                                                          