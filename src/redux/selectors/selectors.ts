import { IRootReducer } from '../reducers';
import { IBook } from '../../model/book.interface';
import { IMyPurchasedBook } from '../../model/my-purchased-book.interface';

export const getAvailableBooks = (state: IRootReducer): IBook[] => {
  return state.book.items.filter(b => !state.purchasedBook.items.find(pb => pb.id === b.id));
};

export const getPurchasedBooks = (state: IRootReducer): IMyPurchasedBook[] => {
  return state.book.items.reduce<IMyPurchasedBook[]>((acc, curr) => {
    const purchasedBook = state.purchasedBook.items.find(b => b.id === curr.id);
    return !purchasedBook ? acc : [...acc, { ...curr, isFavorite: purchasedBook.favorite } as IMyPurchasedBook];
  }, []);
};
