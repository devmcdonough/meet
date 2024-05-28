import { render, within, waitFor } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import userEvent from '@testing-library/user-event';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 events are shown by default', ({ given, when, then }) => {
        let AppComponent;

        given('the user hasn’t specified a number of events', () => {
            AppComponent = render(<App />);
        });

        when('the user views the list of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });
        });

        then('32 events should be displayed by default', () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(32);
        });
    });

    test('User can change the number of events displayed', ({ given, when, then }) => {
        let AppComponent;

        given('the user wants to see a different number of events', () => {
            AppComponent = render(<App />);
        });

        when('the user specifies a number of events', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
            const NumberOfEventsInput = within(NumberOfEventsDOM).getByRole('textbox');
            const user = userEvent.setup();
            await user.clear(NumberOfEventsInput);
            await user.type(NumberOfEventsInput, '10');
        });

        then('the specified number of events should be displayed', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(10);
            });
        });
    });
});
