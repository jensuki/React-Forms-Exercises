import { render } from '@testing-library/react';
import App from './App';

it('should render without crashing', () => {
  render(<App />)
})

it('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
})

