import React, { useState, useEffect } from 'react';
import Sneaker from '../Sneaker';

const ItemsList = () => {
  const [items, setItems] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await fetch(
        'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json',
      );
      const { results } = await response.json();
      setItems(results);
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
        <div className="row">
          {items.map((item) => (
            <Sneaker
              key={item.id}
              id={item.id}
              thumb={item.thumbnailURL}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ItemsList;
