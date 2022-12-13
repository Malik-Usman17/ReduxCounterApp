import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Screens from './src/Navigation/Screens';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
    </Provider>
  )
}

export default App;