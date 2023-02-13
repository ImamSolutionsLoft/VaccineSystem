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
import ProgressBar from 'react-native-progress/Bar';
import {styles} from './styles';
import ItemList from '../../components/ItemList';

import {appImages} from '../../services/utilities/assets';
import Header from '../../components/header';
import moment from 'moment';
import {useDispatch, useSelector} from 'react-redux';
import {bookingTime} from '../../Redux/actions/authAction';
import Snackbar from 'react-native-snackbar';

const AvailableSlots = ({navigation}) => {
  let dispatch = useDispatch();
  const values = useSelector(state => state.auth);
  console.log('values =>', values);
  const [isItem, setSelectedItem] = useState([]);
  const [isDate, setNewDate] = useState(new Date());

  const VaccineType = [
    {
      id: 1,
      title: '10:30',
    },
    {
      id: 2,
      title: '11:30',
    },
    {
      id: 3,
      title: '12:30',
    },
    {
      id: 4,
      title: '3:30',
    },
    {
      id: 5,
      title: '5:30',
    },
    {
      id: 6,
      title: '6:30',
    },
    {
      id: 7,
      title: '7:30',
    },
  ];

  const addCategories = async item => {
    var selectedIdss = [...isItem];
    if (selectedIdss.includes(item.id)) {
      selectedIdss = selectedIdss.filter(id => id !== item.id);
    } else {
      selectedIdss = [];
      selectedIdss.push(item.id);
    }
    setSelectedItem(selectedIdss);
  };

  const saveBooking = () => {
    if (!values?.bookingTime || values?.bookingTime == '') {
      Snackbar.show({
        text: 'Please select booking time',
        textColor: 'white',
        backgroundColor: 'red',
      });
    } else if (isItem[0] == values?.bookingTime[0]) {
      Snackbar.show({
        text: 'Booking Not Available',
        textColor: 'white',
        backgroundColor: 'red',
      });
    } else {
      dispatch(bookingTime(isItem));
      Snackbar.show({
        text: 'Booking Saved Successfully!',
        textColor: 'white',
        backgroundColor: 'green',
      });
      navigation.navigate('CategoryScreen');
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.uppertxtView}>
        <Text style={styles.uppertxt}>Available Slots</Text>
      </View>
      <View style={styles.dateView}>
        <Text style={styles.dateTxt}>
          {moment(isDate).format('DD/MM/YYYY')}
        </Text>
      </View>
      <View>
        <FlatList
          data={VaccineType}
          numColumns={3}
          style={{marginHorizontal: wp(5), marginTop: wp(5)}}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => addCategories(item)}
              style={
                isItem?.includes(item?.id)
                  ? [styles.itemView, {backgroundColor: 'skyblue'}]
                  : values.bookingTime?.includes(item.id)
                  ? [
                      styles.itemView,
                      {
                        backgroundColor: 'red',
                      },
                    ]
                  : styles.itemView
              }>
              <Text style={styles.itemTxt}>{item?.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          saveBooking();
        }}
        style={styles.btn}>
        <Text style={styles.txt}>{'Book'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AvailableSlots;
