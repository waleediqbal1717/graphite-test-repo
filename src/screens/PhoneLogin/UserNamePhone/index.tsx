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
  TextInput,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';
import Header from '../../../components/Header';
import styles from './styles';
import { NEXT_BUTTON_ICON, USERNAME_SCREEN } from '../../../assets';
import type { RootStackParamList } from '../../../../App';
import theme from '../../../theme';
import { AppState } from '../../../redux/reducers';

type Props = NativeStackScreenProps<RootStackParamList, 'UserNamePhone'>;

const generalSelector = (state: AppState) => state.generalReducer;
const userSelector = (state: AppState) => state.userReducer;

function UserNamePhone({ route, navigation }: Props) {
  const { selectedLang } = useSelector(generalSelector);
  const { isLoading } = useSelector(userSelector);
  const [fname, setFName] = useState<string>('');
  const [lname, setLName] = useState<string>('');
  const [invalidFName, setInValidFName] = useState<boolean>(false);
  const [invalidLName, setInValidLName] = useState<boolean>(false);

  const goNext = () => {
    if (fname.trim().length === 0) {
      setInValidFName(true);
    } else if (lname.trim().length === 0) {
      setInValidLName(true);
    } else {
      // attempt to sign up using phone
    }
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          enabled={Platform.OS !== 'android'}
          style={{ flex: 1 }}
          keyboardVerticalOffset={20}
          behavior="position"
        >
          <View style={{ width: responsiveWidth(85), alignSelf: 'center' }}>
            <Image source={USERNAME_SCREEN} style={styles.ImageStyle} />
          </View>
          <>
            <Text style={styles.LetGoText}>{selectedLang.NAMETITLE}</Text>
            <Text
              style={[
                styles.subTitleText,
                { color: theme.colors.white, textAlign: 'center' },
              ]}
            >
              {route.params.phone}
            </Text>
            <Animatable.View
              animation="fadeInUpBig"
              style={styles.BottomContainer}
            >
              <Text style={styles.subTitleText}>{selectedLang.NAME}</Text>
              <TextInput
                accessibilityLabel="txtFNamePhone"
                accessible
                style={styles.EmailInput}
                onChangeText={(val) => {
                  setFName(val);
                  setInValidFName(false);
                }}
                placeholder={selectedLang.FNAME}
                placeholderTextColor={theme.colors.placeHolderColor}
              />
              {invalidFName ? (
                <Text style={styles.ErrorMessage}>
                  {selectedLang.FNAMEERROR}
                </Text>
              ) : null}
              <TextInput
                accessibilityLabel="txtLNamePhone"
                accessible
                style={styles.EmailInput}
                onChangeText={(val) => {
                  setLName(val);
                  setInValidLName(false);
                }}
                placeholder={selectedLang.LNAME}
                placeholderTextColor={theme.colors.placeHolderColor}
              />
              {invalidLName ? (
                <Text style={styles.ErrorMessage}>
                  {selectedLang.LNAMEERROR}
                </Text>
              ) : null}

              <View style={styles.ButtonContainer}>
                {isLoading ? (
                  <View style={styles.NextButton}>
                    <Image source={NEXT_BUTTON_ICON} resizeMode="cover" />
                    <ActivityIndicator
                      size="small"
                      color="#fff"
                      style={{ position: 'absolute' }}
                    />
                  </View>
                ) : (
                  <TouchableOpacity style={styles.NextButton} onPress={goNext}>
                    <View accessibilityLabel="btnUserNamePhone" accessible>
                      <Image source={NEXT_BUTTON_ICON} resizeMode="cover" />
                    </View>
                    <Feather
                      name="arrow-right"
                      size={26}
                      color="#fff"
                      style={{ position: 'absolute' }}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </Animatable.View>
          </>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default UserNamePhone;
