import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Carousel from 'react-native-reanimated-carousel';
import { useDispatch, useSelector } from 'react-redux';
import type { RootStackParamList } from '../../../App';
import theme from '../../theme';
import styles from './styles';
import {
  setOnBoardingCompleted,
  setLanguage,
} from '../../redux/reducers/generalReducer';
import { AppState } from '../../redux/reducers';

type Props = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>;

function OnBoarding({ navigation }: Props) {
  const dispatch = useDispatch();
  const generalSelector = (state: AppState) => state.generalReducer;
  const { selectedLang, language } = useSelector(generalSelector);
  const [sliderIndex, setSliderIndex] = useState(0);
  const slides = [...new Array(4).keys()];

  const toggleLanguage = () => {
    const newLanguage = language === 'English' ? 'Arabic' : 'English';
    dispatch(setLanguage(newLanguage));
  };
  const renderSlide = ({ index }: { index: number }) => {
    const imageSources = [
      require('../../assets/grafitti/login_1.png'),
      require('../../assets/grafitti/login_2.png'),
      require('../../assets/grafitti/login_3.png'),
      require('../../assets/grafitti/login_4.png'),
    ];

    const introTexts = [
      selectedLang.INTRO1,
      selectedLang.INTRO3,
      selectedLang.INTRO2,
      selectedLang.INTRO4,
    ];

    const descriptionTexts = [
      selectedLang.DESC1,
      selectedLang.DESC3,
      selectedLang.DESC2,
      selectedLang.DESC4,
    ];

    return (
      <View style={styles.imageView}>
        <Image source={imageSources[index]} style={styles.imageStyle} />
        <Text style={styles.text}>{introTexts[index]}</Text>
        <Text style={styles.description}>{descriptionTexts[index]}</Text>
      </View>
    );
  };
  const renderDots = (index: number) => (
    <View style={{ flexDirection: 'row' }}>
      {slides.map((dotIndex) => (
        <View
          key={dotIndex}
          style={
            index === dotIndex
              ? { ...styles.activeDot, marginLeft: dotIndex !== 0 ? 10 : 0 }
              : styles.inActiveDot
          }
        />
      ))}
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.primary}
      />

      <View style={styles.language}>
        <TouchableOpacity onPress={toggleLanguage} style={styles.langContainer}>
          <View
            style={
              language === 'English'
                ? styles.activeEnglish
                : styles.inactiveEnglish
            }
          >
            <Text
              style={
                language === 'English'
                  ? styles.activeLangTitle
                  : styles.langTitle
              }
            >
              {selectedLang.PROF6}
            </Text>
          </View>
          <View
            style={
              language === 'English'
                ? styles.inactiveArabic
                : styles.activeArabic
            }
          >
            <Text
              style={
                language === 'English'
                  ? styles.langTitle
                  : styles.activeLangTitle
              }
            >
              {selectedLang.PROF7}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.carouselContainerView}>
        <Carousel
          loop
          width={responsiveWidth(100)}
          height={responsiveHeight(55)}
          autoPlay
          data={slides}
          scrollAnimationDuration={2000}
          onSnapToItem={setSliderIndex}
          renderItem={renderSlide}
        />
        <View style={{ height: responsiveHeight(2) }} />

        {renderDots(sliderIndex)}
      </View>
      <TouchableOpacity
        accessible
        accessibilityLabel="btnStart"
        style={[
          theme.Button.buttonStyle,
          {
            marginBottom: Platform.OS === 'android' ? responsiveHeight(2) : 0,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
        onPress={() => {
          dispatch(setOnBoardingCompleted(true));
          navigation.navigate('Login');
        }}
      >
        <Text
          style={[
            theme.Button.titleStyle,
            { width: '100%', textAlign: 'center' },
          ]}
        >
          {selectedLang.LETSTART}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default OnBoarding;
