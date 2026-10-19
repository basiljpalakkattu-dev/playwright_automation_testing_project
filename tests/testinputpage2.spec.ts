import test from "@playwright/test";
import { formfileds2 } from "../pages/testinputpage2";

test('form fill 2', async ({ page }) => {

  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

let objinp2=new formfileds2(page);
await objinp2.formfill();

});