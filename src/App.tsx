import React, { useEffect } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import GlobalStyles from './styles/global';
import { getAllPokemon, getPokemon } from './helpers/utils';

import Header from './components/Header';
import PokeList from './components/PokeList';
import PokeInfos from './components/PokeInfos';
import Search from './components/Search';
import Loading from './components/Loading';

import { Pokemon } from './components/PokeCard';

type PokemonProps = {
  results: Pokemon[];
};

const App = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(true);

  const fetchData = async () => {
    let response = await getAllPokemon<PokemonProps>(
      'https://pokeapi.co/api/v2/pokemon?limit=100',
    );
    await loadingPokemon(response.results);
    // setPokemons(response.results);
    setLoading(false);
  };

  const loadingPokemon = async (data: Pokemon[]) => {
    let _pokemon = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon<Pokemon>(pokemon.url);
        console.log(pokemonRecord);
        return pokemonRecord;
      }),
    );

    setPokemons(_pokemon);
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
