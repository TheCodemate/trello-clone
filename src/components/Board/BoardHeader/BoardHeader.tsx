import React from 'react';
import * as Styled from './BoardHeader.styled';
import { AiOutlineStar } from 'react-icons/ai';
import { MdOutlineSportsBasketball } from 'react-icons/md';

interface BoardHeaderProps {
  boardName: string;
}

export const BoardHeader = ({ boardName }: BoardHeaderProps) => {
  return (
    <Styled.BoardHeader>
      <Styled.HeaderElement>{boardName}</Styled.HeaderElement>
      <Styled.HeaderElement>
        <AiOutlineStar />
      </Styled.HeaderElement>
      <Styled.HeaderElement>
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1rem',
            fontWeight: 'normal'
          }}
        >
          <MdOutlineSportsBasketball />
          Public
        </span>
      </Styled.HeaderElement>
    </Styled.BoardHeader>
  );
};
