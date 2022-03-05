import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useBoardsDispatch } from 'hooks';
import { IList } from 'types';

export const useBoardInput = () => {
  const [boardInputValue, setListInputValue] = useState('');
  const { addNewBoardToBoards } = useBoardsDispatch();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setListInputValue(event.target.value);
  };

  const handleOnKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const shouldUpdateBoards = event.key === 'Enter' && boardInputValue;
    const createSlug = (valuesToCreateSlugFrom: string) => {
      const values = valuesToCreateSlugFrom.split(' ');
      const valuesTransformedToLowerCase = values.map(value =>
        value
          .split('')
          .map(letter => letter.toLowerCase())
          .join('')
      );

      const newSlug = valuesTransformedToLowerCase.join('-');
      return newSlug;
    };

    if (!shouldUpdateBoards) {
      return;
    }
    const newBoard = {
      boardId: uuidv4(),
      boardName: boardInputValue,
      boardSlug: createSlug(boardInputValue),
      lists: [] as IList[]
    };

    addNewBoardToBoards({ newBoard });
    setListInputValue('');
  };

  return {
    actions: { handleOnKeyPress, handleOnChange },
    state: { boardInputValue }
  };
};
