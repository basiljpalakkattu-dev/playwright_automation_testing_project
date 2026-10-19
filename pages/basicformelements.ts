import { Page } from "@playwright/test";
export class basicform{


constructor ( private page:Page){}

   //locators

    usernameInput = '[data-testid="text-input"]';
    passwordInput = '[data-testid="password-input"]';
    emailInput = '[data-testid="email-input"]';
    phoneInput = '[data-testid="phone-input"]';
    bioTextarea = '[data-testid="textarea-input"]';
    submitButton = '[data-testid="form-submit"]';
    resetButton = '[data-testid="form-reset"]';
    formResult = '[data-testid="form-result"]';


    async basicf(name:string,pass:string,email:string,mob:string,bio:string){

        await this.page.locator(this.usernameInput).fill(name);
         await this.page.locator(this.passwordInput).fill(pass);
        await this.page.locator(this.emailInput).fill(email);
         await this.page.locator(this.phoneInput).fill(mob);
        await this.page.locator(this.bioTextarea).fill(bio);

         

    }

    async submitbtn(){

        await this.page.locator(this.submitButton).click();
    }
    async resetbtn(){

        await this.page.locator(this.resetButton).click();
    }

    

}

