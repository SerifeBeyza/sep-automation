@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.
    #* AC7: By default, the pay button should be displayed.


    #Background:
    #    Given user is on the enrollment page
    #    And user has completed step one with valid information
    #    And user is on step two of the enrollment process


    #TODO: Create scenarios that cover all the acceptance criteria
    @sep16-1
    Scenario:Verify that the next button is disabled by default
          
          Then the next button should be disabled by default

   @sep16-2
    Scenario: Veirfy that the next button will be activated when user selects upfont payment option
         
         When user clicks upfront payment option
         Then the next button will be enabled for upfront payment option
         

    @sep16-3
    Scenario: Verify that the next button will be activated when user selects installment payment option
         
         When user clicks installment payment option
         And the next button will be enabled for installment payment option
         And user able to see step 3 page
         Then In the stepper, steps 1 and 2 should be green, and step 3 should be blue

    @sep16-4
    Scenario:Verify that the payment component should be displayed

       When user on the step payment page
       And able to see payment details
       Then enter valid payment details

        


       

   