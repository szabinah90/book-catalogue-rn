import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { DetailsContainer, GenreText } from './BookDetails.styled';
import { Flexbox, ScreenContainer } from '../../common.styled';
import { useScreenProperties } from '../../../utils/hooks/useScreenProperties';
import { Image } from '../Books/BookItem/BookItem.styled';

export const BookDetails: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const { book } = route.params;
  const { screen } = useScreenProperties();
  const width = screen.width / 2;
  const height = screen.height / 3;
  useEffect(() => {
    navigation.setOptions({ title: `${book.author} – ${book.title}` });
  }, [navigation, book]);
  return (
    <SafeAreaView>
      <ScreenContainer>
        <Flexbox>
          <GenreText>{book.genre.join(', ')}</GenreText>
        </Flexbox>
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
          <Text>{book.description}</Text>
        </Flexbox>
        <Flexbox>
          <TouchableOpacity onPress={() => navigation.navigate('Books')}>
            <Text>Back to List</Text>
          </TouchableOpacity>
        </Flexbox>
      </ScreenContainer>
    </SafeAreaView>
  );
};
