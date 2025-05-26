import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { paymentPlanPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";
import { BrowserUtility } from "../../utilities/BrowserUtility.js";






         Given('user is on the enrollment page', async function () {

            await startApplicationPage.login();
             let currenTitle = await page.title();
             const expectedTitle = "Checkout | Cydeo";
             //console.log(`The title of the page is: ${currenTitle}`);
             expect(currenTitle).toBe(expectedTitle);
           
         });

  

         Given('user has completed step one with valid information', async function () {
            
            await startApplicationPage.firstNameInputBox.fill('Angelina');
            await startApplicationPage.lastNameInputBox.fill('Joly');
            await startApplicationPage.emailInputBox.fill('angelina@gmail.com');
            await startApplicationPage.phoneNumberInputBox.fill('1234567');
            await startApplicationPage.howDidYouHearAboutUsDropDown.click();
            await startApplicationPage.googleOption.click();
            
           
         });

 

         Given('user is on step two of the enrollment process', async function () {

             await startApplicationPage.nextButton.click();

            await startApplicationPage.paymentPlanText.isVisible();
        
           
         });

         Then('the next button should be disabled by default', async function () {

            await startApplicationPage.nextButton.isDisabled();

            
           
         });

         

         When('user clicks upfront payment option', async function () {
           await paymentPlanPage.upfrontPaymentFrame.click();

           await paymentPlanPage.upfrontDiscountAmountUnderUpfront.isVisible();
           await paymentPlanPage.couponBoxCloseBtnX.isVisible();
           await paymentPlanPage.upfrontDiscountTextUnderUpfront.isVisible();

           let actualUpfrontDiscountAmount= await paymentPlanPage.upfrontDiscountAmountUnderUpfront.innerText();
           const expectedUpfrontDiscountAmount= `- $${productInfo.prices[0].upfrontDiscountAmount}`;
           expect(actualUpfrontDiscountAmount).toBe(expectedUpfrontDiscountAmount);
           
           console.log(actualUpfrontDiscountAmount + expectedUpfrontDiscountAmount);
           

         });

   

         Then('the next button will be enabled for upfront payment option', async function () {

            await paymentPlanPage.activeNextButton.isEnabled();

            
         });


         When('user clicks installment payment option', async function () {
           
            await paymentPlanPage.installmentsPaymentFrame.isVisible();
            await paymentPlanPage.installmentsPaymentOption.isEnabled();
            await paymentPlanPage.installmentsPaymentOption.click();

            await paymentPlanPage.basePriceAmountUnderInstallments.isVisible();
            await paymentPlanPage.installmentsTextUnderInstallments.isVisible();
            await paymentPlanPage.pricePerInstallmentsTextUnderInstallments.isVisible();
            await paymentPlanPage.dueTodayTextUnderInstallments.isVisible();

            

         });

        

         Then('the next button will be enabled for installment payment option', async function () {

            await paymentPlanPage.activeNextButton.isEnabled();
            await paymentPlanPage.activeNextButton.click();
            

            
         });

         Then('user able to see step 3 page', async function () {

            
            await page.waitForTimeout(5000);
            await reviewPaymentPage.productPriceText.isVisible();
            //await reviewPaymentPage.upfrontPaymentFrame.isVisible();
            await reviewPaymentPage.subtotalText.isVisible();
            await reviewPaymentPage.totalText.isVisible();


         });

         Then('In the stepper, steps 1 and 2 should be green, and step 3 should be blue', async function(){

           await expect(paymentPlanPage.step1).toHaveCSS('background-color','rgb(172, 245, 138)');
           await expect(paymentPlanPage.step2).toHaveCSS('background-color','rgb(172, 245, 138)');
           await expect(paymentPlanPage.step3).toHaveCSS('background-color','rgb(1, 201, 255)');
            



         });

        

         When('user on the step payment page', async function () {
           
             await paymentPlanPage.installmentsPaymentOption.click();
            await paymentPlanPage.activeNextButton.click();

            await reviewPaymentPage.productPriceText.isVisible();
            await reviewPaymentPage.installmentPriceText.isVisible();
            await reviewPaymentPage.subtotalText.isVisible();
            await reviewPaymentPage.processingFeeText.isVisible();
            await reviewPaymentPage.totalText.isVisible();

         

         });

   

         When('able to see payment details', async function () {
            

            await page.waitForTimeout(10);
           // await reviewPaymentPage.paymentFrame.isVisible();

         
            /*
            
             await reviewPaymentPage.paymentForm2.isVisible();

             */
           
            await reviewPaymentPage.cardNumberInput.isVisible();
            await reviewPaymentPage.expiryDateInput.isVisible();
            await reviewPaymentPage.cvcInput.isVisible();
            await reviewPaymentPage.countryDropDown.isVisible();
            await reviewPaymentPage.zipCodeInput.isVisible();

            

            
         });

   

         Then('enter valid payment details', async function () {

            await reviewPaymentPage.cardNumberInput.waitFor({ state: 'visible' });
            await reviewPaymentPage.cardNumberInput.fill(process.env.CARD_NUMBER);
            
            await reviewPaymentPage.expiryDateInput.fill(process.env.CARD_EXPIRATION_DATE);
            await reviewPaymentPage.cvcInput.fill(process.env.CARD_CVC_NUMBER);

           // await reviewPaymentPage.zipCodeInput.isDisabled();
            //console.log(reviewPaymentPage.countryDropDown);
            await reviewPaymentPage.countryDropDown.selectOption('United States');
            await reviewPaymentPage.zipCodeInput.isEnabled();
            await reviewPaymentPage.zipCodeInput.fill(process.env.ZIP_CODE);

            await reviewPaymentPage.payButton.isDisabled();
            await reviewPaymentPage.termsAndConditionsCheckbox.isVisible();
            await reviewPaymentPage.termsAndConditionsCheckbox.click();
            await reviewPaymentPage.payButton.isEnabled();
            await reviewPaymentPage.payButton.click();


            await reviewPaymentPa
            


         });

