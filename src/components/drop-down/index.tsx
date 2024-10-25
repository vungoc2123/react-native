import React, {useState} from 'react';
import {StyleSheet, View, Text, StyleProp, ViewStyle} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {TS, color, ms} from '../../themes';

export interface IDropdownItem {
  label: string;
  value: any;
}
interface IDropdown {
  placeholder: string;
  styleDropDown?: StyleProp<ViewStyle>;
  defaultValue?: string;
  data: IDropdownItem[];
  onChange: (value: any) => void;
}

const AppDropdown = (props: IDropdown) => {
  const [value, setValue] = useState(props.defaultValue ?? '');

  const renderItem = (item: any) => (
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
      {item.value === value}
    </View>
  );

  return (
    <Dropdown
      style={[styles.dropdown, props.styleDropDown]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      iconStyle={styles.iconStyle}
      showsVerticalScrollIndicator={false}
      data={props.data}
      maxHeight={200}
      labelField="label"
      valueField="value"
      placeholder={props.placeholder}
      value={value}
      onChange={item => {
        setValue(item.value);
        props.onChange && props.onChange(item.value);
      }}
      renderItem={renderItem}
    />
  );
};

export default AppDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: ms(45),
    backgroundColor: color.white,
    borderRadius: ms(12),
    padding: ms(15),
  },
  icon: {
    marginRight: ms(16),
  },
  item: {
    padding: ms(17),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    ...TS.textSmRegular,
  },
  placeholderStyle: {
    ...TS.textSmRegular,
  },
  selectedTextStyle: {
    ...TS.textSmRegular,
  },
  iconStyle: {
    width: ms(20),
    height: ms(20),
  },
});
