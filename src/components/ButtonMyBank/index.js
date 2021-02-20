/* eslint-disable no-undef */
import React from 'react';
import * as S from './style';
import RenderMyBank from '../../services/renderMyBank';

const ButtonMyBank = ({ desktop }) => (
  <S.ButtonContent>
    <S.ButtonPayment
      desktop={desktop}
      onClick={() => PayWithMyBank.establish(RenderMyBank)}
    >
      Continue
    </S.ButtonPayment>
  </S.ButtonContent>
);

export default ButtonMyBank;
