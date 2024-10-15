import { render, screen } from '@testing-library/react';
import Box from './Box';

it('renders without crashing', () => {
    render(
        <Box
            id="1"
            width={100}
            height={100}
            backgroundColor="blue"
            removeBox={() => { }}
        />
    )
})
it('matches snapshot', () => {
    const { asFragment } = render(
        <Box
            id="1"
            width={100}
            height={100}
            backgroundColor="blue"
            removeBox={() => { }}
        />
    );
    expect(asFragment()).toMatchSnapshot();
})


it('applies the correct styles', () => {
    render(
        <Box
            id="1"
            width={100}
            height={100}
            backgroundColor="blue"
            removeBox={() => { }}
        />
    );

    const boxDiv = screen.getByTestId('box-div');

    expect(boxDiv).toHaveStyle({
        width: '100px',
        height: '100px',
        backgroundColor: 'blue'
    })
});