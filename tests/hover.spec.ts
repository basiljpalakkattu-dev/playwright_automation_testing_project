import { test, expect } from '@playwright/test';
import { hover } from '../pages/hover';

test('mouse hover', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let objhover = new hover(page);
await objhover.hoverfunction();
await expect(page.locator(objhover.hoverTrigger)).toBeVisible();



});