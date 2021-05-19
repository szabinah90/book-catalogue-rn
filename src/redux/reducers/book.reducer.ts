import { IBook } from '../../model/book.interface';
import { BOOKS } from '../constants/book.constants';
import { COMMON } from '../constants/common.constants';

export interface IBookReducer {
  items: IBook[];
}

export interface IBookAction {
  type: BOOKS | COMMON;
  payload: any;
}

const initialState: IBookReducer = { items: [] };

const bookReducer = (state = initialState, action: IBookAction) => {
  switch (action.type) {
    case COMMON.INIT_APP:
      return { ...state, items: action.payload.books };
    case BOOKS.GET:
      return { ...state, items: [...action.payload] };
    default:
      return state;
  }
};
export default bookReducer;
