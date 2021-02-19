/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import * as S from './style';

const CheckoutInformations = ({ id }) => {
  const [informations, setInformations] = useState({});

  const loadProducts = async () => {
    try {
      const response = await fetch(
        'http://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json',
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
        <S.CheckoutGlobal>
          <div className="row">
            <div className="col-5 d-flex flex-column">
              <S.CheckoutImage>
                <img src={informations.maxresURL} alt="Shoes Image" />
              </S.CheckoutImage>
              <S.CheckoutCost>
                <h4>Total cost</h4>
                <span>Delivery included</span>
              </S.CheckoutCost>
            </div>
            <div className="col-7">
              <S.CheckoutDescription>
                <S.CheckoutCart>
                  <h1>Cart Total</h1>
                  <h2>{informations.description}</h2>
                  <span>
                    x 1, {informations.color}, Size 41 <br />
                    Item {informations.id}
                  </span>
                </S.CheckoutCart>
                <S.CheckoutDetails>
                  <h3>Delivery details</h3>
                  <span>John Smith</span> <br />
                  <span>Phone no: 01312428200</span> <br />
                  <span>Address: Redwood City, 2000.</span>
                  <S.CheckoutDeliveryContent>
                    <S.CheckoutDelivery>
                      <h4>Total cost</h4>
                      <span>Delivery included</span>
                    </S.CheckoutDelivery>
                    <h5>${informations.price}</h5>
                  </S.CheckoutDeliveryContent>
                </S.CheckoutDetails>
              </S.CheckoutDescription>
            </div>
          </div>
        </S.CheckoutGlobal>
      </div>
    </>
  );
};

export default CheckoutInformations;
