import { Given,When,Then,setDefaultTimeout } from "@cucumber/cucumber";
import { expect} from "@playwright/test"
import { pageFixture } from "../hooks/pageFixtures";

setDefaultTimeout(60 *1000 * 2)

//let browser:Browser
//let page:Page

Given('User navigates to the application',async function () {
 
  await pageFixture.page.goto("https://letcode.in/test")
  await pageFixture.page.waitForTimeout(3000);
  
  });

  Given('User click on the login link',async function () {
    console.log("user clicking login")
    //await page.locator("(//a[contains(@class,'button is-primary')])[2]").click();
    await  pageFixture.page.locator("(//div[@class='buttons']//a)[2]").click();

  });


    Given('User enter the username as {string}',async function (username) {
      await  pageFixture.page.locator("[name='email']").fill(username);
      //await page.locator("(//div[@class='control has-icons-left']//input)[1]").fill();
      console.log("User entering username");
    
    
    });
  
  
    Given('User enter the password as {string}',async function (password) {
      //await page.locator("input[name='password']").fill(password);
      await  pageFixture.page.locator("[name='password']").fill(password);
      console.log("User entering password");
      
    
    });
    
    When('User click on the login button', async function () {
      await  pageFixture.page.locator("(//button[@class='button is-primary'])[1]").click();
      console.log("This is dummy")
    });
  
  
    Then('Login should be success', async function () {
      const name = await  pageFixture.page.locator("//h1[normalize-space(text())='LetCode with Koushik']").textContent();
      console.log("The name is :" + name);
      const text1 = await  pageFixture.page.locator("//a[normalize-space(text())='Sign out']").textContent();
      console.log("The button text is :"+text1);
      //browser.close();
    
    });
  

    
    When('Login should fail', async function () {
      const text2 =await  pageFixture.page.locator("//a[normalize-space(text())='Log in']").textContent();
      console.log("The button text is :"+ text2);
      
      const failure_message= await  pageFixture.page.locator("//div[@class='toast-top-right toast-container']")
      await expect(failure_message).toBeVisible();
      console.log("toast message status is :" +failure_message)
      //browser.close();
    });


    