import { Page } from "@playwright/test";

export class MultipleWindows {
    constructor(private page: Page) {}

    // Locator for the link that opens the new tab
    link = '//*[@id="Attribution1"]/div[1]/a[1]';

    // Locator for an element inside the new tab
    targetElementInNewWindow = 'body';

    async handleWindow() {

        // Wait for the new page event
        const newPagePromise = this.page.context().waitForEvent('page');

        // Click the link
        await this.page.locator(this.link).click();

        // Get the new page
        const newPage = await newPagePromise;

        // Wait for the new page to load
        await newPage.waitForLoadState('domcontentloaded');

        // Locate element in the new page
        const element = newPage.locator(this.targetElementInNewWindow);

       

        // Optional: close the new window
        await newPage.close();
    }
}