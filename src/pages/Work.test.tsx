import React from 'react';
import { render, screen } from '@testing-library/react';
import Work from './Work';

describe('Work Page', () => {
  test('renders page heading', () => {
    render(<Work />);
    expect(screen.getByText('My Work')).toBeInTheDocument();
  });

  test('renders project cards', () => {
    render(<Work />);
    // Check if a known project title appears
    expect(screen.getByText('Portfolio Website')).toBeInTheDocument();
    expect(screen.getByText('CRM')).toBeInTheDocument();
    expect(screen.getByText('MealDB Rails Project')).toBeInTheDocument();
  });
});
