import styled from 'styled-components';
import { colors, fontSizes, media } from '../../tokens';

export const Header = styled.header`
  background: ${(props) => (props.none ? 'none' : 'colors.lightGray')};

  ${media.lg} {
    background: ${colors.lightGray};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  height: 87px;
  margin-bottom: 60px;
  position: relative;
`;

export const BackButton = styled.a`
  background: ${colors.darkGray};
  border-radius: 17px;
  padding: 5px 20px;
  color: ${colors.dark};
  transition: 0.3s;
  display: ${(props) => (props.none ? 'none' : 'block')};

  img {
    margin-right: 10px;
    width: 15px;
  }

  &:hover {
    text-decoration: none;
    color: ${colors.dark};
    background: ${colors.gray};
  }
`;

export const PageTitle = styled.h1`
  font-size: ${fontSizes.xxlarge}px;
  font-weight: 400;
  position: absolute;
  bottom: -60px;

  ${media.lg} {
    position: relative;
    bottom: 0;
  }
`;

export const HeaderImage = styled.img``;
