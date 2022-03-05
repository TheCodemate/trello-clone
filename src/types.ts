export interface ICard {
  cardId: string;
  cardName: string;
}

export interface IList {
  listId: string;
  listName: string;
  cards: ICard[];
}

export interface IBoard {
  boardId: string;
  boardName: string;
  boardSlug: string;
  lists: IList[];
}

export interface BoardsState {
  boards: IBoard[];
}
