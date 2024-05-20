import { render } from '@testing-library/react';
import App from '../App';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    })

    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
      });

      test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
      });

      test('render NumberOfEvents', () => {
        expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
      })
});

// import { render, screen } from '@testing-library/react';
// import App from '../App';

// describe('<App /> component', () => {
//     test('renders list of events', () => {
//         render(<App />);
//         const eventList = screen.getByTestId('event-list');
//         expect(eventList).toBeInTheDocument();
//     });
// });
