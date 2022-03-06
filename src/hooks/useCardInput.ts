import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useBoardsDispatch } from 'hooks';
import { ICard } from 'types';

export const useCardInput = (currentListId: string) => {
  const [cardInputValue, setCardInputValue] = useState('');
  const { addNewTaskToList, updateGivenList } = useBoardsDispatch();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCardInputValue(event.target.value);
  };

  const handleOnKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const shouldCardBeAdded =
      event.key === 'Enter' && cardInputValue.trim().length > 1;
    if (!shouldCardBeAdded) return;

    const newCard = { cardId: uuidv4(), cardName: cardInputValue };

    setCardInputValue('');
    addNewTaskToList({ newCard, currentListId });
  };

  const handleDragEnd = (updatedCards: ICard[]) => {
    updateGivenList({ updatedCards, updatedListId: currentListId });
  };

  return {
    actions: { handleOnChange, handleDragEnd, handleOnKeyPress },
    state: { cardInputValue }
  };
};
