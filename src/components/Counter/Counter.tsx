import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Text } from './Counter.styled';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(c => c + 1);
  };
  return (
    <SafeAreaView>
      <Text>Counter: {counter}</Text>
      <Button onPress={handleClick}>
        <Text>Counter</Text>
      </Button>
    </SafeAreaView>
  );
};
