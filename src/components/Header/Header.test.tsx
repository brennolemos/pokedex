import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Header from '.';

describe('<Header/> Component', () => {
  it('should render links', () => {
    render(
      <HashRouter>
        <Header />
      </HashRouter>,
    );

    const mainLink = screen.getByRole('link', { name: /pokedex/i });
    expect(mainLink).toBeInTheDocument();

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toBeInTheDocument();
  });
});
