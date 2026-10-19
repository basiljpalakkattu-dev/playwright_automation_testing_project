import { test, expect } from '@playwright/test';
import { scrollingpageview } from '../pages/scrollpage';

test('scroll test page', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

 
let s=new scrollingpageview(page);
await s.scroll();
await expect(page.locator(s.scrollTarget)).toBeVisible();

});