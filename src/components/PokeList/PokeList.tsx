import React, { useState, useEffect } from 'react';

import PokeCard, { PokeCardProps } from '../PokeCard';
import * as S from './PokeList-styles';

import Loading from '../Loading';

type PokeListProps = {
  search: string;
};

const PokeList = ({ search }: PokeListProps) => {
  const [data, setData] = useState<PokeCardProps[]>([]);
  const [filteredData, setFilteredData] = useState<PokeCardProps[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=25`,
      );
      const infos = await response.json();

      setData(infos.results);
    };

    loadData();
  }, []);

  useEffect(() => {
    const filteredResults = search
      ? data?.filter((pokemon: PokeCardProps) => pokemon.name.includes(search))
      : data;

    setFilteredData(filteredResults);
  }, [search, data]);

  return (
    <S.List>
      {filteredData ? (
        filteredData.map((pokemon) => (
          <PokeCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))
      ) : (
        <Loading />
      )}
    </S.List>
  );
};

export default PokeList;
