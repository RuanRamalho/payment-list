import styled from 'styled-components';
import { colors, fontSizes } from '../../tokens';

export const SneakerCard = styled.div`
  width: 297.32px;
  height: 373px;
  box-shadow: 5px 6px 17px 1px ${colors.lightGray};
  border-radius: 8px;
`;

export const SneakerImage = styled.img`
  width: 100%;
`;

export const SneakerDescription = styled.div`
  h1 {
    font-size: ${fontSizes.large}px;
    text-align: center;
    margin: 15px 0;
    font-weight: 400;
  }

  h2 {
    font-size: ${fontSizes.xlarge}px;
    text-align: center;
    margin: 20px;
  }

  label,
  select {
    color: ${colors.gray};
    font-size: ${fontSizes.small}px;
  }

  label {
    margin-bottom: 0;
  }

  select {
    border-radius: 14px;
    margin-left: 5px;
    padding: 0 15px;
    border: 1px solid ${colors.lightGray};
  }
`;

export const SneakerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
`;
