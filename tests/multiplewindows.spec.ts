import { test, expect } from '@playwright/test';
import { MultipleWindows } from '../pages/multiplewindows';

test('multi windows handling', async ({ page }) => {

    // Navigate to the practice page
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Create object of MultipleWindows class
    const objWindow = new MultipleWindows(page);

    // Handle the new window
    await objWindow.handleWindow();
});