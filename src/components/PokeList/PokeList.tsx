import React, { useState, useEffect } from 'react';

import PokeCard, { PokeCardProps } from '../PokeCard';
import useFetch from '../../helpers/useFetch';
import * as S from './PokeList-styles';

import Loading from '../Loading';

type PokemonProps = {
  results: PokeCardProps[];
};

type PokeListProps = {
  search: string;
  pokemons: PokeCardProps[];
};

const PokeList = ({ search, pokemons }: PokeListProps) => {
  const [filteredData, setFilteredData] =
    useState<PokeCardProps[] | undefined>(undefined);

  useEffect(() => {
    const filteredResults =
      search && pokemons
        ? pokemons.filter((pokemon: PokeCardProps) =>
            pokemon.name.includes(search),
          )
        : pokemons;
    setFilteredData(filteredResults);
  }, [search, pokemons]);

  // if (loading) return <Loading />;
  // if (error) return <div>{error}</div>;
  if (!filteredData) return <div>Não há pokemon para essa pesquisa.</div>;

  return (
    <S.List>
      {filteredData.map((pokemon) => (
        <PokeCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </S.List>
  );
};

export default PokeList;
