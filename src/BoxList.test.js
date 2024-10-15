import { render, fireEvent, screen } from '@testing-library/react';
import BoxList from './BoxList';

it('should render without crashing', () => {
    render(<BoxList />);
});

it('matches snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});


it('should add a new box', () => {
    render(<BoxList />);

    // find the form fields
    const widthInput = screen.getByLabelText("Width:");
    const heightInput = screen.getByLabelText("Height:");
    const backgroundColorInput = screen.getByLabelText("Background Color:");
    const submitButton = screen.getByText("Add Box");

    // simulate filling out the form
    fireEvent.change(widthInput, { target: { value: '100' } });
    fireEvent.change(heightInput, { target: { value: '100' } });
    fireEvent.change(backgroundColorInput, { target: { value: 'blue' } });

    // click submit
    fireEvent.click(submitButton);

    // check if a new box with the correct style has been added
    const newBox = screen.queryByText("X");
    expect(newBox).toBeInTheDocument();
});
