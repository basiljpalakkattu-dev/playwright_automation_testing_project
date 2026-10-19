import { Page } from "@playwright/test";
export class  resizelementpage{

    constructor (private page:Page){}

//  Locator for the resizable box element
    resizableBox = '[data-testid="resizable-box"]'


    async getboxdimensions(){

        return await this.page.locator(this.resizableBox).boundingBox();
    }

    async resizebox(increaseWidth : number , increaseHeight : number){

        const box = await this.getboxdimensions();

        if (box){

            const handleX = box.x + box.width-2;
            const handley = box.y + box.height-2;

            await this.page.mouse.move(handleX,handley);
            await this.page.mouse.down();
            await this.page.mouse.move(handleX + increaseWidth, handley + increaseHeight);
            await this.page.mouse.up();
            await this.page.pause();

        }
    }


}

