import { StyleSheet } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(85),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: responsiveWidth(5),
  },
  greenDot: {
    backgroundColor: theme.colors.pink,
    width: responsiveWidth(13),
    height: responsiveWidth(5),
    opacity: 0.2,
  },
  accentGreenDot: {
    backgroundColor: theme.colors.pink,
    width: responsiveWidth(13),
    height: responsiveWidth(5),
  },
  startPill: {
    borderTopLeftRadius: responsiveWidth(5),
    borderBottomLeftRadius: responsiveWidth(5),
  },
  endPill: {
    borderTopRightRadius: responsiveWidth(5),
    borderBottomRightRadius: responsiveWidth(5),
  },
});

export default styles;
