import styled from 'styled-components';
import { colors } from '../../tokens';

export const ButtonContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonPayment = styled.button`
  width: ${(props) => (props.desktop ? '67%' : '100%')};
  background: ${colors.darkGreen};
  color: ${colors.white};
  height: 41px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  display: flex;
  border: none;

  &:disabled {
    background: #c9c9c9;
    cursor: not-allowed;
  }
`;
