import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import PokeCard from './PokeCard';

describe('PokeCard component', () => {
  it('should show the infos', async () => {
    render(
      <HashRouter>
        <PokeCard name="bulbasaur" url="https://pokeapi.co/api/v2/pokemon/1/" />
      </HashRouter>,
    );

    const title = await screen.findByRole('heading', { name: /bulbasaur/i });
    expect(title).toBeInTheDocument();

    const id = await screen.findByText('#001');
    expect(id).toBeInTheDocument();

    const image = await screen.findByAltText('bulbasaur');
    expect(image).toBeInTheDocument();
  });
});
