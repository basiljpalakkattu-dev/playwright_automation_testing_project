import { test, expect } from '@playwright/test';

test('open Google browser', async ({ page }) => {
  await page.goto('https://www.google.com/');

    await expect(page).toHaveTitle(/Google/);


 
});
test('open amazon', async ({ page }) => {
  await page.goto('https://www.amazon.in/ref=nav_logo');

    await expect(page).toHaveTitle(/Amazon/);


 
});
