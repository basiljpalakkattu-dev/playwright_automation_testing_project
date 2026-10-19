import { test, expect } from '@playwright/test';
import { testdata } from '../TestData/testData';
import { slider } from '../pages/slider';


test('resize element page', async ({ page }) => {
  // Navigate to the practice page
  await page.goto(testdata.url);

  let objs=new slider(page);
  await  objs.moveSlidertovalue('50');



});