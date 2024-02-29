import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import * as React from "react";
import { useEffect, useRef } from "react";
import { Animated, StatusBar, Text, View } from "react-native";
import { useSelector } from "react-redux";
import type { RootStackParamList } from "../../../App";
import styles from "./styles";
import theme from "../../theme";
import { AppState } from "../../redux/reducers";

type Props = NativeStackScreenProps<RootStackParamList, "Loading">;

function Loading({ navigation }: Props) {
  const generalSelector = (state: AppState) => state.generalReducer;
  const { selectedLang, isOnBoardingCompleted } = useSelector(generalSelector);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };
  useEffect(() => {
    fadeIn();
    setTimeout(() => {
      if (isOnBoardingCompleted) {
        navigation.navigate("Login");
      } else {
        navigation.navigate("OnBoarding");
      }
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.primary}
      />
    </View>
  );
}
export default Loading;
