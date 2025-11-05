import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from './Table';

describe('Table Component', () => {
  test('renders table and is visible', () => {
    render(
      <Table>
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
    );
    const tableElement = screen.getByTestId('table');
    expect(tableElement).toBeInTheDocument();
    expect(tableElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(
      <Table disabled={true}>
        <tbody>
          <tr>
            <td>Test</td>
          </tr>
        </tbody>
      </Table>
    );
    const tableElement = screen.getByTestId('table');
    expect(tableElement).toHaveStyle('background-color: #f5f5f5');
    expect(tableElement).toHaveStyle('cursor: not-allowed');
  });
});
