import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  test('renders button and is visible', () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Button label="Disabled Button" disabled={true} />);
    const buttonElement = screen.getByTestId('button');
    expect(buttonElement).toHaveStyle('background-color: #cccccc');
    expect(buttonElement).toHaveStyle('cursor: not-allowed');
  });
});
