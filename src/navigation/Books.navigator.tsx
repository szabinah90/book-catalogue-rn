import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Books from '../components/Screens/Books/Books';
import BookDetails from '../components/Screens/BookDetails/BookDetails';
import { defaultTheme } from '../styles/theme-colors';

const BooksStack = createStackNavigator();

export const BooksNavigator = () => {
  return (
    <BooksStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: defaultTheme.primary,
        },
        headerTintColor: defaultTheme.black,
        headerTitleStyle: {
          fontWeight: '800',
          letterSpacing: 1,
        },
        // akkor, ha meg akarom változtatni, a vissza gombot
        // headerBackImage: () => <Icon name="arrow-back-ios" type="material" color={defaultTheme.black} size={25} />,
      }}
    >
      <BooksStack.Screen name="Books" component={Books} options={{ title: 'Available Books' }} />
      <BooksStack.Screen name="Book" component={BookDetails} options={{ headerShown: false }} />
    </BooksStack.Navigator>
  );
};
