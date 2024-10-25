import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ms, TS} from '../../../themes';

interface Prop {
  title: string;
  childrent: React.JSX.Element;
}

const GroupInput = (props: Prop) => (
  <View>
    <Text style={styles.title}>{props.title}</Text>
    <View style={{height: ms(12)}} />
    {props.childrent}
  </View>
);

const styles = StyleSheet.create({
  title: {
    ...TS.textBaseSemiBold,
  },
});

export default GroupInput;
