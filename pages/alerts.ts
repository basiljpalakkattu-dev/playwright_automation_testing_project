import { Page } from "@playwright/test";
export class alerts{

constructor (private Page:Page){}


// Alert Triggers (selectors for buttons on the page)
    alertBtn = '[data-testid="alert-btn"]';
    confirmBtn = '[data-testid="confirm-btn"]';
    promptBtn = '[data-testid="prompt-btn"]';

    // Alert Result Display (selector for the result text on the page)
    alertResult = '[data-testid="alert-result"]';


async showalerts(){

  await this.Page.once('dialog',dialog=>dialog.accept());
  await this.Page.locator(this.alertBtn).click();

}

async confirmalert(accept : boolean){


    await this.Page.once('dialog',dialog=>accept?  dialog.accept(): dialog.dismiss());
    await this.Page.locator(this.confirmBtn).click();
}


async prompalert(text:string){

    await this.Page.once('dialog',dialog=>dialog.accept(text));
    await this.Page.locator(this.promptBtn).click();


}
}