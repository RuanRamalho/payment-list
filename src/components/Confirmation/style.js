import styled from 'styled-components';
import { colors, fontSizes, media } from '../../tokens';

export const ConfirmationContent = styled.div`
  background: ${colors.lightGray};
  height: 100%;
  padding: 30px;
  border-radius: 11px;

  h1 {
    font-size: ${fontSizes.large}px;
  }

  h2 {
    font-size: ${fontSizes.large}px;
    font-weight: 400;
  }

  span {
    font-size: ${fontSizes.medium}px;
    color: ${colors.gray};
  }

  ${media.md} {
    padding-top: 64px;
  }
`;

export const ConfirmationSummary = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ConfirmationImage = styled.div`
  margin-bottom: 20px;

  img {
    width: 100%;
    border-radius: 11px;
  }

  ${media.md} {
    margin-bottom: 0;
  }
`;

export const ConfirmationDescription = styled.div``;

export const ConfirmationMethod = styled.div``;

export const MethodContent = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin-left: 12px;
    margin-bottom: 0;
  }
`;

export const ConfirmationCost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 83px;

  h2 {
    text-align: center;
  }

  h3 {
    font-size: ${fontSizes.xlarge}px;
  }

  ${media.md} {
    flex-direction: row;
    justify-content: space-between;

    h3 {
      font-size: ${fontSizes.huge}px;
    }
  }
`;

export const CostDelivery = styled.div``;
