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
import LinearGradient from 'react-native-linear-gradient';

const ItemList = ({navigation, mystl, centerImg, onPress, img, title}) => {
  console.log('myStl =>', mystl);
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          style={
            mystl ? [styles.section, {backgroundColor: 'red'}] : styles.section
          }
          source={img}>
          {mystl ? (
            <Image
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../assets/tick.png')}
            />
          ) : null}
        </ImageBackground>
      </TouchableOpacity>
      <Text style={styles.title}>{mystl ? 'selected' : title}</Text>
    </SafeAreaView>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(42),
    height: wp(40),
    borderRadius: 5,
    marginHorizontal: wp(2),
    marginTop: wp(2),
  },
  title: {
    alignSelf: 'center',
    marginVertical: 5,
    fontSize: 20,
  },
});
