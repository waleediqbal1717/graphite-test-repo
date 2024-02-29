import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const colors = {
  primary: '#FAFAFA', // black//'#141F23'
  tabBarPrimary: '#0C1E24', // lighter black
  secondary: '#37358D', // green//'#93D334'
  textColorLight: '#383790', // grey
  textColorDark: '#52656C', // '#52668D',
  lightGray: 'rgba(82, 101, 108, 0.9)',
  green: '#93D334',
  blue: '#1877F2',
  accentGreen: '#7AB934',
  strokeGrey: '#38464F',
  PlaceHolderColor: '#9ea7aa',
  pink: '#EC1D69', // '#FF2756',

  accentColor: '#404040',
  polygonColor: 'rgba(29,176,0,0.5)',
  Gold: 'rgb(249,176,0)',
  yellow: 'rgb(249,176,0)',
  sceneBgColor: '#FFF1D8',
  white: '#FFFFFF',
  silver: 'rgb(151,151,151)',
  borderColor: '#9c9c9c',
  grey: '#979797',
  pickerHeader: 'rgb(225,224,224)',
  loader_blue: '#39ade5',
  input_selection_color_blue: '#39ade5',
  input_selection_color_white: '#ffffff',
  input_selection_color_black: '#000000',
  black: '#000000',
  error: '#d44447',
  red: '#d44447',
  purple: 'purple',
  orange: '#EB7001',
};

export const maxFontSize = 1.2;
export const allowFontScaling = true;

export const fonts = {
  regular: 'Cairo-Regular',
  medium: 'Cairo-Medium',
  bold: 'Cairo-Bold',
  black: 'Cairo-Black',
  extraBold: 'Cairo-ExtraBold',
  light: 'Cairo-Light',
  thin: 'Cairo-ExtraLight',
};

