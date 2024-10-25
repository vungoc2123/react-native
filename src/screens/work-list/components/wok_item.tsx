import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import {useTranslation} from 'react-i18next';
import {S, TS, color, ms} from '../../../themes';

export interface IWorkItem {
  progress: number;
  nameJob: string;
  description: string;
  processor: string;
  time: string;
}

const Wokitem = (item: IWorkItem) => {
  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Progress.Circle
        progress={0.79}
        size={ms(68)}
        color={color.success[700]}
        strokeCap="round"
        borderWidth={ms(0)}
        thickness={ms(4)}
        showsText
        formatText={() => `${item.progress * 100}%`}
      />
      <View style={{rowGap: ms(4)}}>
        <Text style={styles.fontTextTitle} numberOfLines={3}>
          {item.nameJob}
        </Text>
        <Text style={{...TS.textSmRegular}}>{item.description}</Text>
        <View style={styles.container}>
          <Text style={styles.textTitleContent}>{t('mainHandler')}:</Text>
          <Text style={styles.textContent}>{item.processor}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.textTitleContent}>{t('time')}:</Text>
          <Text style={styles.textContent}>{item.time}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...S.rowCenter,
    columnGap: ms(8),
    backgroundColor: color.gray[100],
  },
  fontTextTitle: {
    ...TS.textBaseBold,
  },
  textTitleContent: {
    ...TS.textXsRegular,
    fontWeight: '300',
  },
  textContent: {
    ...TS.textXsRegular,
  },
});

export default Wokitem;
