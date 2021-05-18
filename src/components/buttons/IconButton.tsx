import React from 'react';
import { defaultTheme } from '../../styles/theme-colors';
import { TouchableOpacity, Icon } from './IconButton.styled';

export const IconButton: React.FC<{ icon: string; onPress: () => void }> = ({ icon, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} type="material" color={defaultTheme.black} size={25} />
    </TouchableOpacity>
  );
};

/*<Icon name={icon} type="material" color={defaultTheme.black} size={25} />*/
