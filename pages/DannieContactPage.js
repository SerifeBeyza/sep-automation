import { BasePage } from "./BasePage.js";

export class DannieContactPage extends BasePage {

    /**
   * @param {import('playwright').Page} page
   */

    constructor(page) {
     super(page);
        this.feedbackText = page.locator(
            //span[text()='Feedback form']
        );

        this.emailBox = page.locator(
            //input[@name='email']
        );

        this.nameBox=page.locator(
            //input[@name='name']
        );
        this.phoneBox=page.locator(

        //input[@name='phone']
        );

        this.commentTextArea=page.locator(//textarea[@id='textarea_comp-ksodiv97']
            );

}


}