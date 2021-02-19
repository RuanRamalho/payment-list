import styled from 'styled-components';
import { colors, fontSizes, media } from '../../tokens';

export const CheckoutGlobal = styled.div`
  background: ${colors.lightGray};
  border-radius: 9px;
  padding: 15px 10px;

  h2,
  h3,
  h4,
  h5 {
    margin-bottom: 0;
  }

  ${media.lg} {
    background: none;
  }
`;

export const CheckoutImageContent = styled.div`
  ${media.lg} {
    margin-right: 9px;
    border-radius: 9px;
  }
`;

export const CheckoutImage = styled.div`
  height: 100%;

  img {
    width: 100%;
    height: 100px;
    border-radius: 9px;
  }

  ${media.md} {
    img {
      height: 180px;
    }
  }

  ${media.lg} {
    img {
      height: 100%;
    }
  }
`;

export const CheckoutCost = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h4 {
    font-size: ${fontSizes.small}px;
  }

  span {
    font-size: ${fontSizes.xsmall}px;
    color: ${colors.gray};
  }

  ${media.lg} {
    display: none;
  }
`;

export const CheckoutDescription = styled.div`
  h2 {
    font-size: ${fontSizes.large}px;
  }

  h3 {
    margin-top: 15px;
    font-size: ${fontSizes.small}px;
  }

  h4 {
    text-align: end;
    font-size: ${fontSizes.xxlarge}px;
    margin-top: 20px;
  }

  span {
    font-size: ${fontSizes.small}px;
    color: ${colors.gray};
  }

  ${media.lg} {
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    background: #f2f2f2;
    border-radius: 9px;

    h1 {
      font-size: ${fontSizes.xlarge}px;
      margin-bottom: 15px;
    }

    h2 {
      font-size: ${fontSizes.small}px;
    }

    h4 {
      font-size: ${fontSizes.medium}px;
      text-align: inherit;
    }
  }
`;

export const CheckoutCart = styled.div`
  h1 {
    display: none;
  }

  ${media.lg} {
    h1 {
      display: block;
    }
  }
`;

export const CheckoutDetails = styled.div`
  h5 {
    text-align: end;
    font-size: ${fontSizes.xxlarge}px;
    margin-top: 20px;
  }

  ${media.lg} {
    h5 {
      font-size: ${fontSizes.xxlarge}px;
      margin-left: 20px;
    }
  }
`;

export const CheckoutDeliveryContent = styled.div`
  ${media.lg} {
    display: flex;
    align-items: center;
  }
`;

export const CheckoutDelivery = styled.div`
  display: none;

  ${media.lg} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    display: block;
  }
`;
