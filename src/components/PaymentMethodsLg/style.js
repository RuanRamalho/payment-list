import styled from 'styled-components';
import { colors, fontSizes, media } from '../../tokens';

export const PaymentGlobalLg = styled.div`
  display: none;

  ${media.lg} {
    display: block;
  }
`;

export const PaymentTitleLg = styled.div`
  ${media.lg} {
    display: block;
    margin-bottom: 21px;

    h2 {
      font-size: ${fontSizes.xlarge}px;
      font-weight: 400;
      margin-top: 30px;
    }
  }
`;

export const PaymentContentLg = styled.div`
  ${media.lg} {
    display: block;
    border-radius: 9px;
    margin-bottom: 15px;
  }
`;

export const PaymentOptionsLg = styled.div`
  ${media.lg} {
    display: flex;
    background: ${colors.white};
    border-radius: 9px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding: 0 17px;
    height: 60px;

    &:first-child {
      border: 2px solid ${colors.green};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const PaymentDescriptionLg = styled.div`
  ${media.lg} {
    position: relative;

    p {
      margin-bottom: 0;
      font-size: ${fontSizes.medium}px;
    }

    span {
      background: ${colors.golden};
      border-radius: 5px;
      padding: 1px 10px;
      font-weight: bold;
      color: ${colors.hacienda};
      text-transform: uppercase;
      font-size: ${fontSizes.xxsmall}px !important;
      position: absolute;
      top: -27px;
    }
  }
`;

export const PaymentImagesLg = styled.div`
  ${media.lg} {
    img {
      width: 100%;
    }
  }
`;
