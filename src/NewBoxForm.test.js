import { render, fireEvent, screen } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', () => {
    render(<NewBoxForm addBox={() => { }} />)
})

it('matches snapshot', () => {
    const { asFragment } = render(<NewBoxForm addBox={() => { }} />)
    expect(asFragment()).toMatchSnapshot();
})

it('updates form fields on user input', () => {
    render(<NewBoxForm addBox={() => { }} />);

    const widthInput = screen.getByLabelText('Width:');
    const heightInput = screen.getByLabelText('Height:');
    const backgroundColorInput = screen.getByLabelText('Background Color:');

    fireEvent.change(widthInput, { target: { value: '200' } });
    fireEvent.change(heightInput, { target: { value: '100' } });
    fireEvent.change(backgroundColorInput, { target: { value: 'blue' } });

    expect(widthInput.value).toBe('200');
    expect(heightInput.value).toBe('100');
    expect(backgroundColorInput.value).toBe('blue');

})