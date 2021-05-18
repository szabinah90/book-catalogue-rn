import { ROUTES } from '../navigation/constants';

export const getIconName = (routeName: string): string => {
  switch (routeName) {
    case ROUTES.MY_BOOKS:
      return 'collections-bookmarks';
    case ROUTES.BOOKS:
      return 'library-books';
    case ROUTES.FAVORITES:
      return 'favorite';
    default:
      return 'collections-bookmark';
  }
};
