import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './PokeInfos-styles';
import Badge from '../Badge';
import typeColors from '../../helpers/typeColors';

type ParamsProps = {
  id: string;
};

type PokeInfosProps = {
  name: string;
  height: number;
  weight: number;
  types: TypesProps[];
  abilities: Abilities[];
};

type TypesProps = {
  type: {
    name: string;
  };
};

type Abilities = {
  ability: {
    name: string;
  };
};

const PokeInfos = () => {
  const { id } = useParams<ParamsProps>();
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const [pokeInfos, setPokeInfos] = useState<PokeInfosProps | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokeInfos(data);
    };

    loadData();
  }, [id]);

  if (pokeInfos)
    return (
      <S.Infos>
        <S.Column
          style={{
            backgroundColor: `${typeColors[pokeInfos.types[0].type.name]}BB`,
          }}
        >
          <S.Id>#{id.padStart(3, '0')}</S.Id>
          <S.Title>{pokeInfos?.name}</S.Title>
          {pokeInfos.types.map((slot) => (
            <Badge key={slot.type.name} type={slot.type.name} />
          ))}
          <S.Image src={urlImage} alt="" />
        </S.Column>
        <S.Column>
          <p> Height: {pokeInfos.height}</p>
          <p> Weight: {pokeInfos.weight}</p>
          <p>
            Abilities:{' '}
            {pokeInfos.abilities.map((slot) => (
              <span key={slot.ability.name}>{slot.ability.name},</span>
            ))}
          </p>
        </S.Column>
      </S.Infos>
    );

  return null;
};

export default PokeInfos;
