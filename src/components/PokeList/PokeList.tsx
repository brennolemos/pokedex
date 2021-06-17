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
};

const PokeList = ({ search }: PokeListProps) => {
  const [filteredData, setFilteredData] =
    useState<PokeCardProps[] | undefined>(undefined);
  const { data, loading, error } = useFetch<PokemonProps | null>(
    'https://pokeapi.co/api/v2/pokemon?limit=25',
  );

  useEffect(() => {
    const filteredResults =
      search && data
        ? data.results.filter((pokemon: PokeCardProps) =>
            pokemon.name.includes(search),
          )
        : data?.results;

    setFilteredData(filteredResults);
  }, [search, data]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
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
