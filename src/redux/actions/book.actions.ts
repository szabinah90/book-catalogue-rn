import { IBook } from '../../model/book.interface';
import { BOOKS } from '../constants/book.constants';

export const getBooksAction = (books: IBook[]) => ({ type: BOOKS.GET, payload: books });
