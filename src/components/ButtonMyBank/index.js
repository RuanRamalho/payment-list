/* eslint-disable no-undef */
import React from 'react';
import * as S from './style';
import RenderMyBank from '../../services/renderMyBank';
import '../../services/checkApproval';

const ButtonMyBank = ({ desktop, disabled }) => (
  <S.ButtonContent>
    <S.ButtonPayment
      disabled={disabled}
      desktop={desktop}
      onClick={() => PayWithMyBank.establish(RenderMyBank)}
    >
      Continue
    </S.ButtonPayment>
  </S.ButtonContent>
);

export default ButtonMyBank;
