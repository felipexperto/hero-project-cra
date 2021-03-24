import styled from 'styled-components/macro';

import { media, Mixins } from 'styles';

const { resetList } = Mixins;

export const OnSale = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 4rem;
  text-align: left;
  width: 100%;
`;

export const OnSaleTitle = styled.h2`
  margin-bottom: 3rem;
`;

export const OnSaleList = styled.ol`
  ${resetList};
  display: flex;
  flex-wrap: wrap;
`;

export const OnSaleListItem = styled.li`
  flex-basis: calc((100% / 3) - 5%);
  margin: 0 2.5% 1rem 2.5%;

  ${media.tablet`
    flex-basis: calc((100% / 4) - 5%);
  `}
  ${media.desktop`
    flex-basis: calc((100% / 5) - 5%);
  `}
  ${media.largeDesktop`
    flex-basis: calc((100% / 6) - 5%);
  `}

  > h3 {
    font-size: 0.8rem;
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }
`;
