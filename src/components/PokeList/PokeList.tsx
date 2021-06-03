import React, { useState, useEffect } from 'react';
import PokeCard, { PokeCardProps } from '../PokeCard';

const PokeList = () => {
  const [data, setData] = useState<PokeCardProps[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=100',
      );
      const infos = await response.json();
      setData(infos.results);
    };

    loadData();
  }, []);

  return (
    <section>
      {data?.map((pokemon) => (
        <PokeCard name={pokemon.name} />
      ))}
    </section>
  );
};

export default PokeList;
