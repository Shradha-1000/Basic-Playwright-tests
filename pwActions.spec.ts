import{test,Locator,expect} from "@playwright/test"

test("Text Box",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    const textBox: Locator = page.locator('input#name');

    await expect(textBox).toBeVisible();
    await expect(textBox).toBeEnabled();

    await textBox.fill('shradha');

    const enteredValue: string = await textBox.inputValue();
    expect(enteredValue).toBe('shradha');

    //const maxlenEnterable: string | null = await textBox.getAttribute('maxlength'); or
    const maxlenEnterable: any= await textBox.getAttribute('maxlength');
    expect(maxlenEnterable).toBe('15');

    await page.waitForTimeout(3000);
})

test("Radio Buttons",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const radioButton:Locator = page.locator('input#male');
    await expect(radioButton).toBeVisible();
    await expect(radioButton).toBeEnabled();
    expect (await radioButton.isChecked()).toBe(false);

    await radioButton.check();
    await expect(radioButton).toBeChecked();


    await page.waitForTimeout(3000);
})

test.only("Checkboxes",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const checkboxes:Locator = page.locator('input#sunday');
    await expect(checkboxes).toBeVisible();
    await expect(checkboxes).toBeEnabled();
    expect (await checkboxes.isChecked()).toBe(false);

    await checkboxes.check();
    await expect(checkboxes).toBeChecked();

    await page.waitForTimeout(3000);
    //check all the checkboxes using map

    const allcheckbox: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const checkboxLocators: Locator[] = allcheckbox.map(index => page.getByLabel(index));
    //allcheckbox array ninchi, it will take values by index, then ade value get bylabel lo petti iterate avtadi.
    for(const checkbox of checkboxLocators)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        //Each await checkbox.check() ensures that specific checkbox is checked.
    }
    
    for(const checkbox of checkboxLocators.slice(-3))//uncheck last 3 checkboxes, if is it +ve, uncclecks 1st 3 elements
    {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();

    }

    //toggle checkboxes

    for(const checkbox of checkboxLocators)
    {
        if(await checkbox.isChecked())
        {
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
        }
        else
        {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
      
    }
// randomly check checkboxes
       const indices:number[] = [4,5,6];

       for(const i of indices)
       {
        await checkboxLocators[i].check();
       }

// check the checkbox only which is mentioned

const givenDay: string = 'Sunday';

for(const entered of allcheckbox)
{
    if(entered.toLowerCase() === givenDay.toLowerCase())
    {
       const checkval: Locator = page.getByLabel(entered);
       await checkval.check();

      }

}

    await page.waitForTimeout(3000);
})