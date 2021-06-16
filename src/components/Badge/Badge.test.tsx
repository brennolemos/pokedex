import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';
import typeColors from '../../helpers/typeColors';

it('should render the text passed as prop', () => {
  render(<Badge type="fire" />);

  const badge = screen.getByText('Fire');
  expect(badge).toBeInTheDocument();
});

it('should render the correct color', () => {
  render(<Badge type="fire" />);

  const badge = screen.getByText('Fire');
  expect(badge).toHaveStyle({ backgroundColor: typeColors.fire });
});

it('should render the correct color when the type is not in typeColors object', () => {
  render(<Badge type="bazinga" />);

  const badge = screen.getByText('Bazinga');
  expect(badge).toHaveStyle({ backgroundColor: '#5d5e60' });
});
