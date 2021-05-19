import bookReducer, { IBookReducer } from './book.reducer';
import { combineReducers } from 'redux';
import purchasedBooks, { IPurchasedBookReducer } from './purchased-book.reducer';

export interface IRootReducer {
  book: IBookReducer;
  purchasedBook: IPurchasedBookReducer;
}

const rootReducer = combineReducers({
  book: bookReducer,
  purchasedBook: purchasedBooks,
});

export default rootReducer;
