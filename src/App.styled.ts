import styled from 'styled-components';

export const App = styled.div`
  height: 100vh;
  /* background-color: ${({ theme }) => theme.backgroundColor.primary}); */
  background-color: ${({ theme }) => theme.backgroundColor.primary};
`;
App.displayName = 'Styled.App';
