import { Given,When,Then ,setDefaultTimeout} from "@cucumber/cucumber";
import { chromium,Page,Browser, expect} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixtures";

setDefaultTimeout(60 *1000 * 2)

//let page : Page;

When('User click new course button', async function () {
    await pageFixture.page.locator("//a[normalize-space(text())='New Course!']").click();
  });

  Then('User should see title as {string}', async function (string) {
    const course_title = await pageFixture.page.locator("(//p[@class='title'])[1]").textContent();
    console.log("the course title is :" + course_title);
  });


  When('User click on Enroll to course button', async function () {
    await pageFixture.page.locator("(//a[@class='button is-primary'])[1]").click();
    //await pageFixture.page.waitForTimeout(3000);
    
  });

  Then('User should see message as {string}', async function (string) {
    const welcome_message = await pageFixture.page.locator("//p[normalize-space(text())='Enjoy the course in English or Tamil']").textContent();
    console.log(welcome_message);
  });