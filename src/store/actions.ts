import { PayloadAction } from '@reduxjs/toolkit';
import { BoardsState, IBoard, ICard, IList } from 'types';

export const addNewTask = (
  state: BoardsState,
  {
    payload
  }: PayloadAction<{
    newCard: ICard;
    currentListId: string;
  }>
) => {
  state.boards.forEach(board =>
    board.lists.forEach(list =>
      list.listId === payload.currentListId
        ? list.cards.push(payload.newCard)
        : null
    )
  );
};

export const addNewList = (
  state: BoardsState,
  {
    payload
  }: PayloadAction<{
    newList: IList;
    currentBoardId: string;
  }>
) => {
  state.boards.forEach(board =>
    board.boardId === payload.currentBoardId
      ? board.lists.push(payload.newList)
      : null
  );
};
export const addNewBoard = (
  state: BoardsState,
  {
    payload
  }: PayloadAction<{
    newBoard: IBoard;
  }>
) => {
  state.boards.push(payload.newBoard);
};

export const updateCards = (
  state: BoardsState,
  {
    payload
  }: PayloadAction<{
    updatedCards: ICard[];
    updatedListId: string;
  }>
) => {
  state.boards.forEach(board =>
    board.lists.forEach(list =>
      list.listId === payload.updatedListId
        ? (list.cards = payload.updatedCards)
        : null
    )
  );
};

export const moveItemFromOneListToAnother = (
  state: BoardsState,
  {
    payload
  }: PayloadAction<{
    updatedSourceList: IList;
    updatedDestinationList: IList;
  }>
) => {
  state.boards.forEach(board => {
    board.lists.forEach(list => {
      if (payload.updatedSourceList.listId === list.listId) {
        list.cards = payload.updatedSourceList.cards;
      }
      if (payload.updatedDestinationList.listId === list.listId) {
        list.cards = payload.updatedDestinationList.cards;
      }
    });
  });
};
