import { Given,When,Then } from "@cucumber/cucumber";
import { chromium,Page,Browser} from "@playwright/test"

let browser:Browser
let page:Page

Given('User navigates to the application', async function () {
  browser = await chromium.launch({headless:false})
  page =await browser.newPage();
  await page.goto("https://ultimateqa.com/automation");
  
  });

  Given('User click on the login link', async function () {
    page.close();
    console.log("This is dummy")
  });


  
    Given('User enter the username as {string}', async function (username) {
      console.log("This is dummy")
    
    });
  
  
    Given('User enter the password as {string}', async function (password) {
      console.log("This is dummy")
    
    });
    
    When('User click on the login button', async function () {
      console.log("This is dummy")
    
    });
  
  
    Then('Login should be success', async function () {
      console.log("This is dummy")
    
    });
  

    
    When('Login should fail', async function () {
      console.log("This is dummy")
    
    });