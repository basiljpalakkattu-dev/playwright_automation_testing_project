import { Page } from "@playwright/test";
import { testdata } from "../TestData/testData";
export class inputfield{


    constructor(private page:Page){}

      nameinpufield ='#name';
      emailinputField ='#email';

async formEnterAction(){

    await this.page.locator(this.nameinpufield).fill(testdata.name);
    await this.page.locator(this.nameinpufield).fill(testdata.email);
}
    

}