import { test, expect } from '@playwright/test';
import { Dropdownclass } from '../pages/dropdownpage';
test('drop down', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');


  let  drop= new Dropdownclass(page)
  await drop.dropDown('green');
  

  await drop.dropDown('green');
  await expect(page.locator(drop.standardResult))
    .toContainText('Selected: green');

  await drop.multiselectop(['java', 'python']);
  await expect(page.locator(drop.multiResult))
    .toContainText('Selected: java, python');

  await drop.customDiv();
  await expect(page.locator(drop.customResult))
    .toContainText('Selected: Beta');

  await drop.populatedMethod('Playwright');
  await expect(page.locator(drop.dynamicResult))
    .toContainText('Selected: Playwright');

});

