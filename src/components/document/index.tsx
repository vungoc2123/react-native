import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import {color, ms, S, TS} from '../../themes';
import {Calendar, Priority} from '../../../assets/icons';

export interface IDocument {
  identifier: string; // so ki hieu
  summary: string; // trich yeu
  numbered: string; // sổ theo số
  date: string;
  field: string;
  priority: number;
  typeDoc: string;
  file: string;
}

const Document = (props: IDocument) => {
  const {t} = useTranslation();

  const iconFlag = (type: number) => {
    let colorIcon: string = '';
    switch (type) {
      case 1:
        colorIcon = color.red;
        break;
      case 2:
        colorIcon = color.yellow;
        break;
      default:
        colorIcon = color.green;
        break;
    }
    return <Priority color={colorIcon} width={ms(20)} height={ms(20)} />;
  };

  return (
    <View style={styles.container}>
      {/* <Priority width={ms(25)} height={ms(25)} /> */}
      <Text style={styles.textSummary}>
        {t('summary')}: {props.summary}
      </Text>
      <View style={styles.containerRow}>
        <Text style={styles.textDate}>
          {t('typeDoc')}: {props.typeDoc}
        </Text>
        <View style={{...S.flexRow}}>
          <Text style={styles.textDate}>{t('important')}: </Text>
          {iconFlag(props.priority)}
        </View>
      </View>
      <View style={styles.containerRow}>
        <Text style={styles.textDate}>
          {t('identifier')}: {props.identifier}
        </Text>
        <Text style={styles.textDate}>
          {t('numbered')}: {props.numbered}
        </Text>
      </View>
      <View style={styles.containerTime}>
        <Calendar width={ms(20)} height={ms(20)} color={color.gray[500]} />
        <Text style={styles.textDate}>{props.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: ms(4),
    alignItems: 'flex-start',
  },
  containerRow: {
    ...S.flexRow,
    width: '100%',
    justifyContent: 'space-between',
  },
  containerTime: {
    ...S.flexRow,
    columnGap: ms(8),
  },
  textDate: {
    ...TS.textSmRegular,
    color: color.gray[800],
  },
  textSummary: {
    ...TS.textBaseSemiBold,
    textAlign: 'justify',
    color: color.primary[700],
  },
});

export default Document;
