import React, { useEffect, useState } from 'react';

import typeColors from '../../helpers/typeColors';

export type PokeCardProps = {
  name: string;
  url: string;
};

const PokeCard = ({ name, url }: PokeCardProps) => {
  const pokemonIndex = url.split('/')[url.split('/').length - 2];
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`;

  const [poketype, setPokeType] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`,
      );
      const data = await response.json();
      setPokeType(data.types[0].type.name);
    };

    loadData();
  }, []);

  return (
    <div style={{ backgroundColor: `${typeColors[poketype]}AA` }}>
      {name}
      <img src={urlImage} alt="" />
    </div>
  );
};

export default PokeCard;
