import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import theme from '../../theme';
import styles from './styles';
import ProgressBar from './components/progress-bar';

interface Props {
  close?: boolean;
  back: boolean;
  index?: number;
  color: string;
  onClose?: () => void;
  onBack: () => void;
}

export default function Header(props: Props) {
  const { close, back, index, color, onClose, onBack } = props;
  return (
    <View style={styles.container}>
      {close && (
        <Icon
          name="close"
          type="material"
          size={25}
          color={theme.colors.darkText}
          onPress={onClose}
        />
      )}
      {back && (
        <Icon
          name="arrow-back"
          type="material"
          size={responsiveWidth(6)}
          color={color}
          onPress={onBack}
        />
      )}
      {index !== undefined ? <ProgressBar index={index} /> : null}
    </View>
  );
}

Header.defaultProps = {
  close: false,
  index: undefined,
  onClose: undefined,
};
