import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import GlobalStyles from './styles/global';
import { getAllPokemon } from './helpers/utils';

import Header from './components/Header';
import PokeList from './components/PokeList';
import PokeInfos from './components/PokeInfos';
import Search from './components/Search';
import Loading from './components/Loading';

import { PokeCardProps } from './components/PokeCard';

type PokemonProps = {
  results: PokeCardProps[];
};

const App = () => {
  const [pokemons, setPokemons] = React.useState<PokeCardProps[]>([]);
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const fetchData = async () => {
    let response = await getAllPokemon<PokemonProps>(
      'https://pokeapi.co/api/v2/pokemon?limit=100',
    );
    setPokemons(response.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <HashRouter basename="/">
      <div className="App">
        <GlobalStyles />
        <Header />
        <main className="container">
          <Route path={'/'} exact>
            <Search search={search} setSearch={setSearch} />
            {loading ? (
              <Loading />
            ) : (
              <PokeList pokemons={pokemons} search={search} />
            )}
          </Route>
          <Route path={'/:id'} component={PokeInfos} />
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
