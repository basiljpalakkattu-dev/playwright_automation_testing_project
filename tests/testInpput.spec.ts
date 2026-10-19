import { test, expect } from '@playwright/test';
import { inputfield } from '../pages/ttesyinputfieldpage';
import { testdata } from '../TestData/testData';
test('open automation blog', async ({ page }) => {

  await page.goto(testdata.url);

let objinput = new inputfield(page);
await objinput.formEnterAction();

});
