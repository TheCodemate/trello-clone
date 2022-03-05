import { DraggableLocation } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import {
  addBoardToBoards,
  addListToBoard,
  addTaskToList,
  moveItemsBetweenLists,
  updateCardsList
} from 'store/slice';
import type { AppDispatch } from 'store/store';
import { IBoard, ICard, IList } from 'types';

interface AddNewTaskToListParamsType {
  newCard: ICard;
  currentListId: string;
}
interface AddNewListToBoardParamsType {
  newList: IList;
  currentBoardId: string;
}
interface AddNewBoardToBoardsParamsType {
  newBoard: IBoard;
}
interface UpdateCardsListParamsType {
  updatedCards: ICard[];
  updatedListId: string;
}
interface MoveItemsBetweenListsParamsType {
  updatedSourceList: IList;
  updatedDestinationList: IList;
}
interface ReorderListsParamsType {
  lists: IList[];
  sourceList: DraggableLocation;
  destinationList: DraggableLocation | undefined;
}

type AddNewTaskToListType = (param: AddNewTaskToListParamsType) => void;
type AddNewListToBoardType = (param: AddNewListToBoardParamsType) => void;
type AddNewBoardToBoardsType = (param: AddNewBoardToBoardsParamsType) => void;
type UpdateCurrentCardsListType = (param: UpdateCardsListParamsType) => void;
type MoveItemsBetweenListsType = (
  param: MoveItemsBetweenListsParamsType
) => void;
type ReorderListsType = (param: ReorderListsParamsType) => void;

interface IDispatcher {
  addNewTaskToList: AddNewTaskToListType;
  addNewListToBoard: AddNewListToBoardType;
  addNewBoardToBoards: AddNewBoardToBoardsType;
  updateGivenList: UpdateCurrentCardsListType;
  reorderGivenLists: ReorderListsType;
  moveGivenItems: MoveItemsBetweenListsType;
}

export const useBoardsDispatch = (): IDispatcher => {
  const dispatch = useDispatch<AppDispatch>();

  const addNewTaskToList: AddNewTaskToListType = ({ newCard, currentListId }) =>
    dispatch(addTaskToList({ newCard, currentListId }));

  const addNewListToBoard: AddNewListToBoardType = ({
    newList,
    currentBoardId
  }) => dispatch(addListToBoard({ newList, currentBoardId }));

  const addNewBoardToBoards: AddNewBoardToBoardsType = ({ newBoard }) =>
    dispatch(addBoardToBoards({ newBoard }));

  const updateGivenList: UpdateCurrentCardsListType = ({
    updatedCards,
    updatedListId
  }) => dispatch(updateCardsList({ updatedCards, updatedListId }));

  const moveGivenItems: MoveItemsBetweenListsType = ({
    updatedSourceList,
    updatedDestinationList
  }) =>
    dispatch(
      moveItemsBetweenLists({ updatedSourceList, updatedDestinationList })
    );

  const reorderGivenLists: ReorderListsType = ({
    lists,
    sourceList,
    destinationList
  }) => {
    if (!destinationList || !sourceList) return;
    const givenSourceList = lists.find(
      list => list.listId === sourceList.droppableId
    );
    const givenDestinationList = lists.find(
      list => list.listId === destinationList.droppableId
    );
    if (!givenSourceList || !givenDestinationList) return;
    const sourceCardsCopy = [...givenSourceList.cards];
    const destinationCardsCopy = [...givenDestinationList.cards];
    const [removed] = sourceCardsCopy.splice(sourceList.index, 1);

    if (sourceList.droppableId !== destinationList.droppableId) {
      destinationCardsCopy.splice(destinationList.index, 0, removed);
      const updatedSourceList = {
        listId: givenSourceList.listId,
        listName: givenSourceList.listName,
        cards: sourceCardsCopy
      };
      const updatedDestinationList = {
        listId: givenDestinationList.listId,
        listName: givenDestinationList.listName,
        cards: destinationCardsCopy
      };
      moveGivenItems({
        updatedSourceList,
        updatedDestinationList
      });
    }

    if (sourceList.droppableId === destinationList.droppableId) {
      sourceCardsCopy.splice(destinationList.index, 0, removed);
      const updatedList = {
        updatedCards: sourceCardsCopy,
        updatedListId: givenSourceList.listId
      };
      updateGivenList(updatedList);
    }
  };

  return {
    addNewBoardToBoards,
    addNewListToBoard,
    addNewTaskToList,
    moveGivenItems,
    reorderGivenLists,
    updateGivenList
  };
};
