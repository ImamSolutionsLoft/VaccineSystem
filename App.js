import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {AuthFlow} from './src/navigations/authFlow/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store, persistor} from './src/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AuthFlow />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
  x;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
  },
});

export default App;
