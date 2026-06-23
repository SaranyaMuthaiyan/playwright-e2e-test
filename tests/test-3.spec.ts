import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  //launch the application
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  
  //click on the Make Appointment link 
  await page.getByRole('link', { name: 'Make Appointment' }).click();
  await expect(page.getByText('Please login to make')).toBeVisible();
 
 //Login page
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('John Doe');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('ThisIsNotAPassword');
  await page.getByRole('button', { name: 'Login' }).click();
  //Assert a text
  await expect(page.locator('h2')).toContainText('Make Appointment');
});