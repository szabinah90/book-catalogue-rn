import React from 'react';
import { Text, View } from './Snackbar.styled';
import { Pressable } from 'react-native';

export const Snackbar: React.FC<{ text: string; color: string; buttonText: string; onPress: any }> = ({
  text,
  color,
  buttonText,
  onPress,
}) => {
  return (
    <View>
      <Text color={color}>{text}</Text>
      <Pressable hitSlop={10} onPress={onPress}>
        <Text color={color}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};
