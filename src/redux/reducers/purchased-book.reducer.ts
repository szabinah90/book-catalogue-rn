import { IPurchasedBook } from '../../model/purchased-book.interface';
import { BOOKS } from '../constants/book.constants';
import { IBookAction } from './book.reducer';
import { COMMON } from '../constants/common.constants';

export interface IPurchasedBookReducer {
  items: IPurchasedBook[];
}

const initialState: IPurchasedBookReducer = { items: [] };

const purchasedBooks = (state = initialState, action: IBookAction) => {
  switch (action.type) {
    case COMMON.INIT_APP:
      return { ...state, items: action.payload.purchasedBooks };
    case BOOKS.PURCHASE_BOOK:
      return { ...state, items: [...state.items, action.payload] };
    case BOOKS.TOGGLE_FAVORITE:
      const filtered = state.items.filter(i => i.id !== action.payload.id);
      return { ...state, items: [...filtered, action.payload] };
    default:
      return state;
  }
};
export default purchasedBooks;
