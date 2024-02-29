import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import DeviceInfo from 'react-native-device-info';
import theme from '../../../theme';
import { fonts } from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: theme.colors.secondary,
    alignItems: 'center',
  },
  TimerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  OTPText: {
    alignSelf: 'center',
    color: theme.colors.darkText,
    fontSize: 16,
    marginLeft: 10,
  },
  ImageStyle: {
    height: responsiveHeight(25),
    width: responsiveWidth(60),
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  WelcomeText: {
    fontFamily: fonts.black,
    color: theme.colors.white,
    fontSize:
      DeviceInfo.getDeviceType() === 'Tablet'
        ? responsiveFontSize(2.6)
        : responsiveFontSize(3),
    width: responsiveWidth(85),
    alignSelf: 'center',
    textAlign: 'center',
  },
  subTitleText: {
    color: theme.colors.darkText,
    fontSize: responsiveFontSize(2),
    fontFamily: fonts.bold,
    marginTop: responsiveHeight(1),
    width: responsiveWidth(85),
    alignSelf: 'center',
  },
  BottomContainer: {
    flex: 3,
    height: responsiveHeight(65),
    backgroundColor: theme.colors.primary,
    width: responsiveWidth(100),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: responsiveHeight(2),
    marginTop: responsiveHeight(5),
  },

  ButtonText: {
    alignSelf: 'center',
    color: theme.colors.primary,
    fontSize:
      DeviceInfo.getDeviceType() === 'Tablet'
        ? responsiveFontSize(1.6)
        : responsiveFontSize(2),
    fontFamily: fonts.bold,
  },
  ResendButton: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 4,
    paddingVertical: responsiveHeight(2),
    justifyContent: 'center',
    marginTop: 20,
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
  },
  Timer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    right: '5%',
  },
  TimerText: {
    fontSize: responsiveFontSize(1.8),
    color: theme.colors.darkText,
    fontFamily: fonts.medium,
  },
  root: {
    flex: 1,
    padding: 10,
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: responsiveWidth(12),
    minHeight: responsiveHeight(6),
    justifyContent: 'center',
    fontSize:
      DeviceInfo.getDeviceType() === 'Tablet'
        ? responsiveFontSize(4)
        : responsiveFontSize(5),
    borderWidth: 1,
    borderRadius: responsiveWidth(2),
    borderColor: theme.colors.darkText,
    textAlign: 'center',
    color: theme.colors.darkText,
  },
  focusCell: {
    borderColor: theme.colors.darkText,
  },
});

export default styles;
