import { Page } from "@playwright/test";

export class Dropdownclass {
  // Fix: change 'Page' to 'page' in the constructor parameter
  constructor(private page: Page) { }
   
  // locators
  standardSelect = '[data-testid="standard-select"]';
  standardResult = '[data-testid="standard-select-result"]';

  multiSelect = '[data-testid="multi-select"]';
  multiResult = '[data-testid="multi-select-result"]';

  customToggle = '[data-testid="custom-dropdown-toggle"]';
  customOptionBeta = '[data-testid="custom-option-beta"]';
  customResult = '[data-testid="custom-dropdown-result"]';

  dynamicSelect = '[data-testid="dynamic-select"]';
  dynamicResult = '[data-testid="dynamic-select-result"]';


  async dropDown(val: string) {
      await this.page.locator(this.standardSelect).selectOption(val);
  }

  async multiselectop(values: string[]) {
      await this.page.locator(this.multiSelect).selectOption(values);
  }

  async customDiv() {
      await this.page.locator(this.customToggle).click();
      await this.page.locator(this.customOptionBeta).click();
  }

  async populatedMethod(valu: string) {
      await this.page.locator(this.dynamicSelect).selectOption(valu);
      await this.page.pause();
  }
}