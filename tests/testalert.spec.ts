import { test, expect } from '@playwright/test';
import { alerts } from '../pages/alerts';
test('alerts', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');
  let al =new alerts(page);
  await al.showalerts();
  await al.confirmalert(true);
  await expect(page.locator(al.alertResult)).toContainText(" Confirm result: OK")
  await al.prompalert('nuzra');
  await expect(page.locator(al.alertResult)).toContainText("Prompt value: nuzra");




 
 
  
  
});