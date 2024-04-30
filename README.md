# Meet App

## Overview
Meet is a serverless, progressive web application (PWA) built with React, utilizing the Google Calendar API to fetch and display upcoming events. Designed using a test-driven development (TDD) approach, Meet combines the scalability of serverless architecture with the rich, responsive user experience of a PWA.

## Features
- **Filter Events by City**: Users can filter events based on the city.
- **Toggle Event Details**: Show or hide additional details of events.
- **Customizable Event Display**: Specify the number of events displayed on a page.
- **Offline Support**: Access the app in offline or slow network conditions.
- **Home Screen Shortcut**: Add shortcuts to the home screen for quick access.
- **Data Visualization**: Includes charts to visualize event data, enhancing user interaction and understanding.

## Technical Requirements
- **Framework**: Built with React.
- **Development**: Follows TDD methodology to ensure quality and functionality.
- **APIs**: Integrates Google Calendar API with OAuth2 for secure authentication.
- **Serverless**: Utilizes AWS Lambda for backend operations.
- **Compatibility**: Supports all modern browsers and IE11.
- **Responsive Design**: Ensures a seamless experience across all devices (1920px to 320px screen widths).
- **PWA**: Meets all criteria in Lighthouse’s PWA checklist, including service worker implementation for offline usage.
- **Deployment**: Hosted on GitHub Pages.
- **Monitoring**: Uses online tools for performance monitoring.
- **Testing**: Achieves over 90% test coverage.

## User Stories
Feature: Filter Events by City
  As a user
  I want to filter events by city
  So that I can view only the events in my city of interest

  Scenario: User filters events by selecting a city
    Given I am on the events listing page
    When I select a city from the city filter dropdown or searchbar
    Then I see only events that are in the selected city

Feature: Toggle Event Details
  As a user
  I want to show/hide event details
  So that I can view more details for the events that interest me

  Scenario: User expands an event to see more details
    Given I am viewing a list of events
    When I click on the "Show Details" button for an event
    Then I should see more details of that event

  Scenario: User hides an event's details
    Given I am viewing the expanded details of an event
    When I click on the "Hide Details" button for the event
    Then the detailed view of the event should be hidden

Feature: Specify Number of Events Displayed
  As a user
  I want to specify the number of events displayed
  So that I can control how much data I am presented

  Scenario: User selects the number of events to display
    Given I am on the events listing page
    When I type "10" from the "Number of events per page" field
    Then I should see only 10 events per page

Feature: Use App Offline
  As a user
  I want to use the app when offline
  So that I can view events when I don’t have an internet connection

  Scenario: Viewing events offline
    Given I have previously loaded the events while online
    When I lose my internet connection
    Then I should still be able to view the events that were loaded

Feature: Add Shortcut to Home Screen
  As a user
  I want to add an app shortcut to the home screen
  So that I can open my events app more quickly

  Scenario: User adds the app shortcut to their home screen
    Given I am on the main page of the app
    When I select "Add to Home Screen" from the menu
    Then a shortcut to the app should be added to my home screen

Feature: Display Charts Visualizing Event Details
  As a user
  I want to display charts visualizing event details
  So that I can see how many events are going on in my city of interest

  Scenario: User views a chart of events by city
    Given I am on the dashboard page
    When I select a city from the city filter
    Then I should see a chart displaying the number of events in that city



## Installation
Provide step-by-step instructions on how to get a local copy up and running.

## Usage
Quick start guide and examples of how to use the app, including screenshots or videos.

## Configuration
Details on configuring the app, if necessary.

## Contributing
Guidelines for how others can contribute to the project.

## License
Specify the type of license under which the app is released.

## Contact
How to reach the development team for support or queries.

## Acknowledgments
Credits to contributors, third-party services or libraries used.

Exercise 4.2
The Meet App will use the serverless function AWS Lambda to handle the backend with the Google Calendar API.
Features like filtering by city and choosing how many events are displayed will only be executed when the user requests them. This allows us to reduce costs by only paying according to the amount of usage the app gets, as opposed to paying for the server to be running constantly in the background regardless of how much usage the app is getting.
