import React from 'react';
import { View } from 'react-native';
import styles from './styles';

type Props = {
  index: number;
};

export default function ProgressBar(props: Props) {
  const { index } = props;
  const array = [...Array(4).keys()];
  return (
    <View style={styles.container}>
      {array.map((item, idx) => {
        const viewStyle = [
          index >= idx ? styles.accentGreenDot : styles.greenDot,
          idx === 0 ? styles.startPill : null,
          idx === 3 ? styles.endPill : null,
        ];

        return <View key={item} style={viewStyle} />;
      })}
    </View>
  );
}
