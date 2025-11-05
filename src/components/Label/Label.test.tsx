import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Label } from './Label';

describe('Label Component', () => {
  test('renders label and is visible', () => {
    render(<Label text="Test Label" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Label text="Disabled" disabled={true} />);
    const labelElement = screen.getByTestId('label');
    expect(labelElement).toHaveStyle('background-color: #f0f0f0');
    expect(labelElement).toHaveStyle('cursor: not-allowed');
  });
});
