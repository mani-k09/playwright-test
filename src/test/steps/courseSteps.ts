import { Given,When,Then } from "@cucumber/cucumber";
import { chromium,Page,Browser, expect} from "@playwright/test"

let page : Page;

When('User click new course button', async function () {
    await page.locator("//a[normalize-space(text())='New Course!']").click();
  });

  Then('User should see title as {string}', async function (string) {
    const course_title = await page.locator("(//p[@class='title'])[1]").textContent();
    console.log("the course title is :" + course_title);
  });


  When('User click on Enroll to course button', async function () {
    // Write code here that turns the phrase above into concrete actions
    await page.locator("(//p[@class='title'])[1]").click();
    
  });


  Then('User should see message as  {string}', async function (string) {
    const welcome_message = await page.locator(".subtitle").textContent();
    console.log(welcome_message);
  });