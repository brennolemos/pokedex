import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './PokeCard-styles';
import typeColors from '../../helpers/typeColors';
import Badge from '../Badge';

export type PokeCardProps = {
  name: string;
  url: string;
};

type TypesProps = {
  type: {
    name: string;
  };
};

const PokeCard = ({ name, url }: PokeCardProps) => {
  const pokemonIndex = url.split('/')[url.split('/').length - 2];
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`;

  const [poketypes, setPokeTypes] = useState<TypesProps[] | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`,
      );
      const data = await response.json();
      setPokeTypes(data.types);
    };

    loadData();
  }, [pokemonIndex]);

  return poketypes ? (
    <NavLink to={`/${pokemonIndex}`}>
      <S.Card
        style={{ backgroundColor: `${typeColors[poketypes[0].type.name]}AA` }}
      >
        <div>
          <S.Id>#{pokemonIndex.padStart(3, '0')}</S.Id>
          <S.Title>{name}</S.Title>
          {poketypes.map((slot) => (
            <Badge key={slot.type.name} type={slot.type.name} />
          ))}
        </div>
        <S.Image src={urlImage} alt="" />
      </S.Card>
    </NavLink>
  ) : (
    <p>Loading...</p>
  );
};

export default PokeCard;
