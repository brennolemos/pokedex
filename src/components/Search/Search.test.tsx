import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Search from './Search';

describe('<Search/> Component', () => {
  it('should render the search input', () => {
    render(<Search search="" setSearch={() => {}} />);

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('should render the text passed as a prop', () => {
    render(<Search search="bulbasaur" setSearch={() => {}} />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('bulbasaur');
  });

  it('should show the text typed', () => {
    const Wrapper = () => {
      const [search, setSearch] = React.useState('');
      return <Search search={search} setSearch={setSearch} />;
    };
    render(<Wrapper />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('');

    userEvent.type(input, 'bulbasaur');
    expect(input).toHaveValue('bulbasaur');
  });
});
