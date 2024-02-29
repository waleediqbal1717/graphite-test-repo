import { StyleSheet } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(5),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: responsiveWidth(5),
  },
});

export default styles;
