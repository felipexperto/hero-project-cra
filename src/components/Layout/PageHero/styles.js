import styled from 'styled-components/macro';

import { media } from 'styles';

export const WrapperPageHero = styled.section`
  background-color: ${({ theme }) => theme.colors.lightgreen};
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 4rem;

  ${media.tablet`
    flex-direction: row;
  `}

  > div:first-child {
    flex: 1;
    ${media.tablet`
      flex-basis: 30%;
    `}
  }
  > div:last-child {
    flex: 1;
    ${media.tablet`
      flex-basis: 70%;
    `}
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  text-align: left;
`;

export const Name = styled.h1`
  margin-bottom: 1.5rem;
`;

export const Description = styled.div`
  margin-bottom: 1.5rem;
`;

export const Events = styled.div``;

export const Comics = styled.div`
  [data-icon='icon-svg'] {
    height: 16px;
    width: 16px;
  }
`;

export const Movies = styled.div`
  [data-icon='icon-svg'] {
    height: 16px;
    width: 16px;
  }
`;

export const Rating = styled.div``;

export const LastComic = styled.div``;

export const onSale = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 4rem;
  text-align: left;
  width: 100%;
`;

export const OnSaleTitle = styled.h2``;

export const Image = styled.img`
  margin: 0 auto;
  width: 200px;

  ${media.tablet`
    margin: 3rem;
    width: auto;
  `}
`;
