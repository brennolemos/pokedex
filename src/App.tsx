import React, { useCallback, useEffect } from "react";
import { HashRouter, Route } from "react-router-dom";

import { Pokemon } from "./model/Pokemon";

import GlobalStyles from "./styles/global";

import Header from "./components/Header";
import PokeList from "./components/PokeList";
import PokeInfos from "./components/PokeInfos";
import Search from "./components/Search";
import Loading from "./components/Loading";
import InfiniteScroll from "./components/InfiniteScroll";

type PokemonProps = {
  results: Pokemon[];
};

const App = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(0);

  const fetchData = useCallback(async () => {
    let response = await Pokemon.fetchAll<PokemonProps>(
      `https://pokeapi.co/api/v2/pokemon?limit=27&offset=${currentPage}`,
    );
    await loadingPokemon(response.results);
    // setPokemonsAux(response.results);
    setLoading(false);
  }, [currentPage]);

  const loadingPokemon = async (data: Pokemon[]) => {
    let _pokemon = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await Pokemon.fetchByUrl<Pokemon>(pokemon.url);
        return new Pokemon({
          id: pokemonRecord.id,
          name: pokemonRecord.name,
          url: pokemonRecord.url,
          types: pokemonRecord.types,
        });
      }),
    );

    setPokemons([...pokemons, ..._pokemon]);
  };

  const fetchMore = () => {
    setCurrentPage((currentPageInsideState) => currentPageInsideState + 27);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <HashRouter basename="/">
      <div className="App">
        <GlobalStyles />
        <Header />
        <main className="container">
          <Route path={"/"} exact>
            <Search search={search} setSearch={setSearch} />
            {loading ? (
              <Loading />
            ) : (
              <>
                <PokeList pokemons={pokemons} search={search} />
                <InfiniteScroll fetchMore={fetchMore} />
              </>
            )}
          </Route>
          <Route path={"/:id"} component={PokeInfos} />
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
