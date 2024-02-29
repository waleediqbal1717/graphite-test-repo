import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CountDown from 'react-native-countdown-component';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {} from '../../../redux/reducers/userReducer';
import { useSelector } from 'react-redux';
import type { RootStackParamList } from '../../../../App';
import styles from './styles';
import Header from '../../../components/Header';
import { FORGET_SCREEN } from '../../../assets';
import theme from '../../../theme';
import { AppState } from '../../../redux/reducers';

const CELL_COUNT: number = 6;

type Props = NativeStackScreenProps<RootStackParamList, 'OTP'>;

const generalSelector = (state: AppState) => state.generalReducer;
const userSelector = (state: AppState) => state.userReducer;

function OTP({ route, navigation }: Props) {
  const { selectedLang } = useSelector(generalSelector);
  const { isLoading } = useSelector(userSelector);

  const [isModalVisible] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(60);
  const [isFinish, setFinish] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [{ onPressOut }, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const confirmCode = () => {
    navigation.navigate('UserNamePhone', { phone: route?.params?.phone });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.secondary}
      />
      <Header
        back
        color={theme.colors.white}
        onBack={() => navigation.goBack()}
      />
      <ScrollView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          enabled={Platform.OS !== 'android'}
          style={{ flex: 1 }}
          keyboardVerticalOffset={responsiveHeight(4)}
          behavior="position"
        >
          <Image source={FORGET_SCREEN} style={styles.ImageStyle} />

          <View style={{ flex: 1 }}>
            <Text style={styles.WelcomeText}>{route?.params?.phone}</Text>
            <Animatable.View
              animation="fadeInUpBig"
              style={styles.BottomContainer}
            >
              <Text style={styles.subTitleText}>{selectedLang.ENTEROTP}</Text>
              <View style={{ width: '85%', alignSelf: 'center' }}>
                <CodeField
                  accessible
                  accessibilityLabel="txtOTP"
                  ref={ref}
                  onPressOut={onPressOut}
                  value={value}
                  onChangeText={setValue}
                  onEndEditing={() => null}
                  cellCount={CELL_COUNT}
                  rootStyle={styles.codeFieldRoot}
                  keyboardType="number-pad"
                  textContentType="oneTimeCode"
                  renderCell={({ index, symbol, isFocused }) => (
                    <Text
                      key={index}
                      style={[styles.cell, isFocused && styles.focusCell]}
                      onLayout={getCellOnLayoutHandler(index)}
                    >
                      {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                  )}
                />
              </View>
              <View style={styles.TimerContainer}>
                <Text style={styles.OTPText}>
                  {isModalVisible && selectedLang.SENDOTP}
                </Text>

                <View style={styles.Timer}>
                  <AntDesign
                    name="clockcircleo"
                    size={24}
                    style={styles.TimerText}
                  />
                  <CountDown
                    size={responsiveFontSize(1.8)}
                    until={seconds}
                    onFinish={() => setFinish(true)}
                    digitStyle={{ backgroundColor: 'transparent' }}
                    digitTxtStyle={{ color: theme.colors.darkText }}
                    timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                    separatorStyle={{ color: theme.colors.darkText }}
                    timeToShow={['S']}
                    timeLabels={{ s: '' }}
                    showSeparator
                  />
                  <Text style={styles.TimerText}>{selectedLang.SECONDS}</Text>
                </View>
              </View>
              <TouchableOpacity
                disabled={isLoading}
                style={styles.ResendButton}
                onPress={confirmCode}
              >
                {isLoading ? (
                  <ActivityIndicator color={theme.colors.white} size="small" />
                ) : (
                  <Text style={styles.ButtonText}>{selectedLang.CONTINUE}</Text>
                )}
              </TouchableOpacity>

              {isFinish && (
                <TouchableOpacity
                  style={styles.ResendButton}
                  onPress={() => {
                    setSeconds(30);
                    setFinish(false);
                  }}
                >
                  <Text style={styles.ButtonText}>{selectedLang.RESEND}</Text>
                </TouchableOpacity>
              )}
            </Animatable.View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OTP;
