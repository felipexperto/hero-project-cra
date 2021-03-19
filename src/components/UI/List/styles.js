import styled from 'styled-components/macro';
import { media } from 'styles';

export const ListWrapper = styled.div``;

export const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% / 2) - 5%);
  margin: 0 2.5% 0 2.5%;

  ${media.tablet`
    flex-basis: calc((100% / 3) - 5%);
  `}
  ${media.desktop`
    flex-basis: calc((100% / 4) - 5%);
  `}
  ${media.largeDesktop`
    flex-basis: calc((100% / 4) - 5%);
  `}
`;

export const Image = styled.div`
  background-image: url('${({ fullPath }) => fullPath}');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 100%;
  position: relative;
  width: 100%;

  &::after {
    background-color: ${({ theme }) => theme.colors.red};
    bottom: 0;
    content: '';
    display: block;
    height: 4px;
    position: absolute;
    width: 100%;
  }
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.darkgrey};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin: 1rem 0 3rem 0;
  text-align: left;
`;