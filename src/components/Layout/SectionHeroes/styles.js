import styled from 'styled-components/macro';
import { media, Mixins } from 'styles';

const { resetButton } = Mixins;

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

export const ShowFavoritesButton = styled.button`
  ${resetButton};
  align-items: center;
  border-radius: 10em;
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  display: flex;
  padding: 12px 16px;

  &:active,
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightred};
  }

  [data-icon='icon-svg'] {
    height: 16px;
    margin-right: 8px;
    width: 16px;
  }
`;

export const OrderByNameButton = styled.button`
  ${resetButton};
  align-items: center;
  border-radius: 10em;
  color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  display: flex;
  padding: 8px 16px;

  &:active,
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.lightred};
  }

  > span {
    margin-right: 8px;
  }

  [data-icon='icon-svg'] {
    height: 24px;
    margin-right: 8px;
    width: 24px;
  }
`;
