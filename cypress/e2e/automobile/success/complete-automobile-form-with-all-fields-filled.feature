Feature: Complete Automobile Insurance Flow

@allFields
Scenario Outline: User completes all the automobile insurance forms with <plan> price option
  Given the user is on the Automobile insurance page
  When the user fills in required and optional vehicle data
  And the user fills in required and optional insurant data
  And the user fills in required product data
  And the user selects the "<plan>" price option
  And the user sends the quote with required and optional fields
  Then a confirmation message should be displayed
    Examples:
      | plan     |
      | Platinum |
      | Gold     |
      | Silver   |
      | Ultimate |
