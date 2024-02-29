import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import DeviceInfo from 'react-native-device-info';
import theme from '../../theme';
import { fonts } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    paddingVertical: responsiveWidth(5),
    justifyContent: 'space-between',
  },
  NetworkBanner: {
    width: responsiveWidth(100),
    height: responsiveWidth(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.error,
  },
  NetErrorText: {
    ...theme.Text.h1Style,
    fontSize: responsiveFontSize(1.5),
    color: theme.colors.primary,
    textAlign: 'center',
  },
  subtitle: {
    color: 'rgba(82, 101, 108, 1)',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.8),
  },
  subtitleLink: {
    ...theme.Text.h1Style,
    fontSize:
      DeviceInfo.getDeviceType() === 'Tablet'
        ? responsiveFontSize(1.4)
        : responsiveFontSize(1.8),
    color: theme.colors.secondary,
    textAlign: 'center',
    fontFamily: fonts.bold,
  },
  ButtonContainer: {
    width: responsiveWidth(90),
    alignSelf: 'center',
  },
  Divider: {
    flexDirection: 'row',
    marginVertical: responsiveHeight(2),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  loginButton: {
    width: '100%',
    height: '100%',
    paddingHorizontal: responsiveWidth(2),
    alignSelf: 'center',
    borderRadius: responsiveWidth(10),
    paddingVertical: responsiveWidth(3),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    ...theme.Button.titleStyle,
    color: theme.colors.white,
    marginLeft: responsiveWidth(4),
    fontSize:
      DeviceInfo.getDeviceType() === 'Tablet'
        ? responsiveFontSize(1.6)
        : responsiveFontSize(2),
  },
  Language: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  GoogleContainer: {
    height: responsiveFontSize(2),
    width: responsiveFontSize(2),
    borderRadius: 99,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  privacyView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  Text: {
    color: '#52656C',
    width: '90%',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.2),
    fontFamily: fonts.black,
  },
  LangTitle: {
    color: theme.colors.secondary,
    fontSize: responsiveFontSize(1.5),
    fontFamily: fonts.black,
  },
  Title: {
    color: theme.colors.secondary,
    fontSize:
      DeviceInfo.getDeviceType() === 'Tablet'
        ? responsiveFontSize(2.6)
        : responsiveFontSize(3),
    fontFamily: fonts.black,
    marginVertical: responsiveHeight(7),
    width: '90%',
    textAlign: 'center',
    alignSelf: 'center',
  },
  FBbuttonStyle: {
    borderRadius: 12,
    backgroundColor: theme.colors.blue,
    marginVertical: responsiveWidth(1),
    width: '100%',
    height: responsiveHeight(6),
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  GoogleButtonStyle: {
    borderRadius: 12,
    backgroundColor: '#ea4335',
    marginVertical: responsiveWidth(1),
    width: '100%',
    height: responsiveHeight(6),
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 10,
  },

  ApplebuttonStyle: {
    borderRadius: 12,
    backgroundColor: 'black',
    marginVertical: responsiveWidth(2),
    width: '100%',
    height: responsiveHeight(6),
    alignSelf: 'center',
    paddingHorizontal: '10%',
    overflow: 'hidden',
    justifyContent: 'center',
    elevation: 10,
  },

  Phonebuttonstyle: {
    borderRadius: 12,
    borderColor: theme.colors.secondary,
    borderWidth: 2,
    backgroundColor: theme.colors.white,
    marginTop: responsiveWidth(2),
    width: '100%',
    height: responsiveHeight(6),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  ButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ActiveLangTitle: {
    color: theme.colors.white,
    fontSize: responsiveFontSize(1.5),
    fontFamily: fonts.black,
  },
  ActiveArabic: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: responsiveHeight(4),
    borderBottomLeftRadius: responsiveHeight(4),
    backgroundColor: theme.colors.pink,
    borderColor: theme.colors.secondary,
    overflow: 'hidden',
  },
  InactiveEnglish: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InactiveArabic: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ActiveEnglish: {
    height: '100%',
    width: '50%',
    borderTopRightRadius: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: responsiveHeight(4),
    backgroundColor: theme.colors.pink,
    borderColor: theme.colors.secondary,
    overflow: 'hidden',
  },
  LangContainer: {
    height: responsiveHeight(5),
    overflow: 'hidden',
    flexDirection: 'row',
    width: responsiveWidth(40),
    borderRadius: responsiveHeight(4),
    borderColor: theme.colors.secondary,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  EmailInput: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    borderRadius: 13,
    borderColor: theme.colors.borderColor,
    borderWidth: 1,
    alignSelf: 'center',
    paddingLeft: 20,
    fontSize: responsiveFontSize(2),
    color: '#52668D',
    justifyContent: 'center',
  },
  BottomButtonContainer: {
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
    fontFamily: fonts.regular,
    marginTop: 5,
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
});

export default styles;
