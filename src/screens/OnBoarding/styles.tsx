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
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  language: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginBottom: responsiveHeight(4),
    marginTop: responsiveHeight(2),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  activeLangTitle: {
    color: theme.colors.white,
    fontSize: responsiveFontSize(1.5),
    fontFamily: fonts.black,
  },
  activeArabic: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: responsiveHeight(4),
    borderBottomLeftRadius: responsiveHeight(4),
    backgroundColor: theme.colors.pink,
    borderColor: theme.colors.secondary,
  },
  inactiveEnglish: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inactiveArabic: {
    height: '100%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeEnglish: {
    height: '100%',
    width: '50%',
    borderTopRightRadius: responsiveHeight(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: responsiveHeight(4),
    backgroundColor: theme.colors.pink,
    borderColor: theme.colors.secondary,
  },
  langContainer: {
    height: responsiveHeight(4),
    overflow: 'hidden',
    flexDirection: 'row',
    width: responsiveWidth(40),
    borderRadius: responsiveHeight(4),
    borderColor: theme.colors.secondary,
    borderWidth: 1,
  },
  activeDot: {
    height: responsiveHeight(1.2),
    width: responsiveHeight(1.2),
    borderRadius: responsiveHeight(2),
    backgroundColor: theme.colors.pink,
  },
  inActiveDot: {
    height: responsiveHeight(1.2),
    width: responsiveHeight(1.2),
    marginLeft: responsiveWidth(3),
    borderRadius: responsiveHeight(2),
    backgroundColor: theme.colors.secondary,
    opacity: 0.3,
  },
  langTitle: {
    color: theme.colors.secondary,
    fontSize: responsiveFontSize(1.5),
    fontFamily: fonts.black,
  },
  text: {
    color: theme.colors.secondary,
    width: '90%',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.2),
    fontFamily: fonts.black,
  },
  description: {
    color: '#52656C',
    width: '90%',
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontFamily: fonts.regular,
  },
  carouselContainerView: {
    width: '100%',
    alignItems: 'center',
    height: responsiveHeight(60),
    marginBottom: responsiveHeight(1),
  },
  imageStyle: {
    height:
      DeviceInfo.getDeviceType() === 'Tablet'
        ? responsiveWidth(60)
        : responsiveWidth(90),
    width:
      DeviceInfo.getDeviceType() === 'Tablet'
        ? responsiveWidth(60)
        : responsiveWidth(90),
    resizeMode: 'contain',
  },
  imageView: {
    borderRadius: 5,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default styles;
