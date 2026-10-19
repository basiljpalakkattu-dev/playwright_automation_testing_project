import { test, expect } from '@playwright/test';
import { Iframe } from '../pages/frame';


test('frame test', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');


let  objf = new Iframe(page);
await objf.framemethod('Hello iFrame');
const frame = page.frameLocator(objf.iframeLocator);
await expect(frame.locator(objf.iframeResult)).toContainText('Hello iFrame');


});