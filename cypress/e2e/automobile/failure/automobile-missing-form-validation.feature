Feature: Automobile Insurance Application - Form Validation

  Scenario: User attempts to select a plan without completing previous forms
    Given the user is on the Automobile insurance page
    When the user leaves the vehicle data form blank
    And the user leaves the insurant data form blank
    And the user leaves the product data form blank
    Then the user should see an error message for required forms
