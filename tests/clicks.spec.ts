import { test, expect } from '@playwright/test';
import { btninteratcion } from '../pages/btninteractionclicks';
test('single and double clicks', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

 
  let objdbandsg = new btninteratcion(page);

  await objdbandsg.singleclick();
  await expect(page.locator(objdbandsg.singleClickResult)).toContainText('Single clicked!');
  await objdbandsg.doubleclic();
  await expect(page.locator(objdbandsg.doubleClickResult)).toContainText('Double clicked!');
  await objdbandsg.righclick();
  await expect(page.locator(objdbandsg.rightClickResult)).toContainText('Right click captured (context menu blocked)');
  
  
});