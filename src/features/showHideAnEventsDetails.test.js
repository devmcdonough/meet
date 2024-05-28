import { render, within, waitFor } from '@testing-library/react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Event from '../components/Event';
import { getEvents } from '../api';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;

        given('the user is on the events page', () => {
            AppComponent = render(<App />);
        });

        when('the page is loaded', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBeGreaterThan(0);
            });
        });

        then('the event details should be collapsed by default', () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventDetails = AppDOM.querySelector('.details');
            expect(eventDetails).not.toBeInTheDocument();
        });
    });

    test('User can expand an event to see details', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;

        given('the user is on the events page', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
        });

        when('the user clicks on the Show More button of an event', async () => {
            const showMoreButton = EventComponent.getByText('Show More');
            const user = userEvent.setup();
            await user.click(showMoreButton);
            await waitFor(() => {
                expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
            });
        });

        then('the event details should be displayed', () => {
            expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
            expect(EventComponent.getByText('Show Less')).toBeInTheDocument();
        });
    });

    test('User can collapse an event to hide details', ({ given, when, then }) => {
        let EventComponent;
        let allEvents;

        given('the event details are currently displayed', async () => {
            allEvents = await getEvents();
            EventComponent = render(<Event event={allEvents[0]} />);
            const user = userEvent.setup();
            await user.click(EventComponent.getByText('Show More'));
            await waitFor(() => {
                expect(EventComponent.container.querySelector('.details')).toBeInTheDocument();
            });
        });

        when('the user clicks on the Show Less button of an event', async () => {
            const showLessButton = EventComponent.getByText('Show Less');
            const user = userEvent.setup();
            await user.click(showLessButton);
            await waitFor(() => {
                expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
            });
        });

        then('the event details should be collapsed', () => {
            expect(EventComponent.container.querySelector('.details')).not.toBeInTheDocument();
            expect(EventComponent.queryByText('Show Less')).not.toBeInTheDocument();
        });
    });
});
