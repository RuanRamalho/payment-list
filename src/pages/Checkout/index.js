import React from 'react';
import { useParams } from 'react-router-dom';
import CheckoutInformations from '../../components/CheckoutInformations';
import Header from '../../components/Header';

const Checkout = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <CheckoutInformations id={id} />
    </>
  );
};

export default Checkout;
