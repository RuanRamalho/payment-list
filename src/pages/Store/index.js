import React, { useState, useEffect } from 'react';
import Sneaker from '../../components/Sneaker';
import Header from '../../components/Header';

const Store = () => {
  const [items, setItems] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await fetch(
        'http://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json',
      );
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <Header />
      <Sneaker />
      {console.log(items)};
    </>
  );
};

export default Store;
