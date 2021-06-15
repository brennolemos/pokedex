import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './Header-styles';

const Header = () => {
  return (
    <S.Header>
      <NavLink to="/">
        <S.Logo>Pokedex</S.Logo>
      </NavLink>
    </S.Header>
  );
};

export default Header;
