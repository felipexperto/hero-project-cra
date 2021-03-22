import styled from 'styled-components/macro';
import { media, Mixins } from 'styles';

const { resetList } = Mixins;

export const ListWrapper = styled.div``;

export const List = styled.ol`
  ${resetList}
  display: flex;
  flex-wrap: wrap;
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

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 3rem 0;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.colors.darkgrey};
  display: inline-block;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  text-align: left;
`;

export const ListPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 6rem 0;
  width: 100%;
`;

export const ListPlaceholderTitle = styled.h2`
  color: ${({ theme }) => theme.colors.red};
`;
