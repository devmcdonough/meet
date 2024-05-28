Feature: Show and Hide an Event's Details

    Scenario: An event element is collapsed by default
        Given the user is on the events page
        When the page is loaded
        Then the event details should be collapsed by default

    Scenario: User can expand an event to see details
        Given the user is on the events page
        When the user clicks on the Show More button of an event
        Then the event details should be displayed

    Scenario: User can collapse an event to hide details
        Given the event details are currently displayed
        When the user clicks on the Show Less button of an event
        Then the event details should be collapsed