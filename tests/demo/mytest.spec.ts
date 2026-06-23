import { test, expect } from '@playwright/test'

test("Must load the homepage with the correct title", async ({page}) => {
    await page.goto(
        "https://katalon-demo-cura.herokuapp.com/")
        
    await expect(page).toHaveTitle("CURA Healthcare Service")  
    await expect(page.locator("//h1")).toHaveText("CURA Healthcare Service")
});

test("Should do something ", async ({page}) => {
    await page.goto(
        "https://katalon-demo-cura.herokuapp.com/")
    await page.locator("//h1").click()

});
test.only("Should demo locators ", async ({page}) => {
  // Launch URL
    await page.goto("https://katalon-demo-cura.herokuapp.com/")
  //Click on the Make Appoinment
  let makeAppmtBtn =  page.getByRole("link",{ name: "Invalid Locator"})
    await makeAppmtBtn.click();
    //await page.getByRole("link", { name:"Make Appointment" }).click();
await page.getByRole('heading', { name: 'We Care About Your Health' }).click(); //page.goto('https://katalon-demo-cura.herokuapp.com/');
});