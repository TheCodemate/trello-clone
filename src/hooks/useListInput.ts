import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useBoardsDispatch } from 'hooks';
import { ICard } from 'types';

export const useListInput = (currentBoardId: string) => {
  const [listInputValue, setListInputValue] = useState('');
  const { addNewListToBoard } = useBoardsDispatch();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setListInputValue(event.target.value);
  };

  const handleOnKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const shouldUpdateList =
      event.key === 'Enter' && listInputValue.trim().length > 1;
    if (!shouldUpdateList) return;

    const newList = {
      listId: uuidv4(),
      listName: listInputValue,
      cards: [] as ICard[]
    };

    setListInputValue('');
    addNewListToBoard({ newList, currentBoardId });
  };

  return {
    actions: { handleOnKeyPress, handleOnChange },
    state: { listInputValue }
  };
};
