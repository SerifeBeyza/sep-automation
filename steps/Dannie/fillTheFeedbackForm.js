import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { dannieContactPage } from "../../globalPagesSetup.js";
import { BrowserUtility } from "../../utilities/BrowserUtility.js";

 


       
         Given('user is on the contact page', async function () {

           
            const page = dannieContactPage;

            await this.page.goto(process.env.DAN_QA_URL);
            await page.waitForTimeout(3000);

            let currentTitle = await page.title();
            const expectedTitle ="Contacts | Dannie.cc";
            console.log(`The title of the page is :${currentTitle}`);

            await BrowserUtility.verify_title(page,"Contacts | Dannie.cc");

          
            

            
            

         });
       
    

        /* And('user able to see feedback form text on the contact page', async function () {
          
            
            


         });
         */