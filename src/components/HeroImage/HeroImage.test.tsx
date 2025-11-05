import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage Component', () => {
  test('renders hero image and is visible', () => {
    render(<HeroImage src="hero.jpg" alt="Hero image" title="Test Title" />);
    const img = screen.getByRole('img', { name: /hero image/i });
    const title = screen.getByText(/test title/i);
    expect(img).toBeVisible();
    expect(title).toBeVisible();
  });

  test('changes style when disabled', () => {
    render(<HeroImage src="hero.jpg" alt="Hero image" title="Test Title" disabled={true} />);
    const container = screen.getByRole('img').parentElement;
    expect(container).toHaveStyle({
      opacity: '0.5',
      cursor: 'not-allowed',
      filter: 'grayscale(100%)',
    });
  });
});
