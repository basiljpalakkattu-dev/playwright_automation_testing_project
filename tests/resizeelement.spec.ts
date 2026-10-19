import { test, expect } from '@playwright/test';
import { resizelementpage } from '../pages/resizelement';


test('resize element page', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let objresize = new resizelementpage(page);
  await objresize.resizebox(50,50);


});