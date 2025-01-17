import styled from 'styled-components';
import { colors } from '../../tokens';

export const ButtonDefault = styled.div`
  width: 100%;
  width: ${(props) => (props.resize ? '302px' : '100%')};

  a {
    width: 100%;
    background: ${colors.darkGreen};
    color: ${colors.white};
    text-decoration: none;
    padding: 5px 15px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;
