import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import * as S from "./PokeCard-styles";
import typeColors from "../../helpers/typeColors";

import Badge from "../Badge";
import { Pokemon } from "../../model/Pokemon";

export type PokeCardProps = {
  pokemon: Pokemon;
};

const PokeCard = ({ pokemon }: PokeCardProps) => {
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <NavLink to={`/${pokemon.id}`}>
      <S.Card
        style={{
          backgroundColor: `${typeColors[pokemon.types[0].type.name]}AA`,
        }}
      >
        <div>
          <S.Id>#{pokemon.id.toString().padStart(3, "0")}</S.Id>
          <S.Title>{pokemon.name}</S.Title>
          {pokemon.types.map((slot) => (
            <Badge key={slot.type.name} type={slot.type.name} />
          ))}
        </div>
        <S.Image src={urlImage} alt={pokemon.name} />
      </S.Card>
    </NavLink>
  );
};

export default memo(PokeCard);
