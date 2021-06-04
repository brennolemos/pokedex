import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';

it('should render the text passed as prop', () => {
  render(<Badge type="fire" />);

  const badge = screen.getByText('Fire');
  expect(badge).toBeInTheDocument();
});
