import React from 'react';
import {SafeAreaView} from 'react-native';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Router />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
