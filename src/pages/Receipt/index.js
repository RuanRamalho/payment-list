import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Confirmation from '../../components/Confirmation';

const Receipt = () => {
  const { id } = useParams();

  return (
    <>
      <Header>Review and Confirmation</Header>
      <Confirmation id={id} />
      {console.log(id)};
    </>
  );
};

export default Receipt;
