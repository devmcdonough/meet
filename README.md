# Meet App

## Overview
Meet is a serverless, progressive web application (PWA) built with React, utilizing the Google Calendar API to fetch and display upcoming events. Designed using a test-driven development (TDD) approach, Meet combines the scalability of serverless architecture with the rich, responsive user experience of a PWA.

## Context
Serverless and PWAs have grown in popularity over the last few years, and they’re both considered to be the future of web development. By combining these two concepts, your app will not only work as a normal web application but will also reap the benefits of both serverless architecture and PWAs:

- **Serverless**: No backend maintenance, easy to scale, always available, no cost for idle time.
- **PWAs**: Instant loading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility.

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
### Feature: Filter Events by City
- **As a user**, I want to filter events by citySo that I can view only the events in my city of interest
  - **Scenario 1**: When the user hasn’t searched for a city, show upcoming events from all cities.
  - **Scenario 2**: The user should see a list of suggestions when they search for a city.
  - **Scenario 3**: The user can select a city from the suggested list.

### Show/Hide Event Details
- **As a user**, I want to show/hide event details so that I can view more details for the events that interest me.
  - **Scenario 1**: An event element is collapsed by default.
  - **Scenario 2**: The user can expand an event to see details.
  - **Scenario 3**: The user can collapse an event to hide details.

### Specify Number of Events
- **As a user**, I want to specify the number of events displayed so that I can control how much data I am presented.
  - **Scenario 1**: When the user hasn’t specified a number, 32 events are shown by default.
  - **Scenario 2**: The user can change the number of events displayed.

### Use App Offline
- **As a user**, I want to use the app when offline so that I can view events when I don’t have an internet connection.
  - **Scenario 1**: Show cached data when there’s no internet connection.
  - **Scenario 2**: Show an error when the user changes search settings (city, number of events).

### Add Shortcut to Home Screen
- **As a user**, I want to add an app shortcut to the home screen so that I can open my events app more quickly.
  - **Scenario 1**: The user can install the meet app as a shortcut on their device home screen.

### Display Charts Visualizing Event Details
- **As a user**, I want to display charts visualizing event details so that I can see how many events are going on in my city of interest.
  - **Scenario 1**: Show a chart with the number of upcoming events in each city.

##Project Deliverables
### Exercise 4.1: TDD & Test Scenarios
- Write user stories based on the app’s key features.
- Translate user stories for each feature into multiple test scenarios.
- Use create-react-app to create a React app and push it to GitHub.
- Deploy a React app to GitHub Pages.
### Exercise 4.2: Intro to Serverless Functions & Authentication
- Evaluate the merit and usefulness of serverless development.
- Connect a React app with a protected API.
- Prepare an OAuth client for authorization and authentication.
- Obtain AWS credentials for future use.
### Exercise 4.3: Writing & Testing AWS Lambda Functions
- Write Lambda functions to implement serverless technology in an app.
- Test Lambda functions.
- Create a serverless deployment package.
### Exercise 4.4: Unit Testing
- Analyze use cases for unit tests.
- Write unit tests for an app.
- Test components using mock data.
- Develop implementation code in response to unit tests.
### Exercise 4.5: Integration Testing
- Analyze use cases for integration tests.
- Write integration tests.
- Develop implementation code in response to integration tests.
- Integrate real data from an API into a web app.
### Exercise 4.6: User Acceptance Testing & End-to-End Testing
- Describe the purpose of end-to-end testing during development.
- Write acceptance tests for an app to help non-developer stakeholders understand implementation code.
- Conduct automated end-to-end testing for an app.
- Handle testing errors in the terminal.
### Exercise 4.7: Continuous Delivery
- Discuss how CI and CD practices can help developers and organizations deliver high-quality products.
- Integrate an APM tool into the development of a web app.
### Exercise 4.8: Object-Oriented Programming (OOP)
- Define core concepts related to the OOP paradigm.
- Differentiate between when to use functional programming (FP) and when to use OOP to solve architectural problems (and when to use both).
- Implement a feature in your web app using OOP and React class components.
### Exercise 4.9: Progressive Web Apps
- Discuss what progressive web apps (PWAs) are and how they compare to regular web apps and native apps.
- Explain the core functionality of PWAs.
- Implement progressive functionality into an existing app, so that the app can be used offline and added to a user’s home screen.
### Exercise 4.10: Data Visualization
- Transform API data into a visual format using a visualization library.
- Implement data visualization features into a web app’s UI.
- Conduct research into a library’s documentation to implement new features.
### Optional: Advanced Deliverables
- Use the Lambda inline editor to create the authorization server instead of using the serverless toolkit.
- Style your app using React-Bootstrap.
- Write end-to-end tests for your app using Puppeteer.
- Conduct QA to test your app and fix any issues your testers may find.

## Installation
1. **Clone the repository**: git clone https://github.com/yourusername/meet-app.git
2. **Navigate to the project directory**: cd meet-app
3. **Install dependencies**: npm install
- **Required dependences**:
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^14.5.2",
    "atatus-spa": "^4.6.1",
    "nprogress": "^0.2.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "recharts": "^2.12.7",
    "web-vitals": "^2.1.4",
    "workbox-background-sync": "^6.6.0",
    "workbox-broadcast-update": "^6.6.0",
    "workbox-cacheable-response": "^6.6.0",
    "workbox-core": "^6.6.0",
    "workbox-expiration": "^6.6.0",
    "workbox-google-analytics": "^6.6.1",
    "workbox-navigation-preload": "^6.6.0",
    "workbox-precaching": "^6.6.0",
    "workbox-range-requests": "^6.6.0",
    "workbox-routing": "^6.6.0",
    "workbox-strategies": "^6.6.0",
    "workbox-streams": "^6.6.0"
4. **Start the development server**: npm start

## Contributing
1. **Fork the repository**
2. **Create a new branch**:
git checkout -b feature/new-feature
3. **Make your changes and commit them**:
git commit -m "Add new feature"
4. **Push to the branch**:
git push origin feature/new-feature
5. **Create a pull request**

## License
This project is licensed under the MIT License