import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import {LocaleConfig} from 'react-native-calendars';
import moment from 'moment';
import {color} from '../../../themes/colors';
import {ms} from '../../../themes/platform';
import {getDay} from '../../../utils';
import {TS} from '../../../themes';

interface CalendarDate {
  date: Date;
  day: string;
  month: string;
}

interface Props {
  date: CalendarDate;
  onPress: (date: CalendarDate) => void;
}

const WeekCalendar = ({date, onPress}: Props) => {
  const [dateInit, _] = useState(date.date);
  return (
    <CalendarStrip
      scrollable
      startingDate={
        dateInit.getTime() === date.date.getTime()
          ? moment(date.date).subtract(3, 'days')
          : undefined
      }
      selectedDate={date.date}
      style={styles.calendarHorizontal}
      calendarColor={color.white}
      dateNumberStyle={styles.dateNumber}
      dateNameStyle={styles.dateName}
      highlightDateNumberStyle={styles.dateHighLight}
      highlightDateNameStyle={styles.dateHighLight}
      highlightDateContainerStyle={styles.containerSelected}
      iconRightStyle={styles.iconStyle}
      iconLeftStyle={styles.iconStyle}
      calendarHeaderContainerStyle={styles.containerHeader}
      dayComponentHeight={60}
      onDateSelected={dateSelected => {
        const dateNew = moment.utc(dateSelected).startOf('day').toDate();
        onPress({
          date: dateNew,
          day: getDay(dateNew),
          month: LocaleConfig.locales.default.monthNames[dateNew.getUTCMonth()],
        });
      }}
    />
  );
};
const styles = StyleSheet.create({
  calendarHorizontal: {
    height: ms(65),
  },
  dateNumber: {
    ...TS.textBaseRegular,
    color: color.black44,
  },
  dateName: {
    ...TS.textBaseRegular,
    color: color.black44,
  },
  dateHighLight: {
    ...TS.textLgRegular,
    color: color.primaryBlue,
  },
  containerSelected: {
    backgroundColor: color.blueFC,
    borderRadius: ms(8),
  },
  iconStyle: {
    width: 0,
  },
  containerHeader: {
    height: 0,
  },
});

export default WeekCalendar;
