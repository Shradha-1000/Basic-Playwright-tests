import{test, Locator, expect} from "@playwright/test"

test("Jquery Datepicker", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    
    page.locator('#datepicker').fill('06/06/2026');
    
    const eMonth = 'November';
    const eYear = '2026';
    const eDate = '14';
    
    while(true)
    {
      const mentionedMonth : string = await page.locator('.ui-datepicker-month').innerText();
      const mentionedYear :string = await page.locator('.ui-datepicker-year').innerText();

      if(mentionedMonth === eMonth && mentionedYear === eYear)
      {
        break;
      }
      //future date
      await page.locator('a[title="Next"]').click();
    }

     const datesLoc: Locator[]= await page.locator('.ui-datepicker-calendar td').all();
    
     for(const date of datesLoc)
     {
        const extracteddate = await date.innerText();
        if(eDate===extracteddate)
        {
           await date.click();
           await page.waitForTimeout(2000);
        }
     }



});