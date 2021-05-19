import { IBook } from './book.interface';

export interface IMyPurchasedBook extends IBook {
  isFavorite: boolean;
}
