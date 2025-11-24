import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card Component', () => {
  const cardProps = {
    title: 'Test Card',
    image: '/images/test.png',
    tech: ['React', 'CSS'],
    link: 'https://example.com',
  };

  test('renders the title', () => {
    render(<Card description={undefined} extraLines={undefined} {...cardProps} />);
    expect(screen.getByText('Test Card')).toBeInTheDocument();
  });

  test('renders tech list', () => {
    render(<Card description={undefined} extraLines={undefined} {...cardProps} />);

    // Matches the entire tech line
    expect(screen.getByText(/Tech: React, CSS/)).toBeInTheDocument();

    // OR if you want individual checks:
    // expect(screen.getByText((text) => text.includes('React'))).toBeInTheDocument();
    // expect(screen.getByText((text) => text.includes('CSS'))).toBeInTheDocument();
  });

  test('renders View button', () => {
    render(<Card description={undefined} extraLines={undefined} {...cardProps} />);
    expect(screen.getByTestId('button')).toBeInTheDocument();
  });
});
