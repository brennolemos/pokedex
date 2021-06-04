import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from './Header-styles';

const Header = () => {
  return (
    <S.Header>
      <NavLink to="/">
        <h1>Pokedex</h1>
      </NavLink>
    </S.Header>
  );
};

export default Header;
