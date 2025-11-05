import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Text } from './Text';

describe('Text Component', () => {
  test('renders text and is visible', () => {
    render(<Text content="Test Text" />);
    const textElement = screen.getByText(/Test Text/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Text content="Disabled" disabled={true} />);
    const textElement = screen.getByTestId('text');
    expect(textElement).toHaveStyle('background-color: #f5f5f5');
    expect(textElement).toHaveStyle('cursor: not-allowed');
  });
});
