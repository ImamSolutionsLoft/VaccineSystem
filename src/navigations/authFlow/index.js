import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import CategoryScreen from '../../screens/CategoryScreens/CategoryScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VaccineType from '../../screens/VaccineType/VaccineType';
import AvailableSlots from '../../screens/AvailableSlots/AvailableSlots';

const Stack = createNativeStackNavigator();

export const AuthFlow = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="CategoryScreen">
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="VaccineType" component={VaccineType} />
      <Stack.Screen name="AvailableSlots" component={AvailableSlots} />
    </Stack.Navigator>
  );
  x;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
  },
});
