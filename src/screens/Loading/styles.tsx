import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    ...theme.Text.h1Style,
    fontSize: responsiveFontSize(4),
    color: theme.colors.secondary,
  },
  divider: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 2,
    width: responsiveWidth(12),
    marginVertical: responsiveWidth(3),
  },
  subtitle: {
    ...theme.Text.h1Style,
    fontSize: 16,
    color: 'rgba(82, 101, 108, 1)',
    textAlign: 'center',
  },
});

export default styles;
