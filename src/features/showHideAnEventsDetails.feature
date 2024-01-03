Feature: Show/hide Event Details
  Scenario: An event element is collapsed by default
    Given the user is viewing the events list
    When the user looks at an event while taking no actions
    Then its details should be collapsed (hidden) by default

  Scenario: User can expand an event to see details
    Given the user is viewing the event list
    And it is hidden
    When the user clicks on the list (toggles it)
    Then the user should be able to expand an event to see more details about it

  Scenario: User can collapse an event to hide details
    Given the event list is already expanded
    When the user clicks on the list
    Then the user should be able to hide the list