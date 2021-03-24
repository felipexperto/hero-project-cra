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
      flex-basis: 40%;
    `}
    ${media.desktop`
      flex-basis: 40%;
    `}
  }
  > div:last-child {
    flex: 1;
    ${media.tablet`
      flex-basis: 60%;
    `}
    ${media.desktop`
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

export const Comics = styled.div``;

export const ComicsTitle = styled.strong`
  display: block;
`;

export const ComicsContent = styled.div`
  align-items: center;
  display: flex;

  [data-icon='icon-svg'] {
    height: 16px;
    margin-right: 0.25rem;
    width: 16px;
  }
`;

export const LastComic = styled.div`
  margin-top: 1rem;
`;

export const LastComicTitle = styled.strong`
  margin-right: 0.25rem;
`;

export const LastComicContent = styled.span``;

export const Image = styled.img`
  margin: 0 auto;
  width: 200px;

  ${media.tablet`
    margin: 3rem;
    margin-right: 0;
    width: auto;
  `}
`;
