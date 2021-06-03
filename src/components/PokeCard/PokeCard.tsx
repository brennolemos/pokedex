import React from 'react';

export type PokeCardProps = {
  name: string;
};

const PokeCard = ({ name }: PokeCardProps) => {
  return <div>{name}</div>;
};

export default PokeCard;
