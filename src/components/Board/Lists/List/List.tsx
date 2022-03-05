import { useCardInput } from 'hooks';
import { Draggable, DroppableProvided } from 'react-beautiful-dnd';
import { IList } from 'types';
import * as Styled from './List.styled';

export interface ListProps {
  list: IList;
  provided: DroppableProvided;
  ref: (element: HTMLElement | null) => any;
}

export const List = ({
  list: { listName, listId, cards },
  provided
}: ListProps) => {
  const {
    actions: { handleOnChange, handleOnKeyPress },
    state: { cardInputValue }
  } = useCardInput(listId);

  return (
    <Styled.List {...provided.droppableProps} ref={provided.innerRef}>
      <Styled.ListHeader>{listName}</Styled.ListHeader>
      {cards.map((item, index) => (
        <Draggable key={item.cardId} draggableId={item.cardId} index={index}>
          {provided => (
            <Styled.Card
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              {item.cardName}
            </Styled.Card>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
      <Styled.AddCardInput
        onChange={handleOnChange}
        value={cardInputValue}
        placeholder={'Add new card...'}
        onKeyPress={handleOnKeyPress}
      />
    </Styled.List>
  );
};
