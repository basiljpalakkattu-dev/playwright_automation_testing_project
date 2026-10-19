import { test, expect } from '@playwright/test';
import { downloadfile } from '../pages/downloadfile';

test('download', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let downloadpage = new downloadfile(page);
  let d = await downloadpage.triggerdownloadtext();
  
  // Verify the suggested filename
  await expect(d.suggestedFilename()).toBe('practice.txt');
});