import { getBooksAction } from './book.actions';

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
