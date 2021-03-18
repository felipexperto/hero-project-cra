import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: ${({ kind }) => (kind === 'primary' ? 'column' : 'row')};
`;
