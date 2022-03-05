import { useAppSelector } from 'hooks';
import { useBoardInput } from 'hooks/useBoardInput';

import { selectBoards } from 'store/selectors';

import * as Styled from './Boards.styled';

export const Boards = () => {
  const { boards } = useAppSelector(selectBoards);
  const {
    actions: { handleOnChange, handleOnKeyPress },
    state: { boardInputValue }
  } = useBoardInput();
  const boardsToDisplay = boards.map(({ boardName, boardSlug }) => (
    <Styled.BoardCardLink to={`${boardSlug}`}>
      <Styled.BoardCard>{boardName}</Styled.BoardCard>
    </Styled.BoardCardLink>
  ));

  return (
    <>
      <Styled.BoardCardsDisplay>
        {boardsToDisplay}
        <Styled.AddBoardInput
          onChange={handleOnChange}
          value={boardInputValue}
          placeholder={'Add new board...'}
          onKeyPress={handleOnKeyPress}
        />
      </Styled.BoardCardsDisplay>
    </>
  );
};
