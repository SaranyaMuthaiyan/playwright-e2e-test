import { test, expect } from '@playwright/test';
test.describe('Make appointment', () => {
    test.beforeEach("Login with valid creds", async ({page}) => {
    
    //1.launch url ands assert the title and header
        await page.goto("https://katalon-demo-cura.herokuapp.com/");
        await expect(page).toHaveTitle("CURA Healthcare Service") ; 
        await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service"); 

//2.Click on the Make Appoinment
//await page.getByRole("link", { name:"Make Appointment" }).click();
//await page.getByRole("link", { name:"Make Appointment" }).press("Enter");
//await page.getByRole("link", { name:"Make Appointment" }).dblclick();
//await page.getByRole("link", { name:"Make Appointment" }).click({button:"right"});
//await page.getByRole("link", { name:"Make Appointment" }).hover();
await page.getByRole("link", { name:"Make Appointment" }).click({timeout:10_000});
await expect(page.getByText("Please login to make")).toBeVisible();

//Successfull login 
//await page.getByLabel("Username").fill("John Doe");
//await page.getByLabel("Username").clear();
await page.getByLabel("Username").pressSequentially("John Doe", { delay: 300 });

await page.getByLabel("Password").fill("ThisIsNotAPassword");
await page.getByRole("button", { name:"Login" }).click();   

////Assertion

await expect(page.locator("//h2")).toContainText("Make Appointment")
 });
      
test('should make an appointment with non-default values', async ({ page }) => {
    
//Dropdown
  await page.getByLabel('Facility').selectOption('Hongkong CURA Healthcare Center');
  //Checkbox
  await page.getByText('Apply for hospital readmission').click();
  //Radio button
  await page.getByText('Medicaid').click();
  //Data Input Box
  await page.getByRole('textbox', { name: 'Visit Date (Required)' }).click();
  await page.getByRole('cell', { name: '22' }).click();
  await page.getByRole('textbox', { name: 'Visit Date (Required)' }).press('Enter');
 
 //Multi line comments input box
  await page.getByRole('textbox', { name: 'Comment' }).click();
  await page.getByRole('textbox', { name: 'Comment' }).fill('This is Not a free space');
  await page.getByRole('button', { name: 'Book Appointment' }).click();
  await expect(page.locator('h2')).toContainText('Appointment Confirmation');
  await expect(page.getByRole('link', { name: 'Go to Homepage' })).toBeVisible();
});
});
  


