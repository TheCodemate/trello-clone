import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  font-size: 5em;
  color: ${({ theme }) => theme.textColor.primary};
`;
HomeWrapper.displayName = 'Styled.HomeWrapper';
