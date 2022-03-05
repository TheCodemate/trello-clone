import { BoardsState } from 'types';

export const selectBoards = (state: { boards: BoardsState }) => state.boards;
