import React, { useEffect } from 'react';

export type PokeCardProps = {
  name: string;
  url: string;
};

const PokeCard = ({ name, url }: PokeCardProps) => {
  const pokemonIndex = url.split('/')[url.split('/').length - 2];
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`;

  return (
    <div>
      {name}
      <img src={urlImage} alt="" />
    </div>
  );
};

export default PokeCard;
