import React from 'react';
import { ButtonDefault } from './style';

const Button = ({ url, children }) => (
  <ButtonDefault href={url}>{children}</ButtonDefault>
);

export default Button;
