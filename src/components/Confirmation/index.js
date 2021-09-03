import React, { useState, useEffect } from 'react';
import * as S from './style';
import Button from '../Button';
import greenBank from './images/greenBank.svg';
import BreadCrumbs from '../BreadCrumbs';

const Confirmation = ({ id }) => {
  const [informations, setInformations] = useState({});

  const loadProducts = async () => {
    try {
      const response = await fetch(
        'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json',
      );
      const { results } = await response.json();
      const data = results.find((item) => item.id === id);
      setInformations(data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <div className="container">
        <BreadCrumbs full />
        <div className="row">
          <div className="col-12 col-md-5">
            <S.ConfirmationImage>
              <img src={informations.maxresURL} alt="Shoes" />
            </S.ConfirmationImage>
          </div>
          <div className="col-12 col-md-7">
            <S.ConfirmationContent>
              <S.ConfirmationSummary>
                <S.ConfirmationDescription>
                  <h1>Order summary</h1>
                  <h2>SS Sneaker</h2>
                  <span>
                    x 1 {informations.color} Size 41 <br /> Item #
                    {informations.id}
                  </span>
                </S.ConfirmationDescription>
                <S.ConfirmationMethod>
                  <h1>Payment Method</h1>
                  <S.MethodContent>
                    <img src={greenBank} alt="Green Bank" />
                    <h2>Online Banking</h2>
                  </S.MethodContent>
                </S.ConfirmationMethod>
              </S.ConfirmationSummary>
              <S.ConfirmationCost>
                <S.CostDelivery>
                  <h2>Total cost</h2>
                  <span>Delivery included</span>
                </S.CostDelivery>
                <h3>${parseFloat(informations.price).toFixed(0)}</h3>
                <Button url="/" resize>
                  Place order
                </Button>
              </S.ConfirmationCost>
            </S.ConfirmationContent>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
