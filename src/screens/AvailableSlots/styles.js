import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  uppertxtView: {
    marginHorizontal: wp(5),
    marginTop: wp(5),
  },
  dropDownView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(3),
    borderWidth: 1,
    width: wp(35),
    paddingVertical: wp(3.5),
    borderRadius: 5,
    borderColor: 'gray',
  },
  direcView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(5),
    marginTop: wp(5),
  },
  insideTxt: {
    fontSize: 15,
    color: 'black',
  },
  img: {
    height: 10,
    width: 10,
  },
  centerTxt: {
    fontSize: 20,
    width: wp(20),
    textAlign: 'center',
    fontWeight: '700',
    color: 'black',
  },
  itemView: {
    paddingHorizontal: wp(7),
    paddingVertical: wp(4),
    borderRadius: 5,
    marginRight: wp(4),
    backgroundColor: 'white',
    elevation: 3,
    marginBottom: wp(5),
  },
  itemTxt: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
  uppertxt: {
    fontSize: 35,
    color: 'black',
  },
  dateView: {
    width: wp(80),
    paddingVertical: wp(4),
    alignSelf: 'center',
    marginVertical: wp(5),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
  dateTxt: {
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
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
    width: wp(50),
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
