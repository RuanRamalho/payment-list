import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonDefault } from './style';

const Button = ({ children, url, resize }) => (
  <ButtonDefault resize={resize}>
    <Link to={url}>{children}</Link>
  </ButtonDefault>
);

export default Button;
