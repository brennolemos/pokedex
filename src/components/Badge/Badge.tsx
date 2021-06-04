import React from 'react';

import * as S from './Badge-styles';
import typeColors from '../../helpers/typeColors';

type BadgeProps = {
  type: string;
};

const Badge = ({ type }: BadgeProps) => {
  return (
    <S.Badge style={{ backgroundColor: typeColors[type] }}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </S.Badge>
  );
};

export default Badge;
