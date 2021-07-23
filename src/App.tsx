import React, { useCallback, useEffect, useRef } from "react";
import { HashRouter, Route } from "react-router-dom";

import GlobalStyles from "./styles/global";
import { getAllPokemon, getPokemon } from "./helpers/utils";

import Header from "./components/Header";
import PokeList from "./components/PokeList";
import PokeInfos from "./components/PokeInfos";
import Search from "./components/Search";
import Loading from "./components/Loading";
import InfiniteScroll from "./components/InfiniteScroll";

import { Pokemon } from "./components/PokeCard";

type PokemonProps = {
  results: Pokemon[];
};

const App = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [pokemonsAux, setPokemonsAux] = React.useState<Pokemon[]>([]);
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(0);

  const fetchData = useCallback(async () => {
    let response = await getAllPokemon<PokemonProps>(
      `https://pokeapi.co/api/v2/pokemon?limit=27&offset=${currentPage}`
    );
    await loadingPokemon([...response.results, ...pokemonsAux]);
    setPokemonsAux(response.results);
    setLoading(false);
  }, [currentPage]);

  const loadingPokemon = async (data: Pokemon[]) => {
    let _pokemon = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon<Pokemon>(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemons(_pokemon);
  };

  const fetchMore = () => {
    // setLoading(true);
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
            {loading && <Loading />}

            <PokeList pokemons={pokemons} search={search} />
            <InfiniteScroll fetchMore={fetchMore} />
          </Route>
          <Route path={"/:id"} component={PokeInfos} />
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
