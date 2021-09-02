import React, { useState } from 'react';
import * as S from './style';
import ButtonMyBank from '../ButtonMyBank';
import onlineBanking from './images/onlineBanking.svg';
import cardPayment from './images/cardPayment.svg';
import applePay from './images/applePay.svg';

const PaymentMethods = () => {
  const [isOnlineBank, setisOnlineBank] = useState(false);

  return (
    <>
      <S.PaymentGlobal>
        <S.PaymentTitle>
          <h2>Payment method</h2>
        </S.PaymentTitle>
        <S.PaymentContent>
          <S.PaymentOptions onClick={() => setisOnlineBank(true)}>
            <S.PaymentDescription>
              <p>Online Baking</p>
              <span>save $10</span>
            </S.PaymentDescription>
            <S.PaymentImages>
              <img src={onlineBanking} alt="Online Bank" />
            </S.PaymentImages>
          </S.PaymentOptions>

          <S.PaymentOptions onClick={() => setisOnlineBank(false)}>
            <S.PaymentDescription>
              <p>Card Payment</p>
            </S.PaymentDescription>
            <S.PaymentImages>
              <img src={cardPayment} alt="Card Payment" />
            </S.PaymentImages>
          </S.PaymentOptions>

          <S.PaymentOptions onClick={() => setisOnlineBank(false)}>
            <S.PaymentDescription>
              <p>Apple Play</p>
            </S.PaymentDescription>
            <S.PaymentImages>
              <img src={applePay} alt="Apple Play" />
            </S.PaymentImages>
          </S.PaymentOptions>
        </S.PaymentContent>
        <ButtonMyBank disabled={!isOnlineBank} />
      </S.PaymentGlobal>
    </>
  );
};

export default PaymentMethods;
