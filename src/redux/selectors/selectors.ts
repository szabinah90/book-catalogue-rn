import { IRootReducer } from '../reducers';
import { IBook } from '../../model/book.interface';

export const getAvailableBooks = (state: IRootReducer): IBook[] => {
  return state.book.items.filter(b => !state.purchasedBook.items.find(pb => pb.id === b.id));
};

export const getPurchasedBooks = (state: IRootReducer): IBook[] => {
  return state.book.items.filter(b => !!state.purchasedBook.items.find(pb => pb.id === b.id));
};
