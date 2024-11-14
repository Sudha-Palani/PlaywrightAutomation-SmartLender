//to manage the Products
const{test,expect}= require('@playwright/test');
const{addproduct} = require('../objectfoodtracz/addproduct');
 
test('product management', async({browser})=>
{
    const context = await browser.newContext();
    //new page
    const page = await context.newPage();
    const addproduct = new addproduct(page);
    const 


    //method to open the given url
    await page.goto("http://167.235.49.72:5500");
    await page.locator("#email").fill("paranjani@gmail.com");
    await page.locator("#password").fill("Ranju@2307");
    await page.locator("#login").click();
    await page.locator("span:has-text('product management')").click();
    await page.locator("a[href='/admin/product_manage']").click();
 
    

     
})