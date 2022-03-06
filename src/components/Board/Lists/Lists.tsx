import { useBoardsDispatch } from 'hooks';
import { useListInput } from 'hooks';
import { DragDropContext, DraggableLocation } from 'react-beautiful-dnd';
import { IList } from 'types';
import { List } from './List/List';

import * as Styled from './Lists.styled';

interface ListsProps {
  lists: IList[];
  boardId: string;
}

export const Lists = ({ lists, boardId }: ListsProps) => {
  const { reorderGivenLists } = useBoardsDispatch();
  const {
    actions: { handleOnChange, handleOnKeyPress },
    state: { listInputValue }
  } = useListInput(boardId);
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
      <Styled.Lists>
        {listsToRender}
        <Styled.AddListInput
          onChange={handleOnChange}
          onKeyPress={handleOnKeyPress}
          placeholder={'Add list...'}
          value={listInputValue}
        />
      </Styled.Lists>
    </DragDropContext>
  );
};
