const {test, expect} = require('@playwright/test');
 
 
//keeping browser as fixer here
test('Login automation',async({browser})=>
{
    const context = await browser.newContext();
    //new page
    const page = await context.newPage();
    //method to open the given url
    await page.goto("http://167.235.49.72:5500/");
    await page.locator("#email").fill("sharanya23@gmail.com");
    await page.locator("#password").fill("Testing@123");
    await page.locator("#login").click();
 
    await page.locator(".side_user").click();
    await page.locator(".MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-sizeSmall.dropdownSelect.css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root").click();
    await page.locator("xpath=/html/body/div[2]/div[3]/ul/li[1]/span[1]").click();
    await page.locator("body").click();
    await page.locator("xpath=//div[@id='mui-component-select-role']").click();
    await page.locator("xpath=//input[@type='checkbox' and @data-indeterminate='false']").click();
    

    await page.screenshot({ path: 're.png'});
   
   
    //screenshot
    //await page.screenshot({ path: 're.png'});
    await page.pause();
    await context.close();
});