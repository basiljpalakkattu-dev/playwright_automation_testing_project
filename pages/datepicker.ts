import { Page } from "@playwright/test";
export class Datepicker{

constructor(private page:Page){}

/** Selector for the date input element */
    dateInput = '[data-testid="date-input"]';

    /** Selector for displaying the selected date result */
    dateResult = '[data-testid="date-result"]';


    async selectdate(datestr:string){

        await this.page.locator(this.dateInput).fill(datestr);
        await this.page.locator(this.dateInput).press('Enter');
    }

}