import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';

export class BasePage extends Page {

  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    
  }


  
  async login(){
    const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");
    await this.page.setExtraHTTPHeaders({Authorization: `Basic ${code}`,});
    await this.page.goto(process.env.SEP_URL);
    BrowserUtility.verify_title(this.page, 'Checkout | Cydeo');
    await this.page.waitForTimeout(700);
  }

  async abc(){

    this.page


  }

}