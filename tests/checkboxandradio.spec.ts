import { test, expect } from '@playwright/test';
import { checkandradiobutton } from '../pages/checkandradio';

test('check box and radio test', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let objchek = new checkandradiobutton(page);
  await objchek.selectalltoogle();
  await expect(page.locator(objchek.selectAllCheckbox)).toBeChecked();
  await objchek.radiobuttontwo();
  await expect(page.locator(objchek.radio2)).toBeChecked();
  await objchek.revelcheckbox();
  await expect(page.locator(objchek.revealCheckbox)).toBeChecked();
  
});