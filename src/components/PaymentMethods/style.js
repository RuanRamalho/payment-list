import styled from 'styled-components';
import { colors, fontSizes, media } from '../../tokens';

export const PaymentGlobal = styled.div`
  display: block;

  ${media.lg} {
    display: none;
  }
`;

export const PaymentTitle = styled.div`
  h2 {
    font-size: ${fontSizes.medium}px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`;

export const PaymentContent = styled.div`
  background: ${colors.lightGray};
  padding: 20px;
  border-radius: 9px;
  margin-bottom: 15px;
`;

export const PaymentOptions = styled.div`
  display: flex;
  background: ${colors.white};
  border-radius: 9px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 17px;
  height: 60px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const PaymentDescription = styled.div`
  p {
    margin-bottom: 0;
    font-size: ${fontSizes.small}px;
  }

  span {
    background: ${colors.golden};
    border-radius: 5px;
    padding: 1px 10px;
    font-weight: bold;
    color: ${colors.hacienda};
    text-transform: uppercase;
    font-size: ${fontSizes.xxsmall}px;
  }
`;

export const PaymentImages = styled.div`
  img {
    width: 100%;
  }
`;
