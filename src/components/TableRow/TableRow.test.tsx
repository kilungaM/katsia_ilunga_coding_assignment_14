import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableRow } from './TableRow';

describe('TableRow Component', () => {
  test('renders table row and is visible', () => {
    render(
      <table>
        <tbody>
          <TableRow>
            <td>Test</td>
          </TableRow>
        </tbody>
      </table>
    );
    const rowElement = screen.getByTestId('table-row');
    expect(rowElement).toBeInTheDocument();
    expect(rowElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <tbody>
          <TableRow disabled={true}>
            <td>Test</td>
          </TableRow>
        </tbody>
      </table>
    );
    const rowElement = screen.getByTestId('table-row');
    expect(rowElement).toHaveStyle('background-color: #f5f5f5');
    expect(rowElement).toHaveStyle('cursor: not-allowed');
  });
});
