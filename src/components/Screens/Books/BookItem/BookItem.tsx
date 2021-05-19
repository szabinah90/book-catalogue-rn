import React from 'react';
import { IBook } from '../../../../model/book.interface';
import { Image, TouchableOpacity } from './BookItem.styled';
import { ScaledSize } from 'react-native';

export const BookItem: React.FC<{
  book: IBook;
  screenProperties: { screen: ScaledSize; isPortrait: boolean };
  handlePress: any;
}> = ({ book, screenProperties, handlePress }) => {
  const { screen, isPortrait } = screenProperties;
  const width = screen.width / 2 - 20;
  const height = screen.height / 3 - 20;
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
      <Image source={{ uri: book.cover }} style={{ width, height }} />
    </TouchableOpacity>
  );
};
