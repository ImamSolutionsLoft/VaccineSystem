import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {appImages} from '../services/utilities/assets';

const Header = ({onPress}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.section} onPress={onPress}>
        <Image style={styles.img} source={appImages.backImg} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  section: {
    marginTop: wp(10),
    marginHorizontal: wp(5),
  },
  img: {
    width: 30,
    height: 30,
  },
});
