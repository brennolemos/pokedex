import React, { useState, useEffect } from 'react';

import PokeCard, { PokeCardProps } from '../PokeCard';
import useFetch from '../../helpers/useFetch';
import * as S from './PokeList-styles';

import Loading from '../Loading';

type PokeListProps = {
  search: string;
};

const PokeList = ({ search }: PokeListProps) => {
  const [filteredData, setFilteredData] = useState<PokeCardProps[]>([]);
  const { data, loading, error } = useFetch(
    'https://pokeapi.co/api/v2/pokemon?limit=25',
  );

  useEffect(() => {
    const filteredResults =
      search && data
        ? data.filter((pokemon: PokeCardProps) => pokemon.name.includes(search))
        : data;

    setFilteredData(filteredResults);
  }, [search, data]);

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (!filteredData.length)
    return <div>Não há pokemon para essa pesquisa.</div>;

  return (
    <S.List>
      {filteredData.map((pokemon) => (
        <PokeCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </S.List>
  );
};

export default PokeList;
