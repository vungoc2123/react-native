import React from 'react';
import Timeline, {TimelineProps} from 'react-native-timeline-flatlist';
import {StyleSheet} from 'react-native';
import {color} from '../../themes/colors';
import EventItem from './event-item';
import {ms} from '../../themes/platform';
import {TS} from '../../themes';

interface Props {
  events: any;
}

const AppTimeline = ({events}: Props) => {
  const timelineProps: TimelineProps = {
    data: events,
    style: styles.container,
    lineColor: color.gray[200],
    circleColor: color.gray[400],
    circleSize: ms(10),
    timeStyle: styles.time,
    detailContainerStyle: styles.containerEvent,
    renderDetail: event => <EventItem event={event} />,
  };
  return <Timeline {...timelineProps} />;
};
const styles = StyleSheet.create({
  container: {
    paddingLeft: ms(12),
    paddingTop: ms(16),
  },
  containerEvent: {
    marginRight: ms(16),
  },
  time: {
    ...TS.textXsRegular,
    color: color.black44,
  },
});

export default AppTimeline;
