import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  test('renders card and is visible', () => {
    render(
      <Card>
        <h3>Test Card</h3>
        <p>Test content</p>
      </Card>
    );
    const heading = screen.getByText(/test card/i);
    const content = screen.getByText(/test content/i);
    expect(heading).toBeVisible();
    expect(content).toBeVisible();
  });

  test('changes background color when disabled', () => {
    const { container } = render(
      <Card disabled={true}>
        <p>Disabled card</p>
      </Card>
    );
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveStyle({
      backgroundColor: '#e0e0e0',
      opacity: '0.6',
      cursor: 'not-allowed',
    });
  });
});
