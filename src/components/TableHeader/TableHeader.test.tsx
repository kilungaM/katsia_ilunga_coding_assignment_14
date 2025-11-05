import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableHeader } from './TableHeader';

describe('TableHeader Component', () => {
  test('renders table header and is visible', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeader>Test Header</TableHeader>
          </tr>
        </thead>
      </table>
    );
    const headerElement = screen.getByText(/Test Header/i);
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <thead>
          <tr>
            <TableHeader disabled={true}>Header</TableHeader>
          </tr>
        </thead>
      </table>
    );
    const headerElement = screen.getByTestId('table-header');
    expect(headerElement).toHaveStyle('background-color: #e0e0e0');
    expect(headerElement).toHaveStyle('cursor: not-allowed');
  });
});
