import React from 'react';
import { render, screen } from '@testing-library/react';
import { createHashHistory } from 'history';

import PokeInfos from './PokeInfos';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

describe('PokeInfos component', () => {
  it('should show the infos', async () => {
    const history = createHashHistory();
    history.push('/1');
    render(<PokeInfos />);

    const title = await screen.findByRole('heading', { name: /bulbasaur/i });
    expect(title).toBeInTheDocument();

    const id = await screen.findByText('#001');
    expect(id).toBeInTheDocument();

    const image = await screen.findByAltText('bulbasaur');
    expect(image).toBeInTheDocument();
  });
});
