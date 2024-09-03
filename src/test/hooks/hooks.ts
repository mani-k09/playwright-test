import { Before,After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { chromium,Browser,Page, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixtures";

//let page : Page;
let browser : Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({headless:!false});

})

Before (async function () {
    context = await browser.newContext();
    const page =await browser.newPage();    
    pageFixture.page = page;
})

After (async function ({pickle,result}) {
    //To capture Screenshot on failure
    if(result?.status != Status.FAILED) {
        const img = await pageFixture.page.screenshot({path:'./test-results/screenshots/'+pickle.name+'.png',type:"png"});
        await this.attach(img,"image/png");

    }
    
    await pageFixture.page.close();
    await context.close();
})

AfterAll(async function () {
    await browser.close();
    
})