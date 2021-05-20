import React from 'react';
import { IBook } from '../../../../model/book.interface';
import { Image, Pressable } from './BookItem.styled';
import { ScaledSize } from 'react-native';

export const BookItem: React.FC<{
  book: IBook;
  screenProperties: { screen: ScaledSize; isPortrait: boolean };
  handlePress: any;
  handleLongPress?: any;
}> = ({ book, screenProperties, handlePress, handleLongPress }) => {
  const { screen, isPortrait } = screenProperties;
  const width = screen.width / 2 - 20;
  const height = screen.height / 3 - 20;

  return (
    <Pressable hitSlop={10} onPress={handlePress} onLongPress={handleLongPress} delayLongPress={100}>
      <Image source={{ uri: book.cover }} style={{ width, height }} />
    </Pressable>
  );
};
