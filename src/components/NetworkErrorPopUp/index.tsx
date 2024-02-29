import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import Modal from 'react-native-modal';
import { Card } from 'react-native-elements';

import { useDispatch, useSelector } from 'react-redux';
import theme from '../../theme';
import styles from './styles';
import { WIRELESS } from '../../assets';
import { setNetworkPopUpVisible } from '../../redux/reducers/userReducer';
import { AppState } from '../../redux/reducers';

const generalSelector = (state: AppState) => state.generalReducer;

type Props = {
  showPrompt: boolean;
};

function NetworkErrorPopUp({ showPrompt }: Props) {
  const dispatch = useDispatch();
  const { selectedLang } = useSelector(generalSelector);

  return (
    <Modal
      backdropColor={theme.colors.grey}
      backdropOpacity={0.9}
      animationInTiming={1}
      animationOutTiming={1}
      isVisible={showPrompt}
      onBackdropPress={() => dispatch(setNetworkPopUpVisible(false))}
    >
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <Image source={WIRELESS} style={styles.Icon} />
          <Text style={styles.subtitle}>{selectedLang.CHECKNET}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              accessible
              accessibilityLabel="btnNextLesson"
              style={styles.buttonStyle}
              onPress={() => {
                dispatch(setNetworkPopUpVisible(false));
              }}
            >
              <View style={styles.gradientStyle}>
                <Text style={styles.buttonTitleStyle}>{selectedLang.OK}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </Modal>
  );
}

export default NetworkErrorPopUp;
