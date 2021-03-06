import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './src/redux/reducers';
import thunk from 'redux-thunk';
import api from './src/utils/api';
import { Provider } from 'react-redux';
import MyBooks from './src/components/Screens/MyBooks/MyBooks';
import { Icon } from 'react-native-elements';
import { defaultTheme } from './src/styles/theme-colors';
import { BooksNavigator } from './src/navigation/Books.navigator';
import { getIconName } from './src/utils/helpers';
import InitApp from './src/components/InitApp';

const Tab = createBottomTabNavigator();

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
      <InitApp>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused }) => {
                const iconName = getIconName(route.name);
                const color = focused ? defaultTheme.black : defaultTheme.primaryDark;
                return <Icon name={iconName} type="material" color={color} size={25} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: defaultTheme.black,
              inactiveTintColor: defaultTheme.primaryDark,
              labelStyle: {
                fontSize: 14,
                fontWeight: 'bold',
              },
              activeBackgroundColor: defaultTheme.primary,
              inactiveBackgroundColor: defaultTheme.primary,
            }}
          >
            <Tab.Screen name="Library" component={BooksNavigator} />
            <Tab.Screen name="My Books" component={MyBooks} />
          </Tab.Navigator>
        </NavigationContainer>
      </InitApp>
    </Provider>
  );
};
export default App;

/*
* Sima navig??ci??, headerben vissza gombbal:
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
