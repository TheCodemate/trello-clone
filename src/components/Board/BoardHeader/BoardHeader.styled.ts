import styled from 'styled-components';
export const BoardHeader = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding-left: 1rem;

  color: ${({ theme }) => theme.textColor.primary};
  font-size: 1.5rem;
  font-weight: bold;
`;
export const HeaderElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 1rem;
`;
