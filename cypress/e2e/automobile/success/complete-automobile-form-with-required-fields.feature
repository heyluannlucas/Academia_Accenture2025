Feature: Automobile Insurance Application

@requiredOnly
  Scenario Outline: User completes the automobile insurance form with <plan> price option
    Given the user is on the Automobile insurance page
    When the user fills in required vehicle data
    And the user fills in required insurant data
    And the user fills in required product data
    And the user selects the "<plan>" price option
    And the user sends the quote with required fields
    Then a confirmation message should be displayed

    Examples:
      | plan     |
      | Platinum |
      | Gold     |
      | Silver   |
      | Ultimate |
