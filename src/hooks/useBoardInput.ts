import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useBoardsDispatch } from 'hooks';
import { IList } from 'types';
import { createSlug } from 'utils';

export const useBoardInput = () => {
  const [boardInputValue, setListInputValue] = useState('');
  const { addNewBoardToBoards } = useBoardsDispatch();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setListInputValue(event.target.value);
  };

  const handleOnKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const shouldUpdateBoards =
      event.key === 'Enter' && boardInputValue.trim().length > 1;
    if (!shouldUpdateBoards) return;

    const newBoard = {
      boardId: uuidv4(),
      boardName: boardInputValue,
      boardSlug: createSlug(boardInputValue),
      lists: [] as IList[]
    };

    setListInputValue('');
    addNewBoardToBoards({ newBoard });
  };

  return {
    actions: { handleOnKeyPress, handleOnChange },
    state: { boardInputValue }
  };
};
