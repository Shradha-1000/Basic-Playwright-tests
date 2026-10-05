import{test, Locator, expect} from "@playwright/test"

test("single select dropdown", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    //const dd: string[] = await page.locator('select#country').selectOption('India'); visible text
    //const dd: string[] = await page.locator('select#country').selectOption({value:'UK'}); //value
    // const dd: string[] = await page.locator('select#country').selectOption({label:'China'}); // label
    const dd: string[] = await page.locator('select#country').selectOption({index:3}); // index

// to check count of dropdown options

        const ddList:Locator = page.locator('#country>option');
        const lcount:number = await ddList.count();
        console.log(lcount);
        expect(lcount).toBe(10);

    //check if an option is present in the dropdown or not
    
        const optionsText: string[] = (await ddList.allTextContents()).map(index => index.trim());
        console.log(optionsText);
         
        expect(optionsText).toContain('Japan');

    //printing options from the dropdown as strings n not in array 
    
        for(const options of optionsText)
        {
            console.log(options);
        }

        await page.waitForTimeout(3000);
});


test.only('Multi select Dropdown', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  //4 ways to do it
  //await page.locator('#colors').selectOption(['Red', 'Blue']); //visible text
  //await page.locator('#colors').selectOption(['red', 'blue']); 
  //await page.locator('#colors').selectOption([{label:'Red'}, {label:'Blue'}]); 
  //await page.locator('#colors').selectOption([{index:1}, {index:3}]); 
  
// to check count of dropdown options(same as abovve)

//check if an option is present in the dropdown or not(same as abovve)

//printing options from the dropdown as strings n not in array (same as abovve)

//to check if it is sorted or not

const ddOptions:Locator = page.locator('#animals>option');

const textOptions: string[] = (await ddOptions.allTextContents()).map(index =>index.trim());

const ogOptions:string[] = [...textOptions];//spread smthg
const sortedOptions: string[] = [...textOptions].sort();//these are immutable, here if i chnag text optione it will be changed in the above var also, so we use spread

console.log(ogOptions);
console.log(sortedOptions);

expect(ogOptions).toEqual(sortedOptions);


//check duplicates

    const myset = new Set<string>();//dup not allowed
    const myarray:string[] = [];//dup allowed

    for(const texts of sortedOptions)
    {  //if myset already has that text, push into array or add in set
        if(myset.has(texts))
        {
            myarray.push(texts);
        }
        else
        {
            myset.add(texts);
        }
    }
    console.log(myarray);

    expect(myarray.length).toBe(0);// we can also add if condtions
    

});