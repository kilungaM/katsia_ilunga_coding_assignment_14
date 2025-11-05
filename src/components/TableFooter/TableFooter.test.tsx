import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableFooter } from './TableFooter';

describe('TableFooter Component', () => {
  test('renders table footer and is visible', () => {
    render(
      <table>
        <TableFooter>
          <tr>
            <td>Test Footer</td>
          </tr>
        </TableFooter>
      </table>
    );
    const footerElement = screen.getByTestId('table-footer');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(
      <table>
        <TableFooter disabled={true}>
          <tr>
            <td>Footer</td>
          </tr>
        </TableFooter>
      </table>
    );
    const footerElement = screen.getByTestId('table-footer');
    expect(footerElement).toHaveStyle('background-color: #e0e0e0');
    expect(footerElement).toHaveStyle('cursor: not-allowed');
  });
});
