import { Page } from "@playwright/test";
export class Iframe{

    constructor(private page:Page){}

       // IFrame Container
    iframeLocator = '[data-testid="practice-iframe"]';

    // Inside IFrame Input & Action Button
    iframeInput = '#iframe-input';
    iframeBtn = '#iframe-btn';

    // Inside IFrame Expected Result
    iframeResult = '#iframe-result';

    
  async framemethod(text:string){

    const frame=this.page.frameLocator(this.iframeLocator);
    await frame.locator(this.iframeInput).fill(text);
    await frame.locator(this.iframeBtn).click();


    
}
}
