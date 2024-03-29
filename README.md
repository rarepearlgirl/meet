# Meet

## Description
A serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

## Objective
To build a serverless, progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

![screenshot of meet app](image-2.png)

- [live app link](https://rarepearlgirl.github.io/meet/)

## Context
Serverless and PWAs have grown in popularity over the last few years, and they’re both considered to be the future of web development. By combining these two concepts, your app will not only work as a normal web application, but it will also reap the benefits of both serverless architecture and PWAs:
-  Serverless Advantages: No backend maintenance, easy to scale, always available, no cost for idle time.
-  PWA Advantages: Instant loading, offline support, push notifications, “add to home screen” prompt, responsive design, and cross-platform compatibility
The Meet app is designed to curate events based on city inputs, with data visualization illuminating event distribution by location and popularity of event genres.

## The 5 Ws
- *Who*: Targeted at Meet app users – including peers, professionals, potential recruiters.
- *What*: A PWA employing serverless architecture and sculpted through TDD.
- *When*: Usable whenever users aspire to explore upcoming events in a chosen city.
- *Where*: Hosted online by a cloud provider.
- *Why*: To harness the power of contemporary cloud solutions, presenting unparalleled user experience via PWAs, and ensuring impeccable quality via TDD.


## Project Requirements
### Key Features
- Filter Events by City
- Show/Hide Event Information
- Specify Number of Events
- Offline Functionality
- App Shortcut Addition to Home Screen
- Visual Charts of Event Statistics

## Project Features & Scenarios
### Feature 1: Filter Events by City
- User Story:
As a user, I should be able to filter events by a specific city
So that I can see events happening in my city or any other city I am interested in.
#### Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.
Given user hasn’t searched for any city; When the user opens the app;
Then the user should see a list of upcoming events.

####  Scenario 2: User should see a list of suggestions when they search for a city.
Given the main page is open; When user starts typing the city in the textbox;
Then the user should see a list of cities (suggestions) that match what they’ve typed.

#### Scenario 3: User can select a city from the suggested list.
Given user was typing “Berlin” in the city textbox, and the list of suggested cities is showing;
When the user selects a city (e.g., “Berlin, Germany”) from the list;
Then their city should be changed to that city (i.e., “Berlin, Germany”) and be able to select a city from the suggested list (and receive a list of upcoming events in that city).

### Feature 2: Show/Hide Event Details: 
- User Story:
As a user,
I should be able to see more or less details about an event
So that I can decide whether or not I am interested in it.

#### Scenario 1: An event element is collapsed by default.
Given the user is viewing the events list, When the user looks at an event while taking no actions, Then its details should be collapsed (hidden) by default.

#### Scenario 2: User can expand an event to see details.
Given the user is viewing the event list AND it is hidden, When the user clicks on the list (toggles it), Then the user should be able to expand an event to see more details about it.

#### Scenario 3:  User can collapse an event to hide details.
Given the event list is already expanded When the user clicks on the list Then the user should be able to hide the list.

### Feature 3: Specify Number of Events
- User Story:
As a user,
I should be able to specify the number of events I want to see
So that I can check which event I want to pay attention to and/or visit it (and also better manage my browsing experience).

#### Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
Given the user hasn't specified a number of events, When the user views the events list, Then 32 events should be shown by default.

#### Scenario 2: User can change the number of events displayed.
Given the user has an option to specify the number of events, When the user chooses a specific number, Then the user should be able see that many events displayed, i.e., the user is able to change the number of events displayed.

### Feature 4: Use the App When Offline
- User Story:
As a user,
I should be able to use the App When Offline

#### Scenario 1: Show cached data when there’s no internet connection.
Given the user has no Internet connection, When the user intends to use the MeetApp offline, Then the user should be able to see the last data that was cached from their previous use when there’s no internet connection.

#### Scenario 2: Show error when user changes search settings (city, number of events).
Given the user is offline, When the user tries to change search settings like city or number of events, Then the user should see an error message informing them of the inability to fetch new data and the fact that the connection failed.

### Feature 5: Add an App Shortcut to the Home Screen
- User Story:
As a user,
I should be able to Add the MeetApp Shortcut to my  Home Screen

#### Scenario 1: User can install the meet app as a shortcut on their device home screen.
Given the user has the option to install the Meetapp, When they click the button to install, Then it should be added as a shortcut on the device's home screen. 

### Feature 6: Display Charts Visualizing Event Details
- User Story:
As a user,
I should be able to Display Charts Visualizing Event Details

#### Scenario 1: Show a chart with the number of upcoming events in each city
Given the user is on the statistics or dashboard page, When they view event details, Then they should see a chart displaying the number of upcoming events in each city.

# Serverless Functions
By using AWS Lambda, Meet ensures scalability and responsiveness. 
Thus, as the number of users naturally grows with time, so does the number of their requests. With the help of AWS Lambda, Meet caters to a growing number of users while maintaining optimal performance. 
The serverless approach aids in reducing infrastructure costs and maintenance efforts, allowing the team to focus on feature development and user experience (eliminating the need to oversee complex server infrastructures). 
Last but not least, serverless architecture ensures users enjoy a smooth and seamless experience, even during periods of high traffic.