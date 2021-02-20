import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import BreadCrumbs from '../../components/BreadCrumbs';
import CheckoutInformations from '../../components/CheckoutInformations';

const Checkout = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <BreadCrumbs />
      <CheckoutInformations id={id} />
    </>
  );
};

export default Checkout;
