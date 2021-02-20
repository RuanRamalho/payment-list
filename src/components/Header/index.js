import React from 'react';
import * as S from './style';
import perfil from './images/perfil.png';
import arrow from './images/arrow.svg';

const Header = ({ children, none, flex }) => (
  <>
    <S.Header none={none}>
      <div className="container">
        <S.HeaderContent flex={flex}>
          <S.BackButton none={none} href="/">
            <img src={arrow} alt="seta" />
            <span>Back</span>
          </S.BackButton>
          <S.PageTitle>{children}</S.PageTitle>
          <S.HeaderImage src={perfil} alt="Perfil" />
        </S.HeaderContent>
      </div>
    </S.Header>
  </>
);

export default Header;
