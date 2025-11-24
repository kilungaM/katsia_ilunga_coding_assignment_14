import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio homepage', () => {
  render(<App />);

  const elements = screen.getAllByText(/welcome to my portfolio/i);
  expect(elements.length).toBeGreaterThan(0);
});
