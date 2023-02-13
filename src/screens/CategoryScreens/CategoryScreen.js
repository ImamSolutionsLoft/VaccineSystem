import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {styles} from './styles';
import ItemList from '../../components/ItemList';

const CategoryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('AvailableSlots')}
        style={styles.btn}>
        <Text style={styles.txt}>{' Book a vaccine'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('VaccineType')}
        style={styles.btn}>
        <Text style={styles.txt}>{' Manage Calendar'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CategoryScreen;
