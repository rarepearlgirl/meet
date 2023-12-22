Feature: Specify Number of Events
  Scenario:  When user hasn’t specified a number, 32 events are shown by default.
    Given the user hasn't specified a number of events, 
    When the user views the events list, 
    Then 32 events should be shown by default.

  Scenario: User can change the number of events displayed.
    Given the user has an option to specify the number of events, 
    When the user chooses a specific number, 
    Then the user should be able see that many events displayed, i.e., the user is able to change the number of events displayed.