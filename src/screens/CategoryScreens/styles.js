import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerView: {
    alignSelf: 'center',
  },
  stepTxt: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: wp(5),
  },
  title: {
    marginHorizontal: wp(5),
    color: 'black',
    fontSize: 35,
    lineHeight: 45,
    fontWeight: '500',
  },
  subTitle: {
    marginHorizontal: wp(5),
    color: 'black',
    fontSize: 15,
    lineHeight: 45,
  },
  btn: {
    marginTop: wp(10),
    width: wp(80),
    height: wp(14),
    borderRadius: 20,
    backgroundColor: 'skyblue',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  txt: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
  },
  slider: {
    width: 80,
    backgroundColor: 'red',
  },
});
