import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './PokeInfos-styles';
import typeColors from '../../helpers/typeColors';
import { capitalize } from '../../helpers/utils';

import Badge from '../Badge';
import Loading from '../Loading';
import ProgressBar from '../ProgressBar';

type ParamsProps = {
  id: string;
};

type PokeInfosProps = {
  name: string;
  height: number;
  weight: number;
  types: TypesProps[];
  abilities: Abilities[];
  stats: Stats[];
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

type Stats = {
  base_stat: number;
  stat: {
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
      console.log({ data });
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
          <p> Height: {pokeInfos.height / 10} m</p>
          <p> Weight: {pokeInfos.weight / 10} kg</p>
          <p>
            Abilities:
            {pokeInfos.abilities.map((slot) => (
              <span key={slot.ability.name}>
                {capitalize(slot.ability.name)},
              </span>
            ))}
          </p>
          <h2>Stats:</h2>
          {pokeInfos.stats.map((slot) => (
            <div
              style={{
                marginBottom: '.5rem',
              }}
              key={slot.stat.name}
            >
              <p>{capitalize(slot.stat.name)}:</p>
              <ProgressBar now={slot.base_stat} />
            </div>
          ))}
        </S.Column>
      </S.Infos>
    );

  return <Loading />;
};

export default PokeInfos;
