import { test, expect } from '@playwright/test';
import { keyboardactions } from '../pages/keyboardactions';
test('keyboard actions', async ({ page }) => {
  // Navigate to the practice page
  await page.goto('https://www.sreenidhirajakrishnan.com/practice');

  let kb=new keyboardactions(page);
 await kb.pressandenter('hello world');

 
 
  
});