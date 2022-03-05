import { useParams } from 'react-router-dom';
import { useAppSelector } from 'hooks';

import { BoardHeader } from './BoardHeader/BoardHeader';
import { Lists } from './Lists/Lists';

import { selectBoards } from 'store/selectors';

import * as Styled from './Board.styled';

export const Board = () => {
  const { boards } = useAppSelector(selectBoards);
  const param = useParams();
  const [{ lists, boardName }] = boards.filter(
    ({ boardSlug }) => boardSlug === param.boardSlug
  );

  return (
    <Styled.BoardWrapper>
      <BoardHeader boardName={boardName} />
      <Lists lists={lists} />
    </Styled.BoardWrapper>
  );
};
