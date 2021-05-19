import { BOOKS } from '../constants/book.constants';

export const purchaseBookAction = (bookId: number) => ({ type: BOOKS.PURCHASE_BOOK, payload: bookId });
