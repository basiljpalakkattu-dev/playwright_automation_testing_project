import { test, expect } from '@playwright/test';
import { FileUpload } from '../pages/singlefileupload';
test('file upload', async ({ page }) => {
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let fi = new FileUpload(page);
  let file="C:\\Users\\ASUS\\OneDrive\\Documents\\TESTING COURSE NOTES\\ThulasiPB_SoftwareTester.pdf";

  await fi.uploadFile(file);

  await expect(page.locator(fi.uploadResult)).toContainText('ThulasiPB_SoftwareTester.pdf');

});
