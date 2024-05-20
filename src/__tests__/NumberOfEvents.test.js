import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    beforeEach(() => {
        NumberOfEventsComponent = render(<NumberOfEvents setNumberOfEvents={() => { }} />);
    });

    test('contains element with role of the textbox', () => {
        const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
        expect(numberTextBox).toBeInTheDocument();
    });

    test('default value of input field is 32', () => {
        expect(NumberOfEventsComponent.queryByRole('textbox')).toHaveValue('32');
    });

    test("the of NumberOfEvents' textbox has a value that changes accordingly when a user types in it",async () => {
        const user = userEvent.setup();
        const NumberOfEvents = NumberOfEventsComponent.queryByRole('textbox');
        await user.type(NumberOfEvents, '{backspace}{backspace}10');
        expect(NumberOfEvents).toHaveValue('10');
    });
})