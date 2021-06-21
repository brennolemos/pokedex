import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from '.';

describe('<ProgressBar/> Component', () => {
  it('should render the number passed as prop', () => {
    render(<ProgressBar now={50} />);

    expect(screen.getByText('50')).toBeInTheDocument();
  });

  it('should have the width based in number passed as prop', () => {
    render(<ProgressBar now={50} />);

    expect(screen.getByText('50')).toHaveStyle({ width: '50%' });
  });
});
