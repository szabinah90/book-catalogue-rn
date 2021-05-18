import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Books from './src/components/Screens/Books/Books';
import { BookDetails } from './src/components/Screens/BookDetails/BookDetails';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './src/redux/reducers';
import thunk from 'redux-thunk';
import api from './src/utils/api';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({ api })));

/* TODO:
 * tabbed navigator
 * purchase book
 * my books
 * favorites
 * read
 * */

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Books" component={Books} />
          <Stack.Screen name="Book" component={BookDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;

/*
* Sima navigáció, headerben vissza gombbal:
* const Stack = createStackNavigator();
* <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Books" component={Books} />
          <Stack.Screen name="Book" component={BookDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
*
*
* */
