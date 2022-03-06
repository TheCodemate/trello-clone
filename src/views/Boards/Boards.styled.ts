import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BoardCardsDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  height: 100%;
  padding: 1rem;
`;
BoardCardsDisplay.displayName = 'Styled.BoardCardsDisplay';

export const BoardCardLink = styled(NavLink)`
  color: ${({ theme }) => theme.textColor.quinary};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  text-decoration: none;
`;
BoardCardLink.displayName = 'Styled.BoardCardLink';

export const BoardCard = styled.div`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.backgroundColor.quaternary};
  color: ${({ theme }) => theme.textColor.tertiary};
  font-size: 2rem;
  font-weight: bold;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  text-decoration: none;

  cursor: pointer;
`;
BoardCard.displayName = 'Styled.BoardCard';

export const AddBoardInput = styled.input`
  justify-self: start;
  height: 30px;
  max-width: 300px;
  border: none;
  padding: 0.4rem;
  padding-left: 1rem;
  /* margin-top: 0.5rem; */
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  &::placeholder {
    color: ${({ theme }) => theme.textColor.primary};
  }
`;
AddBoardInput.displayName = 'Styled.AddBoardInput';
