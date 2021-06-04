import React, { useState, useEffect } from 'react';

import PokeCard, { PokeCardProps } from '../PokeCard';
import * as S from './PokeList-styles';

const PokeList = () => {
  const [data, setData] = useState<PokeCardProps[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=25',
      );
      const infos = await response.json();
      setData(infos.results);
    };

    loadData();
  }, []);

  return (
    <S.List>
      {data?.map((pokemon) => (
        <PokeCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
      ))}
    </S.List>
  );
};

export default PokeList;
