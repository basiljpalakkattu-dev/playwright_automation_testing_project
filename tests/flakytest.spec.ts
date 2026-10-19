import { test, expect } from '@playwright/test';
import { flakyrunning } from '../pages/flaky';

test('flaky test running', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let obj=new flakyrunning(page);
  await obj.flky();

  const flkytestperesntresult = await page.locator(obj.flakyResult).textContent();
  await expect(flkytestperesntresult).toMatch(/Success|error|Failure |failed/i);

});