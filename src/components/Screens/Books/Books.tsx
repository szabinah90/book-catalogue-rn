import { SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { getBooks as getBooksThunk } from '../../../redux/actions/thunks';
// import { Book } from './Book';
import { IBook } from '../../../model/book.interface';
import { BookItem } from './BookItem/BookItem';
import { connect } from 'react-redux';
import { useScreenProperties } from '../../../utils/hooks/useScreenProperties';
import { View } from './Books.styled';

export const Books: React.FC<{ getBooks: any; books: IBook[]; navigation: any }> = ({
  getBooks,
  books,
  navigation,
}) => {
  const screenProperties = useScreenProperties();
  useEffect(() => {
    getBooks();
  }, [getBooks]);
  console.log('screenProperties', screenProperties);
  return (
    <SafeAreaView>
      <View isPortrait={screenProperties.isPortrait}>
        {books.map(book => (
          <BookItem key={book.id} book={book} screenProperties={screenProperties} navigation={navigation} />
        ))}
      </View>
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
  const { book } = state;
  return {
    books: book.items,
  };
};

// @ts-ignore
const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => dispatch(getBooksThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
