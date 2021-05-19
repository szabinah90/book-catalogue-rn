import { Alert, SafeAreaView, View } from 'react-native';
import React from 'react';
import {
  DescriptionText,
  Details,
  DetailsContainer,
  DetailsText,
  GenreText,
  Subtitle,
  Title,
} from './BookDetails.styled';
import { Flexbox, ScreenContainer } from '../../../styles/common.styled';
import { useScreenProperties } from '../../../utils/hooks/useScreenProperties';
import { Image } from '../Books/BookItem/BookItem.styled';
import { IconButton } from '../../buttons/IconButton';
import { Icon } from 'react-native-elements';
import { defaultTheme } from '../../../styles/theme-colors';
import { purchaseBook as purchaseBookThunk } from '../../../redux/actions/thunks';
import { connect } from 'react-redux';

export const BookDetails: React.FC<{ navigation: any; route: any; purchaseBook: any }> = ({
  navigation,
  route,
  purchaseBook,
}) => {
  const { book } = route.params;
  const { screen } = useScreenProperties();
  const width = screen.width / 2;
  const height = screen.height / 3;

  /*
  Ha ki akarom írni a nav headerben a nevét a könyvnek
  useEffect(() => {
    navigation.setOptions({ title: `${book.author} – ${book.title}` });
  }, [navigation, book]);*/

  const handleBuyBook = () => {
    console.log('value', book.id);
    purchaseBook(book.id);
    Alert.alert('Success', `You bought a book: ${book.title}`, [
      {
        text: 'Ok',
        onPress: () => console.log('OK Pressed'),
      },
    ]);
  };

  const handleNavigateToBooks = () => {
    // navigation.goBack();
    navigation.navigate('Books');
  };

  return (
    <SafeAreaView>
      <ScreenContainer>
        <Flexbox>
          <Icon onPress={handleNavigateToBooks} name="arrow-back-ios" color={defaultTheme.primaryDark} size={20} />
          <GenreText>{book.genre.join(', ')}</GenreText>
        </Flexbox>
        <Title>{book.title}</Title>
        <Subtitle>By {book.author}</Subtitle>
        <Flexbox alignItems="flex-end">
          <View>
            <Image source={{ uri: book.cover }} style={{ width, height }} />
          </View>
          <DetailsContainer>
            <DetailsText>
              Pages: <Details>{book.pages}</Details>
            </DetailsText>
            <DetailsText>
              Published: <Details>{book.published}</Details>
            </DetailsText>
            <DetailsText>
              Ratings: <Details>{book.rating}</Details>
            </DetailsText>
          </DetailsContainer>
        </Flexbox>
        <Flexbox>
          <DescriptionText>{book.description}</DescriptionText>
        </Flexbox>
        <Flexbox justifyContent="flex-end">
          <IconButton onPress={handleBuyBook} icon="add" />
        </Flexbox>
      </ScreenContainer>
    </SafeAreaView>
  );
};

// @ts-ignore
const mapDispatchToProps = dispatch => {
  return {
    purchaseBook: (bookId: number) => dispatch(purchaseBookThunk(bookId)),
  };
};

export default connect(null, mapDispatchToProps)(BookDetails);
