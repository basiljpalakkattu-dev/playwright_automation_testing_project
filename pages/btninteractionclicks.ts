import { Page } from "@playwright/test";
export class btninteratcion{

    constructor (private page :Page){}

// locators 

//Locator of the single click button 
 singleClickBtn = '[data-testid="single-click-btn"]';
 singleClickResult = '[data-testid="single-click-result"]';

 //Locator of the db button
 doubleClickBtn = '[data-testid="double-click-btn"]';
 doubleClickResult = '[data-testid="double-click-result"]';


 rightClickBtn = '[data-testid="right-click-btn"]';
 rightClickResult = '[data-testid="right-click-result"]';


 async singleclick(){

    await this.page.locator(this.singleClickBtn).click();

 }

 async doubleclic(){

    await this.page.locator(this.doubleClickBtn).dblclick();
    
 }

 async righclick(){

    await this.page.locator(this.rightClickBtn).click({button:"right"});
    await this.page.pause();

 }
 

}