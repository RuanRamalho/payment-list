import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonDefault } from './style';

const Button = ({ children, id }) => (
  <ButtonDefault>
    <Link to={`/checkout/${id}`}>{children}</Link>
  </ButtonDefault>
);

export default Button;
