import { useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

const isPortrait = (screen: ScaledSize) => screen.height >= screen.width;

export const useScreenProperties = () => {
  const screen = Dimensions.get('screen');

  const [properties, setProperties] = useState({ screen, isPortrait: isPortrait(screen) });

  // @ts-ignore
  const onChange = ({ screen }) => {
    setProperties({ screen, isPortrait: isPortrait(screen) });
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });
  return properties;
};
