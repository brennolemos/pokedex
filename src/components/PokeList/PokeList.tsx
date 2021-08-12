import React, { useState, useEffect } from "react";

import PokeCard, { Pokemon } from "../PokeCard";
// import useFetch from '../../helpers/useFetch';
import * as S from "./PokeList-styles";

// import Loading from '../Loading';

// type PokemonProps = {
//   results: Pokemon[];
// };

type PokeListProps = {
  search: string;
  pokemons: Pokemon[];
};

const PokeList = ({ search, pokemons }: PokeListProps) => {
  const [filteredData, setFilteredData] = useState<Pokemon[] | undefined>(
    undefined
  );

  useEffect(() => {
    const filteredResults =
      search && pokemons
        ? pokemons.filter((pokemon: Pokemon) => pokemon.name.includes(search))
        : pokemons;
    setFilteredData(filteredResults);
  }, [search, pokemons]);

  // if (loading) return <Loading />;
  // if (error) return <div>{error}</div>;
  if (!filteredData) return <div>Não há pokemon para essa pesquisa.</div>;

  return (
    <S.List>
      {filteredData.map((pokemon) => (
        <PokeCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </S.List>
  );
};

export default PokeList;
