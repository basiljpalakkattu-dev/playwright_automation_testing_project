import { Page } from "@playwright/test";
export class flakyrunning{

    constructor(private page:Page){ }

    //Locators
    // Flaky Button & Expected Result

    flakyBtn = '[data-testid="flaky-btn"]';
    flakyResult = '[data-testid="flaky-result"]';


    async flky(){

    await this.page.locator(this.flakyBtn).click();

    }
}

