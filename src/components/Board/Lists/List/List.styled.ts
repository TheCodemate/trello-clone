import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';

export const List = styled.li`
  display: flex;
  flex-direction: column;
  min-height: 50px;

  width: 300px;

  padding: 0.7rem;

  border-radius: 0.2rem;

  background-color: ${({ theme }) => theme.backgroundColor.quaternary};
  text-decoration: none;
`;
List.displayName = 'Styled.List';

export const ListHeader = styled.header`
  font-weight: bold;
  color: ${({ theme }) => theme.textColor.tertiary};
`;
ListHeader.displayName = 'Styled.ListHeader';

export const DroppableCardsList = styled(Droppable)`
  list-style-type: none;
  padding: 0; ;
`;
DroppableCardsList.displayName = 'Styled.DroppableCardsList';

export const Card = styled.li`
  padding: 0.2rem;
  border-radius: 0.1rem;
  margin-bottom: 0.4rem;
  background-color: ${({ theme }) => theme.backgroundColor.quinary};
`;

export const AddCardInput = styled.input`
  border: none;
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColor.quaternary};
  &::placeholder {
    color: ${({ theme }) => theme.textColor.tertiary};
  }
`;
AddCardInput.displayName = 'Styled.AddCardInput';
