class addproduct{
    constructor(page)
    {
        this.addProductButton = page.locator("button[class='product_add']");
        this.nameInput = page.locator(".MuiInputBase-root input[name='name']");
        this.categoryDropdown = page.locator("div[id='mui-component-select-categoryId']");
        this.categoryOption = page.locator("li[data-testid='category-Meats']");
        this.descriptionInput = page.locator("div[data-testid='description-input'] label");
        this.canBePurchasedCheckbox = page.getByLabel("Can be Purchased");
        this.canBeSoldCheckbox = page.getByLabel("Can be sold");
        this.unitOfMeasureDropdown = page.locator("div[id='mui-component-select-unitOfMeasure']");
        this.unitOption = page.locator("ul[class*='MuiList-padding MuiMenu-list'] li[data-value='1']");
        this.thresholdLimitInput = page.locator(".MuiInputBase-input[name='thresholdLimit']");
        this.costPriceInput = page.locator(".MuiInputBase-input[name='costPrice']");
        this.salesPriceInput = page.locator(".MuiInputBase-input[name='salesPrice']");
        this.addButton = page.getByRole("button", { name: 'ADD' });
        this.successMessage = page.getByText("Product successfully added");
        this.cancelButton = page.getByRole("button", { name: 'CANCEL' });
    }
   
    async addProduct() {
        await this.addProductButton.click();
      }
   
      async fillProductDetails(product) {
        await this.nameInput.fill(product.name);
        await this.categoryDropdown.click();
        await this.categoryOption.click();
        await this.descriptionInput.fill(product.description);
        await this.canBePurchasedCheckbox.click();
        await this.canBeSoldCheckbox.click();
        await this.unitOfMeasureDropdown.click();
        await this.unitOption.click();
        await this.thresholdLimitInput.fill(product.thresholdLimit);
        await this.costPriceInput.fill(product.costPrice);
        await this.salesPriceInput.fill(product.salesPrice);
      }
   
      async submitProduct() {
        await this.addButton.click();
      }
   
      async verifySuccessMessage() {
        return await this.successMessage.isVisible();
      }
   
      async cancel() {
        await this.cancelButton.click();
      }
}
module.exports={addproduct};
 