import { Alert, SafeAreaView, Text, View } from 'react-native';
import React from 'react';
import { DescriptionText, DetailsContainer, GenreText, Title, Subtitle } from './BookDetails.styled';
import { Flexbox, ScreenContainer } from '../../../styles/common.styled';
import { useScreenProperties } from '../../../utils/hooks/useScreenProperties';
import { Image } from '../Books/BookItem/BookItem.styled';
import { IconButton } from '../../buttons/IconButton';
import { Icon } from 'react-native-elements';
import { defaultTheme } from '../../../styles/theme-colors';

export const BookDetails: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
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
            <Text>Pages: {book.pages}</Text>
            <Text>Published: {book.published}</Text>
            <Text>Ratings: {book.rating}</Text>
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

/*<IconButton icon="add" />*/
