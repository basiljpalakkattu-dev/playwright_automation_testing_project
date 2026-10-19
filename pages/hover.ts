import { Page } from "@playwright/test";
export class hover{

    constructor(private page:Page){}

    // Hover Trigger
    hoverTrigger = '[data-testid="hover-menu-trigger"]';

    // Submenu & Submenu Items / Expected Result
    hoverSubmenu = '[data-testid="hover-submenu"]';


    async hoverfunction(){

         await this.page.locator(this.hoverTrigger).hover();

    }
}