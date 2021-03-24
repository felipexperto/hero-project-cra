import styled from 'styled-components/macro';
import { media } from 'styles';

export const SectionHeroesWrapper = styled.div``;

export const HeroesCount = styled.div`
  color: ${({ theme }) => theme.colors.grey};
`;

export const Menubar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;

  ${media.tablet`
    flex-direction: row;
  `}
`;

export const MenubarColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  ${media.tablet`
    flex-direction: row;
  `}
`;

export const OrderByNameContainer = styled.div`
  margin-top: 1rem;

  ${media.tablet`
    margin-right: 1rem;
    margin-top: 0;
  `}
`;

export const ShowFavoritesContainer = styled.div``;
