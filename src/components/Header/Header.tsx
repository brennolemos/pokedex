import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github } from '@styled-icons/fa-brands';

import * as S from './Header-styles';

const Header = () => {
  return (
    <S.Header>
      <NavLink to="/">
        <S.Logo>Pokedex</S.Logo>
      </NavLink>

      <a
        href="https://github.com/brennolemos/pokedex"
        target="_blank"
        rel="noreferrer"
      >
        <Github title="Github" size="32" color="var(--gray-2)" />
      </a>
    </S.Header>
  );
};

export default Header;
