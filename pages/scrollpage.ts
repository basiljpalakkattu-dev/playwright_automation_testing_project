import { Page } from "@playwright/test";
export class scrollingpageview{


    constructor(private page:Page){}

    scrollTarget = '[data-testid="scroll-target"]';


    async scroll(){

        await this.page.locator(this.scrollTarget).scrollIntoViewIfNeeded();
    }
}