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
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import CalenderPicker from '../../components/CalenderPicker';
import {useDispatch} from 'react-redux';
import {
  dayFrom,
  dayTo,
  fromBreakTime,
  fromTime,
  toBreakTime,
  toTime,
  vaccineType,
} from '../../Redux/actions/authAction';

const VaccineType = ({navigation}) => {
  const [isItem, setSelectedItem] = useState([]);
  let dispatch = useDispatch();

  const Init = [
    {
      id: 1,
      value: '',
      visible: false,
    },
    {
      id: 2,
      value: '',
      visible: false,
    },
    {
      id: 3,
      value: '',
      visible: false,
    },
    {
      id: 4,
      value: '',
      visible: false,
    },
    {
      id: 5,
      value: '',
      visible: false,
    },
    {
      id: 6,
      value: '',
      visible: false,
    },
  ];
  const [isDateVisible, setIsDateVisible] = React.useState(false);
  const [Data, SetData] = React.useState(Init);
  let initial = new Date(Date.now() + 3600 * 1000 * 25);

  // handles DateConfirmation
  const handleDateConfirm = (data, index) => {
    let temp = [...Data];
    temp[index].value = moment(data).format('MM/DD/YYYY');
    temp[index].timeValue = moment(data).format('HH:mm a');
    temp[index].visible = false;
    SetData(temp);
  };

  // Executed onCancel
  const onCancel = index => {
    let temp = [...Data];
    temp[index].visible = false;
    SetData(temp);
  };

  // Executed when user opens a modal
  const onOpen = index => {
    try {
      let temp = [...Data];
      temp[index].visible = true;
      SetData(temp);
      console.log(temp);
    } catch (error) {
      console.log(error);
    }
  };

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

  const VaccineType = [
    {
      id: 1,
      title: 'Covid',
    },
    {
      id: 2,
      title: 'flu',
    },
    {
      id: 3,
      title: 'Dengue',
    },
  ];
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Header onPress={() => navigation.goBack()} />
      <View style={styles.uppertxtView}>
        <Text style={styles.uppertxt}>
          Choose the vaccine type to book your slot{' '}
        </Text>
      </View>

      <CalenderPicker
        isDateVisible={Data[0].visible}
        mode={'date'}
        handleDateConfirm={data => handleDateConfirm(data, 0)}
        onCancel={() => onCancel(0)}
      />
      <CalenderPicker
        isDateVisible={Data[1].visible}
        mode={'date'}
        handleDateConfirm={data => handleDateConfirm(data, 1)}
        onCancel={() => onCancel(1)}
      />
      <CalenderPicker
        isDateVisible={Data[2].visible}
        mode={'time'}
        handleDateConfirm={data => handleDateConfirm(data, 2)}
        onCancel={() => onCancel(2)}
      />
      <CalenderPicker
        isDateVisible={Data[3].visible}
        mode={'time'}
        handleDateConfirm={data => handleDateConfirm(data, 3)}
        onCancel={() => onCancel(3)}
      />
      <CalenderPicker
        isDateVisible={Data[4].visible}
        mode={'time'}
        handleDateConfirm={data => handleDateConfirm(data, 4)}
        onCancel={() => onCancel(4)}
      />
      <CalenderPicker
        isDateVisible={Data[5].visible}
        mode={'time'}
        handleDateConfirm={data => handleDateConfirm(data, 5)}
        onCancel={() => onCancel(5)}
      />
      <View>
        <FlatList
          data={VaccineType}
          horizontal={true}
          style={{marginHorizontal: wp(5), marginTop: wp(5)}}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => addCategories(item)}
              style={
                isItem?.includes(item?.id)
                  ? [styles.itemView, {backgroundColor: 'skyblue'}]
                  : styles.itemView
              }>
              <Text style={styles.itemTxt}>{item?.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* // */}
      <View style={styles.uppertxtView}>
        <Text style={styles.uppertxt}>Select Slot Day</Text>
      </View>
      <View style={styles.direcView}>
        <TouchableOpacity onPress={() => onOpen(0)} style={styles.dropDownView}>
          <Text style={styles.insideTxt}>
            {Data[0].value ? Data[0]?.value : 'From'}
          </Text>
          <Image style={styles.img} source={appImages.downImg} />
        </TouchableOpacity>

        <Text style={styles.centerTxt}>To </Text>
        <TouchableOpacity onPress={() => onOpen(1)} style={styles.dropDownView}>
          <Text style={styles.insideTxt}>
            {Data[1].value ? Data[1].value : 'To'}
          </Text>
          <Image style={styles.img} source={appImages.downImg} />
        </TouchableOpacity>
      </View>
      {/* // */}
      {/* // */}
      <View style={styles.uppertxtView}>
        <Text style={styles.uppertxt}>Select Slot Time</Text>
      </View>
      <View style={styles.direcView}>
        <TouchableOpacity onPress={() => onOpen(2)} style={styles.dropDownView}>
          <Text style={styles.insideTxt}>
            {Data[2].timeValue ? Data[2].timeValue : 'From'}
          </Text>
          <Image style={styles.img} source={appImages.downImg} />
        </TouchableOpacity>
        <Text style={styles.centerTxt}> To </Text>
        <TouchableOpacity onPress={() => onOpen(3)} style={styles.dropDownView}>
          <Text style={styles.insideTxt}>
            {Data[3].timeValue ? Data[3].timeValue : 'To'}
          </Text>
          <Image style={styles.img} source={appImages.downImg} />
        </TouchableOpacity>
      </View>
      {/* // */}
      {/* // */}
      <View style={styles.uppertxtView}>
        <Text style={styles.uppertxt}>Select Break Time</Text>
      </View>
      <View style={styles.direcView}>
        <TouchableOpacity onPress={() => onOpen(4)} style={styles.dropDownView}>
          <Text style={styles.insideTxt}>
            {Data[4].timeValue ? Data[4].timeValue : 'From'}
          </Text>
          <Image style={styles.img} source={appImages.downImg} />
        </TouchableOpacity>
        <Text style={styles.centerTxt}> To </Text>
        <TouchableOpacity onPress={() => onOpen(5)} style={styles.dropDownView}>
          <Text style={styles.insideTxt}>
            {Data[5].timeValue ? Data[5].timeValue : 'To'}
          </Text>
          <Image style={styles.img} source={appImages.downImg} />
        </TouchableOpacity>
      </View>
      {/* // */}

      <TouchableOpacity
        onPress={() => {
          dispatch(vaccineType(isItem));
          dispatch(dayFrom(Data[0].value));
          dispatch(dayTo(Data[1].value));
          dispatch(fromTime(Data[2].timeValue));
          dispatch(toTime(Data[3].timeValue));
          dispatch(fromBreakTime(Data[4].timeValue));
          dispatch(toBreakTime(Data[5].timeValue));
          navigation.navigate('AvailableSlots');
        }}
        style={styles.btn}>
        <Text style={styles.txt}>{'Next'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default VaccineType;
