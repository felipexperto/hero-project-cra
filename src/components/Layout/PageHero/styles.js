import styled from 'styled-components/macro';

import { media } from 'styles';

export const WrapperPageHero = styled.section`
  background-color: ${({ theme }) => theme.colors.lightgreen};
`;

export const Details = styled.section`
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

export const DetailsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  margin-top: 2rem;

  > div {
    padding-left: 16px;

    button {
      margin-top: 8px;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  text-align: left;
`;

export const Name = styled.h1`
  font-size: 2.5rem;
  line-break: anywhere;
  line-height: 1.2em;
  margin: 0;
  text-transform: uppercase;
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

export const OnSale = styled.section`
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
