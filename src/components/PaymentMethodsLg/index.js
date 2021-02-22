import React from 'react';
import * as S from './style';
import ButtonMyBank from '../ButtonMyBank';
import onlineBanking from './images/onlineBankingLg.svg';
import cardPayment from './images/cardPaymentLg.svg';
import applePay from './images/applePayLg.svg';

const PaymentMethodsLg = () => (
  <>
    <S.PaymentGlobalLg>
      <S.PaymentTitleLg>
        <h2>Select your payment method</h2>
      </S.PaymentTitleLg>
      <S.PaymentContentLg>
        <S.PaymentOptionsLg>
          <S.PaymentDescriptionLg>
            <p>Online Baking</p>
            <span>save $10</span>
          </S.PaymentDescriptionLg>
          <S.PaymentImagesLg>
            <img src={onlineBanking} alt="Online Bank" />
          </S.PaymentImagesLg>
        </S.PaymentOptionsLg>

        <S.PaymentOptionsLg>
          <S.PaymentDescriptionLg>
            <p>Online Baking</p>
          </S.PaymentDescriptionLg>
          <S.PaymentImagesLg>
            <img src={cardPayment} alt="Card Payment" />
          </S.PaymentImagesLg>
        </S.PaymentOptionsLg>

        <S.PaymentOptionsLg>
          <S.PaymentDescriptionLg>
            <p>Online Baking</p>
          </S.PaymentDescriptionLg>
          <S.PaymentImagesLg>
            <img src={applePay} alt="Apple Play" />
          </S.PaymentImagesLg>
        </S.PaymentOptionsLg>
      </S.PaymentContentLg>
      <ButtonMyBank desktop />
    </S.PaymentGlobalLg>
  </>
);

export default PaymentMethodsLg;
