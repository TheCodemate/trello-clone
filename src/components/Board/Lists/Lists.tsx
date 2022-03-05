import { useBoardsDispatch } from 'hooks';
import { DragDropContext, DraggableLocation } from 'react-beautiful-dnd';
import { IList } from 'types';
import { List } from './List/List';

import * as Styled from './Lists.styled';

interface ListsProps {
  lists: IList[];
}

export const Lists = ({ lists }: ListsProps) => {
  const { reorderGivenLists } = useBoardsDispatch();
  const listsToRender = lists.map(list => (
    <Styled.DroppableCardsList droppableId={list.listId}>
      {provided => {
        return (
          <List
            {...provided.droppableProps}
            ref={provided.innerRef}
            list={list}
            provided={provided}
          />
        );
      }}
    </Styled.DroppableCardsList>
  ));

  const handleDragEnd = (
    lists: IList[],
    sourceList: DraggableLocation,
    destinationList: DraggableLocation | undefined
  ) => {
    reorderGivenLists({ lists, sourceList, destinationList });
  };

  return (
    <DragDropContext
      onDragEnd={({ source, destination }) =>
        handleDragEnd(lists, source, destination)
      }
    >
      <Styled.Lists>{listsToRender}</Styled.Lists>
    </DragDropContext>
  );
};
