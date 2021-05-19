import React from 'react';
import { defaultTheme } from '../../styles/theme-colors';
import { Icon, Pressable } from './IconButton.styled';

export const IconButton: React.FC<{ icon: string; onPress: () => void }> = ({ icon, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Icon name={icon} type="material" color={defaultTheme.black} size={25} />
    </Pressable>
  );
};
