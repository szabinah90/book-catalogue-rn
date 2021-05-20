import { BOOKS } from '../constants/book.constants';
import { IPurchasedBook } from '../../model/purchased-book.interface';

export const purchaseBookAction = (bookId: number) => ({ type: BOOKS.PURCHASE_BOOK, payload: bookId });
export const toggleFavoriteAction = (bookData: IPurchasedBook) => ({ type: BOOKS.TOGGLE_FAVORITE, payload: bookData });
