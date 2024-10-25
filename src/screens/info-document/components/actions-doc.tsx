import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {AppButton} from '../../../components/app-button';
import {color, ms, Platform, TS} from '../../../themes';

interface IActionDoc {
  title: string;
  value: string;
}
const actions: IActionDoc[] = [
  {
    title: 'Gửi PGĐ',
    value: '1',
  },
  {
    title: 'Gửi trưởng phòng',
    value: '2',
  },
  {
    title: 'Xử lý',
    value: '3',
  },
];
const ActionsDoc = () => {
  const renderItem = ({item}: {item: IActionDoc}) => (
    <AppButton
      title={item.title}
      onPress={() => {}}
      customStyleButton={styles.styleButton}
      customStyleText={styles.styleText}
    />
  );
  const separtor = () => <View style={styles.separtor} />;
  return (
    <FlatList
      style={styles.flatList}
      data={actions}
      horizontal
      renderItem={renderItem}
      ItemSeparatorComponent={separtor}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    columnGap: ms(8),
  },
  separtor: {
    width: ms(8),
  },
  styleButton: {
    borderColor: color.primaryBlue,
    borderWidth: ms(1),
    backgroundColor: color.white,
    justifyContent: 'center',
    paddingVertical: ms(8),
    width:
      (Platform.deviceWidth - ms(8) * actions.length - ms(24)) / actions.length,
  },
  styleText: {
    ...TS.textSmBold,
    color: color.primaryBlue,
    textAlign: 'center',
  },
});

export default ActionsDoc;
