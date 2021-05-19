import { COMMON } from '../constants/common.constants';
import { IBook } from '../../model/book.interface';
import { IPurchasedBook } from '../../model/purchased-book.interface';

type InitAppType = { books: IBook[]; purchasedBooks: IPurchasedBook[] };

export const initAppAction = (payload: InitAppType) => ({ type: COMMON.INIT_APP, payload });
