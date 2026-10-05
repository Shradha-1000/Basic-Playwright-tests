import {test,expect, Locator} from '@playwright/test'

test("Verify login button - Amazonn", async ({page})=> {

await page.goto('https://practice.expandtesting.com/dynamic-table');

const table:Locator = page.locator('table.table tbody');
await expect(table).toBeVisible();

//select rows and count

const rows: Locator[] = await table.locator('tr').all();
const rcount :number= rows.length;//length is a propertu not a function

let cpuLoad:string = '';
for(const row of rows)
{
    const processNames:string = await row.locator('td').nth(0).innerText();
    if(processNames === 'Chrome')
    {
       cpuLoad=  await row.locator('td:has-Text("%")').innerText();
       console.log(cpuLoad);
    }
}

let yellowBoxValue: String = await page.locator('#chrome-cpu').innerText();
if(yellowBoxValue.includes(cpuLoad))
{
   console.log("they are equal");
}
else
{
 console.log("they are not equal");
}

});                                                          


/*

locate table
loacte rows
find count
expect/assert count & table
locate row - 1(to locate process name)
if process= chrome
in the same row, search for substring which has %
capture value

locate yellowbox value
compare 2 strings

*/
