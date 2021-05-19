import React from 'react';
import { connect } from 'react-redux';
import { IRootReducer } from '../../../redux/reducers';
import { getPurchasedBooks } from '../../../redux/selectors/selectors';
import { IBook } from '../../../model/book.interface';
import { Alert, SafeAreaView } from 'react-native';
import { Flexbox, ScreenContainer } from '../../../styles/common.styled';
import { BookItem } from '../Books/BookItem/BookItem';
import { useScreenProperties } from '../../../utils/hooks/useScreenProperties';

export const MyBooks: React.FC<{ getBooks: any; myBooks: IBook[] }> = ({ myBooks }) => {
  const screenProperties = useScreenProperties();
  const handlePress = (title: string) => () => {
    Alert.alert('Read', `You Read: ${title}`, [
      {
        text: 'Ok',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };
  return (
    <SafeAreaView>
      <ScreenContainer>
        <Flexbox wrap="wrap" justifyContent="space-between" alignItems="center">
          {myBooks.map(book => (
            <BookItem
              key={book.id}
              book={book}
              screenProperties={screenProperties}
              handlePress={handlePress(book.title)}
            />
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

export default connect(mapStateToProps, null)(MyBooks);
