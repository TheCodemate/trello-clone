import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import {
  addNewBoard,
  addNewList,
  addNewTask,
  moveItemFromOneListToAnother,
  updateCards
} from 'store/actions';

import { BoardsState } from 'types';
const initialState: BoardsState = {
  boards: [
    {
      boardId: uuidv4(),
      boardName: 'Board 1',
      boardSlug: 'board-1',
      lists: [
        {
          listId: uuidv4(),
          listName: 'List 1',
          cards: [
            { cardId: uuidv4(), cardName: 'Card Test 1' },
            { cardId: uuidv4(), cardName: 'Card Test 2' },
            { cardId: uuidv4(), cardName: 'Card Test 3' }
          ]
        },
        {
          listId: uuidv4(),
          listName: 'List 2',
          cards: [
            { cardId: uuidv4(), cardName: 'Card Test 1' },
            { cardId: uuidv4(), cardName: 'Card Test 2' },
            { cardId: uuidv4(), cardName: 'Card Test 3' }
          ]
        },
        {
          listId: uuidv4(),
          listName: 'List 3',
          cards: [
            { cardId: uuidv4(), cardName: 'Card Test 1' },
            { cardId: uuidv4(), cardName: 'Card Test 2' },
            { cardId: uuidv4(), cardName: 'Card Test 3' }
          ]
        },
        {
          listId: uuidv4(),
          listName: 'List 4',
          cards: [
            { cardId: uuidv4(), cardName: 'Card Test 1' },
            { cardId: uuidv4(), cardName: 'Card Test 2' },
            { cardId: uuidv4(), cardName: 'Card Test 3' }
          ]
        },
        {
          listId: uuidv4(),
          listName: 'List 5',
          cards: [
            { cardId: uuidv4(), cardName: 'Card Test 1' },
            { cardId: uuidv4(), cardName: 'Card Test 2' },
            { cardId: uuidv4(), cardName: 'Card Test 3' }
          ]
        }
      ]
    },
    {
      boardId: uuidv4(),
      boardName: 'Board 2',
      boardSlug: 'board-2',
      lists: [
        {
          listId: uuidv4(),
          listName: 'To Do',
          cards: [
            { cardId: uuidv4(), cardName: 'Card Test 1' },
            { cardId: uuidv4(), cardName: 'Card Test 2' },
            { cardId: uuidv4(), cardName: 'Card Test 3' }
          ]
        },
        {
          listId: uuidv4(),
          listName: 'Doing',
          cards: [
            { cardId: uuidv4(), cardName: 'Card Test 1' },
            { cardId: uuidv4(), cardName: 'Card Test 2' },
            { cardId: uuidv4(), cardName: 'Card Test 3' }
          ]
        },
        {
          listId: uuidv4(),
          listName: 'Done',
          cards: [
            { cardId: uuidv4(), cardName: 'Card Test 1' },
            { cardId: uuidv4(), cardName: 'Card Test 2' },
            { cardId: uuidv4(), cardName: 'Card Test 3' }
          ]
        }
      ]
    }
  ]
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    addBoardToBoards: addNewBoard,
    addListToBoard: addNewList,
    addTaskToList: addNewTask,
    updateCardsList: updateCards,
    moveItemsBetweenLists: moveItemFromOneListToAnother
  }
});

export const {
  addBoardToBoards,
  addListToBoard,
  addTaskToList,
  moveItemsBetweenLists,
  updateCardsList
} = boardsSlice.actions;

export default boardsSlice.reducer;
