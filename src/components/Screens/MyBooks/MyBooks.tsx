import React from 'react';
import { connect } from 'react-redux';
import { IRootReducer } from '../../../redux/reducers';
import { getPurchasedBooks } from '../../../redux/selectors/selectors';
import { Alert, SafeAreaView, View } from 'react-native';
import { Flexbox, ScreenContainer } from '../../../styles/common.styled';
import { BookItem } from '../Books/BookItem/BookItem';
import { useScreenProperties } from '../../../utils/hooks/useScreenProperties';
import { toggleFavorite as toggleFavoriteThunk } from '../../../redux/actions/thunks';
import { IMyPurchasedBook } from '../../../model/my-purchased-book.interface';
import { defaultTheme } from '../../../styles/theme-colors';
import { Icon } from 'react-native-elements';

export const MyBooks: React.FC<{ getBooks: any; myBooks: IMyPurchasedBook[]; toggleFavorite: any }> = ({
  myBooks,
  toggleFavorite,
}) => {
  const screenProperties = useScreenProperties();
  const handlePress = (title: string) => () => {
    Alert.alert('Read', `You Read: ${title}`, [
      {
        text: 'Ok',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

  const handleLongPress = (bookId: number) => () => {
    toggleFavorite(bookId);
  };

  return (
    <SafeAreaView>
      <ScreenContainer>
        <Flexbox wrap="wrap" justifyContent="space-between" alignItems="center">
          {myBooks.map(book => (
            <View key={book.id}>
              <BookItem
                book={book}
                screenProperties={screenProperties}
                handlePress={handlePress(book.title)}
                handleLongPress={handleLongPress(book.id)}
              />
              {book.isFavorite ? (
                <Icon name="favorite" type="material" color={defaultTheme.secondaryDark} />
              ) : (
                <Icon name="favorite-border" type="material" color={defaultTheme.secondaryDark} />
              )}
            </View>
          ))}
        </Flexbox>
      </ScreenContainer>
    </SafeAreaView>
  );
};

// @ts-ignore
const mapStateToProps = (state: IRootReducer) => {
  return {
    myBooks: getPurchasedBooks(state),
  };
};

// @ts-ignore
const mapDispatchToProps = dispatch => {
  return {
    toggleFavorite: (bookId: number) => dispatch(toggleFavoriteThunk(bookId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks);
