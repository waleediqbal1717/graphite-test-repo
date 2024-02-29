import { StyleSheet } from 'react-native';
import {
  responsiveWidth,
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import theme from '../../theme';
import { fonts } from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  card: {
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    elevation: 10,
  },
  titleText: {
    fontSize: responsiveFontSize(2.5),
    color: theme.colors.secondary,
    padding: responsiveWidth(2),
    alignSelf: 'center',
    fontFamily: fonts.black,
  },
  subtitle: {
    fontFamily: fonts.regular,
    fontSize: responsiveFontSize(2),
    color: theme.colors.darkText,
    marginBottom: responsiveWidth(4),
    alignSelf: 'center',
    textAlign: 'center',
  },
  Icon: {
    height: responsiveWidth(15),
    width: responsiveWidth(15),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: responsiveHeight(2),
  },
  buttonContainer: {
    marginVertical: responsiveWidth(0),
    width: responsiveWidth(50),
    alignSelf: 'center',
  },
  buttonStyle: {
    borderRadius: 12,
    backgroundColor: theme.colors.secondary,
    width: responsiveWidth(70),
    alignSelf: 'center',
  },
  gradientStyle: {
    width: responsiveWidth(70),
    paddingHorizontal: responsiveWidth(2),
    alignSelf: 'center',
    borderRadius: 12,
    paddingVertical: responsiveWidth(3),
    alignItems: 'center',
  },
  buttonTitleStyle: {
    color: theme.colors.primary,
    fontFamily: fonts.black,
    fontSize: responsiveFontSize(2),
  },
});

export default styles;
