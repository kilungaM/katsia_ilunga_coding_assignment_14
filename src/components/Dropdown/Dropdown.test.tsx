import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dropdown } from './Dropdown';

describe('Dropdown Component', () => {
  test('renders dropdown and is visible', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} />);
    const dropdownElement = screen.getByTestId('dropdown');
    expect(dropdownElement).toBeInTheDocument();
    expect(dropdownElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Dropdown options={['Option 1']} disabled={true} />);
    const dropdownElement = screen.getByTestId('dropdown');
    expect(dropdownElement).toHaveStyle('background-color: #e0e0e0');
    expect(dropdownElement).toHaveStyle('cursor: not-allowed');
  });
});
