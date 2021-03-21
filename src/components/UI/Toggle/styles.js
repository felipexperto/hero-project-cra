import styled from 'styled-components/macro';

export const Toggle = styled.div`
  background-color: ${({ theme }) => theme.colors.lightestgrey};
  border-radius: 10rem;
  height: 24px;
  position: relative;
  width: 40px;
`;

export const Indicator = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 10rem;
  height: 16px;
  left: 4px;
  position: absolute;
  top: 4px;
  transform: translateX(0);
  transition: transform 0.25s ease-out;
  width: 16px;
`;

export const ToggleWrapper = styled.div`
  &[data-active='true'] ${Indicator} {
    transform: translateX(16px);
  }
`;
