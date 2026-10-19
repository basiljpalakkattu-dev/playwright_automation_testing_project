import { test, expect } from '@playwright/test';
import { basicform } from '../pages/basicformelements';

test('Basic_form_elements', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let basicelements = new basicform(page);
 await basicelements.basicf('basil','basil@exampl','basil@gmail.com','9400961261','i am software student');

 await basicelements.submitbtn();
 await expect(page.locator(basicelements.formResult)).toContainText('Form submitted successfully');

 await basicelements.resetbtn();
 await expect(page.locator(basicelements.formResult)).toContainText('Form was reset');
});