class RegistrationPage{
    constructor(page){
        this.page=page;
        this.firstname=this.page.locator('input[data-testid*="First Name"]');
        this.lastname=this.page.locator('xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[2]/div/input');
        this.countrycode=this.page.locator('[data-testid="Phone number:phone-input:country-code"]');
        this.phonenumber=this.page.locator('[aria-label="Enter a number"]');
        this.emailid=this.page.locator("xpath=/html/body/app-root/div/div[1]/div/main/div/div/div[2]/div[1]/div[2]/div/article/div/li/form/div[1]/div[2]/div/fieldset/div/div/div/div/fieldset/div/div/div/div[1]/div[4]/div/input");
        this.country=this.page.locator('[data-testid="Country :select:control"]');
        this.state=this.page.locator('select[data-testid*="State :select:control"]', { visible: true });
        this.address=this.page.locator('[data-testid="Address Line 1:input:control"]');
        this.address1=this.page.locator('[data-testid="Address Line 2:input:control"]');
        this.city=this.page.locator('[data-testid="City/Town:input:control"]');
        //this.state=this.page.getByLabel('State ');
        this.zipcode=this.page.locator('[data-testid="Zip Code:input:control"]');
        this.submitButton = this.page.locator('.sc-bqWxrE.fKpSOq');
    }
 
    async userdetails(countrycode,phonenumber,country,address,address1,city,state,zipcode,firstname,lastname,emailid){
        await this.firstname.fill(firstname,toString);
        await this.lastname.fill(lastname,toString);
        await this.countrycode.selectOption(countrycode);
        await this.phonenumber.fill(phonenumber,toString);
        await this.emailid.fill(emailid,toString);
        await this.country.selectOption(country);
        await this.state.selectOption(state);
        await this.address.fill(address,toString);
        await this.address1.fill(address1,toString);
        await this.city.fill(city,toString);
        await this.zipcode.fill(zipcode,toString);
        await this.submitButton.click();
 
    }
  
}
 
module.exports = { RegistrationPage }