import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

export const Lists = styled.ul`
  display: grid;
  grid-auto-columns: fit-content(auto);
  grid-auto-flow: column;
  column-gap: 1rem;
  justify-items: start;

  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-height: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
Lists.displayName = 'Styled.Lists';

export const AddListInput = styled.input`
  height: 30px;
  border: none;
  padding: 0.4rem;
  padding-left: 1rem;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  &::placeholder {
    color: ${({ theme }) => theme.textColor.primary};
  }
`;
AddListInput.displayName = 'Styled.AddListInput';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50px;
  width: 200px;

  padding: 0.7rem;

  border-radius: 0.2rem;

  /* background-color: ${({ theme }) => theme.backgroundColor.quaternary}; */
  /* background-color: ${({ theme }) => theme.backgroundColor.quaternary}; */
  text-decoration: none;
`;
List.displayName = 'Styled.List';

export const Card = styled.li`
  padding: 0.2rem;
  border-radius: 0.1rem;
  margin-bottom: 0.4rem;
  background-color: ${({ theme }) => theme.backgroundColor.quinary};
`;

export const DroppableCardsList = styled(Droppable)`
  list-style-type: none;
  padding: 0;
`;
DroppableCardsList.displayName = 'Styled.DroppableCardsList';

export const AddCardInput = styled.input`
  border: none;
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColor.quaternary};
  &::placeholder {
    color: ${({ theme }) => theme.textColor.tertiary};
  }
`;
AddCardInput.displayName = 'Styled.AddCardInput';

export const ListHeader = styled.header`
  font-weight: bold;
  color: ${({ theme }) => theme.textColor.tertiary};
`;
ListHeader.displayName = 'Styled.ListHeader';
