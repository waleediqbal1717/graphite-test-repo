import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  View,
  Linking,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useDispatch, useSelector } from 'react-redux';
import type { RootStackParamList } from '../../../App';
import { setLanguage } from '../../redux/reducers/generalReducer';
import { GOOGLE_ICON } from '../../assets';
import styles from './styles';
import theme from '../../theme';
import { AppState } from '../../redux/reducers';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

function Login({ navigation }: Props) {
  const dispatch = useDispatch();

  const generalSelector = (state: AppState) => state.generalReducer;
  const { selectedLang, language } = useSelector(generalSelector);

  const userSelector = (state: AppState) => state.userReducer;
  const {
    isGoogleButtonLoading,
    isAppleButtonLoading,
    isFacebookButtonLoading,
  } = useSelector(userSelector);

  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState<boolean>(false);
  const [isEmptyPhone, setEmptyPhone] = useState<boolean>(false);

  useEffect(() => {
    const getCountry = async () => {
      setLoading(true);
      Geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDBkxAoxHpM9KMGhTsUTK9Db_kVUdWXYCQ`
            );
            setCountry(
              response?.data?.results[response.data.results.length - 1]
                ?.address_components[0]?.short_name || 'iq'
            );

            setLoading(false);
          } catch (error) {
            console.error('Error getting country:', error);
            setLoading(false);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    getCountry();
  }, []);
  let valuePhone: PhoneInput | null;
  const [value, setValue] = useState<string>('');
  const updateInfo = () => {
    setValue(valuePhone?.getValue() ?? '');
    setEmptyPhone(false);
    setInvalidPhone(false);
  };
  const changeCode = (val: string) => {
    setValue(val);
    setEmptyPhone(false);
    setInvalidPhone(false);
  };
  const goNext = () => {
    if (value.trim().length > 5 && value.trim().length < 15) {
      if (value.trim().includes('+')) {
        navigation.navigate('OTP', { phone: value });
      } else {
        setInvalidPhone(true);
      }
    } else {
      setEmptyPhone(true);
    }
  };
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      return 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      return 'Something went wrong obtaining access token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );
    return auth().signInWithCredential(facebookCredential);
  }
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }
  const checkInternet = async (_platform: string) => {
    try {
      if (_platform === 'facebook') {
        const response = await onFacebookButtonPress();
        console.log('Signed in with Facebook!', response);
      } else if (_platform === 'google') {
        const response = await onGoogleButtonPress();
        console.log('Signed in with Google!', response);
      }
    } catch (error) {
      console.error('Error in check Internet', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.primary}
      />
      <View style={styles.Language}>
        <TouchableOpacity
          onPress={() => {
            if (language === 'English') {
              if (country && country.toLowerCase() === 'sa') {
                dispatch(setLanguage('Saudi'));
              } else {
                dispatch(setLanguage('Arabic'));
              }
            } else {
              dispatch(setLanguage('English'));
            }
          }}
          style={styles.LangContainer}
        >
          <View
            style={
              language === 'English'
                ? styles.ActiveEnglish
                : styles.InactiveEnglish
            }
          >
            <Text
              style={
                language === 'English'
                  ? styles.ActiveLangTitle
                  : styles.LangTitle
              }
            >
              {selectedLang.PROF6}
            </Text>
          </View>
          <View
            style={
              language === 'English'
                ? styles.InactiveArabic
                : styles.ActiveArabic
            }
          >
            <Text
              style={
                language === 'English'
                  ? styles.LangTitle
                  : styles.ActiveLangTitle
              }
            >
              {selectedLang.PROF7}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          alignSelf: 'center',
          width: responsiveWidth(100),
        }}
      >
        <Text style={styles.Title}>{selectedLang.WELCOMECORRSY}</Text>
        <View style={styles.ButtonContainer}>
          <TouchableOpacity
            testID="0024"
            style={styles.FBbuttonStyle}
            onPress={() => checkInternet('facebook')}
          >
            {isFacebookButtonLoading ? (
              <ActivityIndicator size="small" color={theme.colors.white} />
            ) : (
              <View
                accessible
                accessibilityLabel="btnFacebook"
                style={styles.ButtonInner}
              >
                {language === 'English' ? (
                  <>
                    <Icon
                      name="facebook"
                      type="font-awesome"
                      size={responsiveFontSize(2)}
                      color={theme.colors.white}
                      style={{ width: responsiveWidth(5) }}
                    />
                    <Text style={styles.buttonText}>
                      {selectedLang.FBLOGIN}
                    </Text>
                  </>
                ) : (
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        { marginRight: responsiveWidth(2) },
                      ]}
                    >
                      {selectedLang.FBLOGIN}
                    </Text>
                    <Icon
                      name="facebook"
                      type="font-awesome"
                      size={responsiveFontSize(2)}
                      color={theme.colors.white}
                      style={{ width: responsiveWidth(5) }}
                    />
                  </View>
                )}
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            testID="0024"
            onPress={() => checkInternet('google')}
            style={styles.GoogleButtonStyle}
          >
            {isGoogleButtonLoading ? (
              <ActivityIndicator size="small" color={theme.colors.white} />
            ) : (
              <View
                accessible
                accessibilityLabel="btnGoogle"
                style={styles.ButtonInner}
              >
                {language === 'English' ? (
                  <>
                    <View style={styles.GoogleContainer}>
                      <Image
                        source={GOOGLE_ICON}
                        style={{
                          height: responsiveFontSize(2),
                          width: responsiveFontSize(2),
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                    <Text style={styles.buttonText}>
                      {selectedLang.GOOGLELOGIN}
                    </Text>
                  </>
                ) : (
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={[
                        styles.buttonText,
                        { marginRight: responsiveWidth(2) },
                      ]}
                    >
                      {selectedLang.GOOGLELOGIN}
                    </Text>
                    <View style={styles.GoogleContainer}>
                      <Image
                        source={GOOGLE_ICON}
                        style={{
                          height: responsiveFontSize(2),
                          width: responsiveFontSize(2),
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                  </View>
                )}
              </View>
            )}
          </TouchableOpacity>
          {Platform.OS === 'ios' && appleAuth.isSupported && (
            <TouchableOpacity
              style={styles.ApplebuttonStyle}
              onPress={() => checkInternet('apple')}
            >
              {isAppleButtonLoading === true ? (
                <View
                  style={[
                    styles.loginButton,
                    { backgroundColor: theme.colors.white },
                  ]}
                >
                  <ActivityIndicator size="small" color={theme.colors.white} />
                </View>
              ) : (
                <View
                  accessible
                  accessibilityLabel="btnApple"
                  style={styles.ButtonInner}
                >
                  {language === 'English' ? (
                    <>
                      <Icon
                        name="apple"
                        type="font-awesome"
                        size={responsiveFontSize(2)}
                        color={theme.colors.white}
                      />
                      <Text
                        style={[
                          styles.buttonText,
                          { color: theme.colors.white },
                        ]}
                      >
                        {selectedLang.APPLELOGIN}
                      </Text>
                    </>
                  ) : (
                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={[
                          styles.buttonText,
                          {
                            color: theme.colors.white,
                            marginRight: responsiveWidth(2),
                          },
                        ]}
                      >
                        {selectedLang.APPLELOGIN}
                      </Text>
                      <Icon
                        name="apple"
                        type="font-awesome"
                        size={responsiveFontSize(2)}
                        color={theme.colors.white}
                      />
                    </View>
                  )}
                </View>
              )}
            </TouchableOpacity>
          )}
          <View style={styles.Divider}>
            <View
              style={{
                height: 1,
                width: '23%',
                backgroundColor: theme.colors.grey,
                marginRight: '3%',
              }}
            />
            <Text style={styles.subtitleLink}>{selectedLang.PROCEEDPHONE}</Text>
            <View
              style={{
                height: 1,
                width: '23%',
                backgroundColor: theme.colors.grey,
                marginLeft: '3%',
              }}
            />
          </View>

          <View style={styles.EmailInput}>
            <PhoneInput
              accessibilityLabel="txtPhone"
              initialCountry="iq"
              onPressFlag={() => null}
              onSelectCountry={() => updateInfo()}
              onChangePhoneNumber={(val) => changeCode(val)}
              textStyle={{
                color: theme.colors.darkText,
                height: '100%',
                fontSize: responsiveFontSize(1.5),
              }}
              textProps={{
                placeholderTextColor: theme.colors.darkText,
              }}
              ref={(ref) => {
                valuePhone = ref;
              }}
            />
          </View>
          {isEmptyPhone ? (
            <Text style={styles.ErrorMessage}>{selectedLang.INVALIDPHONE}</Text>
          ) : null}
          {invalidPhone && (
            <Text style={styles.ErrorMessage}>
              {selectedLang.INVALIDFORMAT}
            </Text>
          )}
          <TouchableOpacity
            disabled={loading}
            accessible
            accessibilityLabel="btnGoHome"
            style={[
              theme.Button.buttonStyle,
              {
                marginTop: responsiveHeight(2),
                justifyContent: 'center',
                elevation: 5,
              },
            ]}
            onPress={() => {
              goNext();
            }}
          >
            <Text
              style={[
                theme.Button.titleStyle,
                {
                  width: '100%',
                  textAlign: 'center',
                },
              ]}
            >
              {selectedLang.CONTINUE}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ width: responsiveWidth(90), marginTop: responsiveHeight(2) }}
        >
          {language === 'English' ? (
            <Text style={styles.subtitle}>
              {selectedLang.LOGIN2}
              <Text
                style={styles.subtitleLink}
                onPress={() => {
                  Linking.openURL('https://corrsy.com/terms-and-conditions');
                }}
              >
                {' '}
                {selectedLang.LOGIN3}
              </Text>

              <Text style={styles.subtitle}> {selectedLang.LOGIN4} </Text>
              <Text
                style={styles.subtitleLink}
                onPress={() => {
                  Linking.openURL('https://corrsy.com/privacy-policy');
                }}
              >
                {selectedLang.LOGIN5}{' '}
              </Text>
            </Text>
          ) : (
            <Text
              style={styles.subtitleLink}
              onPress={() => {
                Linking.openURL('https://corrsy.com/privacy-policy');
              }}
            >
              {selectedLang.LOGIN5}
              <Text style={styles.subtitle}> {selectedLang.LOGIN4} </Text>
              <Text
                style={{ color: theme.colors.secondary }}
                onPress={() => {
                  Linking.openURL('https://corrsy.com/terms-and-conditions');
                }}
              >
                {' '}
                {selectedLang.LOGIN3}{' '}
              </Text>
              <Text style={styles.subtitle}>{selectedLang.LOGIN2}</Text>
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
