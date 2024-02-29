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
    flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: theme.colors.secondary,
  },
  ImageStyle: {
    height: responsiveHeight(30),
    width: responsiveWidth(50),
    resizeMode: 'contain',
    marginLeft: responsiveWidth(18),
  },
  LetGoText: {
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
  EmailInput: {
    width: responsiveWidth(85),
    height: responsiveHeight(8),
    borderRadius: 13,
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    marginTop: responsiveHeight(2),
    alignSelf: 'center',
    padding: 10,
    fontSize:
      DeviceInfo.getDeviceType() === 'Tablet'
        ? responsiveFontSize(1.6)
        : responsiveFontSize(2),
    color: theme.colors.darkText,
    fontFamily: fonts.medium,
  },
  ButtonContainer: {
    width: responsiveWidth(85),
    alignSelf: 'center',
  },
  NextButton: {
    marginTop: responsiveHeight(2),
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ErrorMessage: {
    color: theme.colors.error,
    fontSize: responsiveFontSize(1.4),
    fontFamily: fonts.medium,
    marginTop: 5,
    width: responsiveWidth(85),
    alignSelf: 'center',
  },
  BottomContainer: {
    height: responsiveHeight(70),
    backgroundColor: theme.colors.primary,
    width: responsiveWidth(100),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: responsiveHeight(2),
    marginTop: responsiveHeight(3),
  },
});

export default styles;
