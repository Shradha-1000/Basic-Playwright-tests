import { test, expect, Locator } from '@playwright/test';

test('Dealing with Static table', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const table:Locator = page.locator('table[name="BookTable"]>tbody');
  await expect(table).toBeVisible();

//count no of rows

  //const rows:Locator = page.locator('table[name="BookTable"]>tbody>tr'); or
  const rows:Locator = table.locator('tr');
  const rcount:number = await rows.count();

  expect(rcount).toBe(7);

//count no of columns
  //const data:Locator = page.locator('table[name="BookTable"]>tbody>tr:nth-child(1)'); for for loop
  const cols:Locator = rows.locator('th');
  const ccount:number = await cols.count();
  
  expect(ccount).toBe(4);

//get 2nd row texts
const srowcells:string = await rows.nth(1).innerText();
console.log(srowcells);
  //or

const sndrowcells:Locator = rows.nth(1).locator('td');  
const sndrowtexts: string[] = await sndrowcells.allInnerTexts();
console.log(sndrowtexts); // will give in array format

for(let text of sndrowtexts)
{
    console.log(text);
}

//get all table data from the table w/o header

    const allRowsData:Locator[] = await rows.all();

    for(let row of allRowsData.slice(1))
    {
      const allData = rows.locator("td").allInnerTexts();
    }


//get only muskesh's books
    

    const mukeshsbooks:string[] = [];
    const allRowsData:Locator[] = await rows.all();

    for(let row of allRowsData.slice(1))
    {
        const cells =await rows.locator("td").allInnerTexts();
        const author= cells[1];
        const book = cells[0];

        if(author === 'Mukesh')
        {
          console.log(book);
          mukeshsbooks.push(book);
        }
    }
  
expect(mukeshsbooks).toHaveLength(2);


//get total price of the books available

let totalprice:number=0;
for(let row of allRowsData.slice(1))
    {
    const cells =await rows.locator("td").allInnerTexts();
    const price = cells[3]; //but this is string so we convert 

    totalprice = totalprice+ parseInt(price);

    }
    console.log(totalprice);

});
