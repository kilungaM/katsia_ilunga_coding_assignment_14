import { render, screen } from '@testing-library/react';
import { Img } from './Img';

describe('Img Component', () => {
  test('renders image and is visible', () => {
    render(<Img src="test.jpg" alt="Test image" />);
    const img = screen.getByRole('img', { name: /test image/i });
    expect(img).toBeVisible();
  });

  test('changes style when disabled', () => {
    render(<Img src="test.jpg" alt="Test image" disabled={true} />);
    const img = screen.getByRole('img', { name: /test image/i });
    expect(img).toHaveStyle({
      opacity: '0.5',
      cursor: 'not-allowed',
      filter: 'grayscale(100%)',
    });
  });
});
