
import { test, expect, Locator } from '@playwright/test';

test('read all rows till the end', async ({ page }) => {

  await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html');


  let hasMorePages = true;

  while(hasMorePages)
  {

  const table:Locator = page.locator('table#example tbody');
  const rows  = await table.locator("tr").all();
  for(let row of rows)
  {
     const rowText:string = await row.innerText();
     console.log(rowText);
  }

   const nextButton: Locator = page.locator('button[ aria-label="Next"]');

   let nextButtonAttribute = await nextButton.getAttribute("class");
   if(nextButtonAttribute?.includes("disabled"))
   {
    hasMorePages = false;
   }
   else
   {
    await nextButton.click();
   }
}
});


test('filter and count rows', async ({ page }) => {

  await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html');

  const dropdown:Locator = page.locator('#dt-length-0');

  const options:Locator[] = await dropdown.locator('option').all();
 
  for(let option of options)
  {
   const attValue: string | null = await option.getAttribute('value');
   await dropdown.selectOption({value: attValue!});
   await page.waitForTimeout(2000);
   const rows:Locator[] = await page.locator('.display tbody tr').all();
   const length:number = rows.length;
   expect(length).toBe(Math.min(Number(attValue),57));
  }
  console.log("done");

  /*

                            or
  const options = dropdown.locator('option');

  const count:number = await options.count()
  for(let i = 0; i<count;i++)
  {
    await dropdown.selectOption({index:i});
    await page.waitForTimeout(2000);
  }
  */
});

//search for a text and verify

test.only('search text and verify', async ({ page }) => {

  await page.goto('https://datatables.net/examples/core/basic_init/zero_configuration.html');

  await page.locator('input[type="search"]').fill('Cara Stevens');
  
  const rows: Locator[] = await page.locator('table#example tbody tr').all();

  if(rows.length > 0 )
  {
     for(const row of rows)
  {
    const rowText = await row.innerText()
    if(rowText.includes('Cara Stevens'))
    {
       console.log("match found");
       break;
    }
  }
  }
  else
  {
    console.log("no match found");
  }
});