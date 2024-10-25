import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {S, TS, ms} from '../../themes';
import {AppTouchableOpacity} from '../app-touchable-opacity';
import {CheckboxChecked, CheckboxUnchecked} from '../../../assets/icons';

interface Props {
  label: string;
  value: boolean;
  labelStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

const AppCheckBox = (props: Props) => {
  const iconCheck = props.value ? <CheckboxChecked /> : <CheckboxUnchecked />;
  return (
    <AppTouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => {
        props.onPress();
      }}>
      {iconCheck}
      <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
    </AppTouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    ...TS.textSmRegular,
  },
  checkboxContainer: {
    ...S.flexRow,
    marginVertical: ms(9),
    columnGap: ms(10),
  },
});

export default AppCheckBox;
