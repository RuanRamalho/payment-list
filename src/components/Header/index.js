import React from 'react';
import * as S from './style';
import perfil from './images/perfil.png';

const Header = () => (
  <>
    <div className="container">
      <S.Header>
        <S.HeaderImage src={perfil} alt="Perfil" />
      </S.Header>
    </div>
  </>
);

export default Header;
