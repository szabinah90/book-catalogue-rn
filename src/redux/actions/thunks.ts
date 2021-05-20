import { getBooksAction } from './book.actions';
import { purchaseBookAction, toggleFavoriteAction } from './purchased-book.actions';
import { initAppAction } from './common.actions';
import { IPurchasedBook } from '../../model/purchased-book.interface';

export const initApp =
  () =>
  async (dispatch: any, getState: any, { api }: any) => {
    try {
      const results = await Promise.all([api.get('/books'), api.get('/my-books')]);
      dispatch(initAppAction({ books: results[0], purchasedBooks: results[1] }));
    } catch (apiError) {
      console.error(apiError);
    }
  };

export const getBooks =
  () =>
  async (dispatch: any, getState: any, { api }: any) => {
    try {
      const response = await api.get('/books');
      dispatch(getBooksAction(response));
    } catch (apiError) {
      console.error(apiError);
    }
  };

export const purchaseBook =
  (bookId: number) =>
  async (dispatch: any, getState: any, { api }: any) => {
    try {
      const response = await api.post('/my-books', { body: { id: bookId, favorite: false } });
      dispatch(purchaseBookAction(response));
    } catch (apiError) {
      console.error(apiError);
    }
  };

export const toggleFavorite =
  (bookId: number) =>
  async (dispatch: any, getState: any, { api }: any) => {
    try {
      const state = getState();
      const element = state.purchasedBook.items.find((i: IPurchasedBook) => i.id === bookId);
      const response = await api.put(`/my-books/${bookId}`, { body: { ...element, favorite: !element.favorite } });
      dispatch(toggleFavoriteAction(response));
    } catch (apiError) {
      console.error(apiError);
    }
  };
