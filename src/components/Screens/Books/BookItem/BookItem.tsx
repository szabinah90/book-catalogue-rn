import React from 'react';
import { IBook } from '../../../../model/book.interface';
import { Image, TouchableHighlight } from './BookItem.styled';
import { ScaledSize } from 'react-native';

export const BookItem: React.FC<{
  book: IBook;
  screenProperties: { screen: ScaledSize; isPortrait: boolean };
  navigation: any;
}> = ({ book, screenProperties, navigation }) => {
  const { screen, isPortrait } = screenProperties;
  const width = screen.width / 2 - 20;
  const height = screen.height / 3 - 20;
  // todo: navigál majd detailsre
  const handlePress = () => {
    navigation.navigate('Book', { book: book });
  };
  return (
    <TouchableHighlight underlayColor="#fadef4" activeOpacity={0.6} onPress={() => handlePress()}>
      <Image source={{ uri: book.cover }} style={{ width, height }} />
    </TouchableHighlight>
  );
};