const theme = {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    blue: colors.blue,
    accentGreen: colors.accentGreen,
    stroke: colors.strokeGrey,
    tabBarPrimary: colors.tabBarPrimary,
    darkText: colors.textColorDark,
    placeHolderColor: colors.PlaceHolderColor,
    pink: colors.pink,

    accentColor: colors.accentColor,
    polygonColor: colors.polygonColor,
    Gold: colors.Gold,
    sceneBgColor: colors.sceneBgColor,
    white: colors.white,
    silver: colors.silver,
    borderColor: colors.borderColor,
    grey: colors.grey,
    lightGray: colors.lightGray,
    pickerHeader: colors.pickerHeader,
    loader_blue: colors.loader_blue,
    black: colors.black,
    error: colors.error,
    input_selection_color_blue: colors.input_selection_color_blue,
    input_selection_color_white: colors.input_selection_color_white,
    input_selection_color_black: colors.input_selection_color_black,

    /**
     * TODO: Handle this one with color issue
     * in android the color grey on Map is not rendering so had to use turquoise
      - ref https://github.com/react-native-maps/react-native-maps/issues/887
      - solution using your own images
    */
    pin_color_grey: Platform.OS === 'android' ? '#000080' : colors.grey,
    pin_color_yellow: colors.yellow,
    pin_color_red: colors.red,
    pin_color_purple: colors.purple,
    pin_color_blue: colors.blue,
    pin_color_green: colors.green,
    pin_color_orange: colors.orange,
  },
  Header: {
    statusBarProps: {
      barStyle: 'dark-content',
      translucent: true,
    },
    containerStyle: {
      borderBottomWidth: 0,
    },
    backgroundColor: colors.secondary,
    centerComponent: {
      style: {
        fontFamily: fonts.medium,
        color: colors.white,
        fontSize: 20,
        letterSpacing: 0,
      },
    },
  },
  View: {
    Container: {
      padding: 15,
    },
    Grabber: {
      width: 40,
      backgroundColor: colors.lightGray,
      borderRadius: 50,
      height: 4,
      marginTop: 3,
      alignSelf: 'center',
    },
  },
  Button: {
    loadingProps: { color: colors.loader_blue },
    gradientBtnLoadingProp: { color: colors.white },
    titleStyle: {
      color: colors.primary,
      fontFamily: fonts.black,
      textTransform: 'uppercase' as const,
      fontSize:
        DeviceInfo.getDeviceType() === 'Tablet'
          ? responsiveFontSize(1.6)
          : responsiveFontSize(2),
    },
    LangTitle: {
      color: colors.secondary,
      fontSize:
        DeviceInfo.getDeviceType() === 'Tablet'
          ? responsiveFontSize(1.6)
          : responsiveFontSize(2),
      fontFamily: fonts.black,
    },
    ActiveLangTitle: {
      color: colors.primary,
      fontSize:
        DeviceInfo.getDeviceType() === 'Tablet'
          ? responsiveFontSize(1.6)
          : responsiveFontSize(2),
      fontFamily: fonts.black,
    },
    buttonStyle: {
      borderRadius: 12,
      backgroundColor: colors.secondary,
      width: responsiveWidth(90),
      height: responsiveHeight(6),
      alignSelf: 'center' as const,
    },
    FBbuttonStyle: {
      borderRadius: 12,
      backgroundColor: colors.blue,
      marginVertical: 10,
      width: responsiveWidth(90),
      alignSelf: 'center',
      alignItems: 'center',
    },
    gradientStyle: {
      width: responsiveWidth(90),
      height: '100%',
      paddingHorizontal: responsiveWidth(3),
      alignSelf: 'center',
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    },
    gradientBoxStyle: {
      width: responsiveWidth(38),
      height: responsiveHeight(25),
      alignSelf: 'center',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: colors.secondary,
    },
    gradientSelectedBoxStyle: {
      width: responsiveWidth(38),
      height: responsiveHeight(25),
      alignSelf: 'center',
      borderRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    outlineStyle: {
      width: responsiveWidth(90),
      paddingHorizontal: responsiveWidth(2),
      alignSelf: 'center',
      borderRadius: 12,
      paddingVertical: responsiveWidth(3),
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.secondary,
      marginTop: 10,
    },
    Emailbuttonstyle: {
      width: responsiveWidth(90),
      paddingHorizontal: responsiveWidth(2),
      alignSelf: 'center',
      borderRadius: 12,
      paddingVertical: responsiveWidth(3),
      borderWidth: 1,
      borderColor: colors.secondary,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    outlineTitleStyle: {
      color: colors.secondary,
      fontFamily: fonts.black,
      textTransform: 'uppercase',
      fontSize:
        DeviceInfo.getDeviceType() === 'Tablet'
          ? responsiveFontSize(1.6)
          : responsiveFontSize(2),
    },
    type: 'outline',
    titleProps: {
      maxFontSizeMultiplier: maxFontSize,
      allowFontScaling,
    },
    GradientDisabledTitleStyle: {
      color: colors.lightGray,
    },
  },

  Text: {
    maxFontSizeMultiplier: maxFontSize,
    allowFontScaling,

    h1Style: {
      fontSize: 30,
      fontFamily: fonts.bold,
    },
    h2Style: {
      fontSize: 22,
      fontFamily: fonts.medium,
    },
    h3Style: {
      fontSize: 20,
      padding: 5,
      fontFamily: fonts.medium,
    },
    h4Style: {
      fontSize: 15,
      fontWeight: 'normal',
      padding: 5,
      fontFamily: fonts.medium,
    },
    errors: {
      fontFamily: fonts.medium,
      color: colors.error,
      fontSize: 15,
    },
    sayings: {
      fontSize: 12,
      fontWeight: 'normal',
      padding: 5,
      color: colors.black,
      fontFamily: fonts.medium,
      textAlign: 'center',
    },

    HyperLink: { color: colors.Gold, fontFamily: fonts.medium },
    RnRegular: {
      fontFamily: fonts.regular,
      color: colors.black,
    },
    RnRegularGray: {
      fontFamily: fonts.thin,
      color: colors.grey,
    },
    RnMedium: {
      fontFamily: fonts.medium,
      color: colors.black,
    },
    RnMediumColor: {
      fontFamily: fonts.medium,
      color: colors.primary,
      marginRight: 25,
    },
    RnLight: {
      fontFamily: fonts.light,
    },
    RnMediumColorWhite: {
      fontFamily: fonts.medium,
      color: colors.white,
    },
    RnMediumColorWhiteBold: {
      fontFamily: fonts.bold,
      color: colors.white,
      fontSize: responsiveFontSize(1.8),
    },
    Generics: {
      fontSize: 18,
    },
  },

  SocialIcon: {
    style: {
      borderRadius: 5,
      paddingLeft: 30,
      paddingRight: 30,
    },
  },

  Input: {
    inputContainerStyle: {
      borderRadius: 5,
      borderBottomColor: colors.grey,
      paddingLeft: 15,
      paddingVertical: Platform.OS === 'android' ? 0 : 10,
    },
    selectionColor: colors.primary,
    containerStyle: {
      marginVertical: 5,
    },
    inputStyle: {
      color: colors.black,
      fontFamily: fonts.regular,
    },
    labelStyle: {
      color: colors.primary,
      fontFamily: fonts.medium,
      fontSize: 12,
    },
    placeholderTextColor: colors.grey,
    errorStyle: { color: 'white', fontFamily: fonts.regular },
    errorRedStyle: { color: colors.error, fontFamily: fonts.regular },
    maxFontSizeMultiplier: maxFontSize,
    allowFontScaling,
    selectable: false,
  },

  Icon: {
    size: 25,
    underlayColor: 'transparent',
    padding: 5,
    color: colors.secondary,
  },
  Badge: {
    badgeStyle: {
      backgroundColor: colors.Gold,
      width: 10,
      height: 10,
      borderRadius: 10 / 2,
    },
    containerStyle: {
      position: 'absolute',
      top: 8,
      right: 9,
    },
  },
  CheckBox: {
    containerStyle: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
  },

  Picker: {
    itemStyle: { borderRadius: 1 },
  },
  Image: {
    placeholderStyle: { backgroundColor: 'transparent' },
    IconStyle: { width: 20, height: 20, resizeMode: 'contain', padding: 10 },
    AvatarStyle: { width: 70, height: 70, resizeMode: 'contain' },
    BiometricStyle: { width: 30, height: 30, resizeMode: 'contain' },
  },
  Avatar: {
    placeholderStyle: { backgroundColor: 'transparent' },
    overlayContainerStyle: { backgroundColor: 'transparent' },
  },
  Card: {
    containerStyle: { borderRadius: 10 },
    titleStyle: { fontFamily: fonts.thin },
  },
  Divider: {
    style: { height: 1.2 },
  },
  ListItem: {
    titleStyle: {
      fontFamily: fonts.medium,
      paddingBottom: 10,
      color: colors.white,
    },
    subtitleStyle: {
      fontFamily: fonts.regular,
      fontSize: 12,
    },
  },

  BottomSheetContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'silver',
    borderWidth: 1,
    borderTopWidth: 1,
  },
  Grabber: {
    width: 50,
    height: 10,
    alignSelf: 'center',
    margin: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 20,
  },
};

export default theme;
