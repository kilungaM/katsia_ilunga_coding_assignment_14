import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableCell } from './TableCell';

describe('TableCell Component', () => {
  test('renders table cell and is visible', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell>Test Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const cellElement = screen.getByText(/Test Cell/i);
    expect(cellElement).toBeInTheDocument();
    expect(cellElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <tbody>
          <tr>
            <TableCell disabled={true}>Cell</TableCell>
          </tr>
        </tbody>
      </table>
    );
    const cellElement = screen.getByTestId('table-cell');
    expect(cellElement).toHaveStyle('background-color: #f5f5f5');
    expect(cellElement).toHaveStyle('cursor: not-allowed');
  });
});
