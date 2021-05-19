import { SafeAreaView } from 'react-native';
import React from 'react';
// import { Book } from './Book';
import { IBook } from '../../../model/book.interface';
import { BookItem } from './BookItem/BookItem';
import { connect } from 'react-redux';
import { useScreenProperties } from '../../../utils/hooks/useScreenProperties';
import { Flexbox, ScreenContainer } from '../../../styles/common.styled';
import { IRootReducer } from '../../../redux/reducers';
import { getAvailableBooks } from '../../../redux/selectors/selectors';

export const Books: React.FC<{ books: IBook[]; navigation: any }> = ({ books, navigation }) => {
  const screenProperties = useScreenProperties();
  const handlePress = (book: IBook) => () => {
    navigation.navigate('Book', { book: book });
  };
  return (
    <SafeAreaView>
      <ScreenContainer>
        <Flexbox wrap="wrap" justifyContent="space-between" alignItems="center">
          {books.map(book => (
            <BookItem key={book.id} book={book} screenProperties={screenProperties} handlePress={handlePress(book)} />
          ))}
        </Flexbox>
      </ScreenContainer>
    </SafeAreaView>
  );
};

/* <FlatList
        data={books}
        renderItem={({ item }) => (
          <View>
            <BookItem book={item} screen={screen} />
          </View>
        )}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
      /> */

// <Button title="Go to Book" onPress={() => navigation.navigate('Book')} />

// @ts-ignore
const mapStateToProps = (state: IRootReducer) => {
  return {
    books: getAvailableBooks(state),
  };
};

export default connect(mapStateToProps, null)(Books);
