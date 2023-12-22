import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;
    given('the user is viewing the events list', () => {
      AppComponent = render(<App />);
    });

    // let AppComponent;
    when('the user looks at an event while taking no actions', async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems =
          within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(32);
      });
    }
    );

    then('its details should be collapsed (hidden) by default.', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });

  test('User can expand an event to see details.', ({ given, and, when, then }) => {
    let AppComponent;
    given('the user is viewing the event list', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
    });

    and( 'it is hidden', () => {

    })


    // let CitySearchDOM;
    when('the user clicks on the list (toggles it)',  async () => {
      const button = AppComponent.queryAllByText('Show Details')[0];

      await userEvent.click(button);
    });

    then('the user should be able to expand an event to see more details about it',  () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).toBeInTheDocument();
    });
  });

  test('User can collapse an event to hide details.', ({ given, when, then }) async => {
    let AppComponent;
    let button;
    given('the event list is already expanded',  () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
    });

      button = AppComponent.queryAllByText('Show Details')[0];
      await userEvent.click(button);

      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).toBeInTheDocument();
    });

    when('the user clicks on the list',  async () => {
      await userEvent.click(button);
    });

    then('the user should be able to hide the list', () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector('.details');
      expect(details).not.toBeInTheDocument();
    });
  });

});