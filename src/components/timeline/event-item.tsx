import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ms} from '../../themes/platform';
import {S, TS, color} from '../../themes';
// import {formatTime} from '../../../utils';

interface Props {
  event: any;
}

const EventItem = ({event}: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{event.title}</Text>
    <View style={styles.containerTime}>
      <Text style={styles.time}>Thời gian: </Text>
      <Text style={styles.time}>{event.description}</Text>
    </View>
    {/* <Text style={styles.contentEvent}>
      {`${formatTime(event.start)} - ${formatTime(event.end)}`}
    </Text> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: ms(16),
    rowGap: ms(4),
    backgroundColor: color.blueFC,
    borderRadius: ms(10),
  },
  containerTime: {
    ...S.rowFlexStart,
  },
  title: {
    ...TS.textSmRegular,
    fontWeight: '700',
    color: color.black44,
  },
  time: {
    ...TS.textXsRegular,
    fontWeight: '400',
    color: color.black44,
  },
});

export default EventItem;
