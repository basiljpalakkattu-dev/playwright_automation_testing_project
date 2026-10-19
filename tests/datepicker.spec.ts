import { test, expect } from '@playwright/test';
import { Datepicker } from '../pages/datepicker';

test('datepicker', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

   let datepic = new Datepicker(page);
  await datepic.selectdate('2026-12-01');
  await expect(page.locator(datepic.dateResult)).toContainText('2026-12-01');


  
});