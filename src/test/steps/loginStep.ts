import { Given,When,Then } from "@cucumber/cucumber";
import { chromium,Page,Browser, expect} from "@playwright/test"

let browser:Browser
let page:Page

Given('User navigates to the application',async function () {
  browser = await chromium.launch({headless:false})
  page =await browser.newPage();
  await page.goto("https://letcode.in/test",{ timeout: 50000 });
  
  });

  Given('User click on the login link', { timeout: 50000 },async function () {
    console.log("user clicking login")
    //await page.locator("(//a[contains(@class,'button is-primary')])[2]").click();
    await page.locator("(//div[@class='buttons']//a)[2]").click();

  });


    Given('User enter the username as {string}', { timeout: 50000 },async function (username) {
      await page.locator("[name='email']").fill(username);
      //await page.locator("(//div[@class='control has-icons-left']//input)[1]").fill();
      console.log("User entering username");
    
    
    });
  
  
    Given('User enter the password as {string}', { timeout: 50000 },async function (password) {
      //await page.locator("input[name='password']").fill(password);
      await page.locator("[name='password']").fill(password);
      console.log("User entering password");
      
    
    });
    
    When('User click on the login button', async function () {
      await page.locator("(//button[@class='button is-primary'])[1]").click();
      console.log("This is dummy")
    });
  
  
    Then('Login should be success', async function () {
      const name = await page.locator("//h1[normalize-space(text())='LetCode with Koushik']").textContent();
      console.log("The name is :" + name);
      const text1 = await page.locator("//a[normalize-space(text())='Sign out']").textContent();
      console.log("The button text is :"+text1);
      browser.close();
    
    });
  

    
    When('Login should fail', async function () {
      const text2 =await page.locator("//a[normalize-space(text())='Log in']").textContent();
      console.log("The button text is :"+ text2);
      
      const failure_message= await page.locator("//div[@class='toast-top-right toast-container']")
      await expect(failure_message).toBeVisible();
      console.log("toast message status is :" +failure_message)
      browser.close();
    });


    