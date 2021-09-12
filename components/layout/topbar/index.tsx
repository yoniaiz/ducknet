import React from 'react';
import Actions from './components/actions';
import Logo from './components/logo';
import { Links } from './components/links';
import * as S from './topbar.style';

const TopBar = () => {
  return (
    <S.Header position="static">
      <S.Toolbar>
        <Logo />
        <S.Nav>
          <Links />
        </S.Nav>
        <Actions />
      </S.Toolbar>
    </S.Header>
  );
};

export default TopBar;
