import { Button, SafeAreaView, Text } from 'react-native';
import React, { useEffect } from 'react';

export const BookDetails: React.FC<{ navigation: any; route: any }> = ({ navigation, route }) => {
  const { book } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: `${book.author} – ${book.title}` });
  }, [navigation, book]);
  return (
    <SafeAreaView>
      <Text>{book.title}</Text>
      <Button title="Go to Books" onPress={() => navigation.navigate('Books')} />
    </SafeAreaView>
  );
};
