import { Page } from "@playwright/test";

export class formfileds2{

  phonenumber;

  constructor(private page:Page){

   this.phonenumber=this.page.getByPlaceholder('Enter Phone');

  }

  async formfill(){
 

    await this.phonenumber.fill('9400961261');

  }

}