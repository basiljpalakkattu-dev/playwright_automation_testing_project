import { Page } from "@playwright/test";

export class checkandradiobutton{

    constructor (private page:Page){}

    // locators

    // locators  of all select
selectAllCheckbox = '[data-testid="select-all"]';
// locators of radiobutton2
 radio2 = '[data-testid="radio-2"]';
//  locators of checkbox
revealCheckbox = '[data-testid="reveal-checkbox"]';

async selectalltoogle(){

    await this.page.locator(this.selectAllCheckbox).check();
   

}

async radiobuttontwo (){

    await this.page.locator(this.radio2).check();
}

async revelcheckbox(){

    await this.page.locator(this.revealCheckbox).check();
}
}