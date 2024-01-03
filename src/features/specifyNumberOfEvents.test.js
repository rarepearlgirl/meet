import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
  
  test("When user hasn’t specified a number, 32 events are shown by default", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let eventList;
    given("the user hasn't specified a number of events", () => {
      AppComponent = render(<App />);
    });

    when('the user views the events list', async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
    });

    then('32 events should be shown by default', () => {
      expect(eventList.length).toEqual(32);
    });
  });

  // Scenario 2
  test('User can change the number of events displayed', ({
    given,
    when, 
    then,
  }) => {
    let AppComponent;
    given('the user has an option to specify the number of events', async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList[0]).toBeTruthy();
      });
    });

    when(
      'the user chooses a specific number',
      async () => {
        const button = AppComponent.queryByTestId('event-number-imput');

        await userEvent.type(button, '{backspace}{backspace}10');
      }
    );

    then(
      'the user should be able see that many events displayed, i.e., the user is able to change the number of events displayed',
      () => {
        const AppDOM = AppComponent.container.firstChild;
        const eventList = within(AppDOM).queryAllByRole('listitem');
        expect(eventList.length).toEqual(10);
      }
    );
  });
});