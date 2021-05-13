import { IBook } from '../../model/book.interface';
import { BOOKS } from '../constants/book.constants';

export interface IBookReducer {
  items: IBook[];
}

interface IBookAction {
  type: BOOKS;
  payload: any;
}

const initialState: IBookReducer = { items: [] };

const bookReducer = (state = initialState, action: IBookAction) => {
  switch (action.type) {
    case BOOKS.GET:
      return { ...state, items: [...action.payload] };
    default:
      return state;
  }
};
export default bookReducer;
