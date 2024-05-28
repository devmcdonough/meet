Feature: Specify Number of Events

    Scenario: When user hasn’t specified a number, 32 events are shown by default
        Given the user hasn’t specified a number of events
        When the user views the list of events
        Then 32 events should be displayed by default

    Scenario: User can change the number of events displayed
        Given the user wants to see a different number of events
        When the user specifies a number of events
        Then the specified number of events should be displayed
