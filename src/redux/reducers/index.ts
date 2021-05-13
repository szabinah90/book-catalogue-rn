import bookReducer, { IBookReducer } from './book.reducer';
import { combineReducers } from 'redux';

export interface IRootReducer {
  book: IBookReducer;
}

const rootReducer = combineReducers({
  book: bookReducer,
});

export default rootReducer;
