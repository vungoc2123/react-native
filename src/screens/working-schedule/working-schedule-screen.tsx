import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {ms} from '../../themes/platform';
import {S, TS, color} from '../../themes';
import WeekCalendar from './component/week-calendar';
import {formatDateDMY} from '../../utils';
import {BaseScreen} from '../../components/base-screen';
// import AppDatePicker from '../../components/app-datepicker';
import AppTimeline from '../../components/timeline';
import {AppStackParamList, AppStackScreenProps} from '../../navigation';
// import AppTimePicker from '../../components/app-timepicker';

interface CalendarDate {
  date: Date;
  day: string;
  month: string;
}

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {}

function WorkingScheduleScreen<T extends keyof AppStackParamList>(
  props: Props<T>,
) {
  const {navigation} = props;
  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateSelected, setDateSelected] = useState<CalendarDate>({
    date: new Date(),
    day: t('datePicker.today'),
    month: '',
  });

  const events = [
    {
      time: '09:00',
      title: 'Giao ban Trung tâm đào tạo và CĐT',
      description: '09h00 - 10h30',
    },
    {
      time: '10:45',
      title: 'Giao ban chuyên môn. Báo cáo chuyên đề khoa KBNT',
      description: '10h45 - 11h30',
    },
    {
      time: '12:00',
      title: 'Công ty công nghệ thuyết minh mô hình bệnh án điện tử BVMTW',
      description: '12h00 - 13h30',
    },
    {
      time: '14:00',
      title: 'Họp ban giám đốc',
      description: '14h00 - 16h00',
    },
    {
      time: '16:30',
      title: 'Gặp mặt giáo sư Nguyễn Hoàng Đạt',
      description: '16h30 - 17h30',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleDelay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(!isDatePickerVisible);
  };

  const selectedDate = (date: CalendarDate) => {
    setDateSelected(date);
    handleDelay();
  };
  return (
    <BaseScreen backgroundColor={color.blue}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={showDatePicker}>
            <View>
              <Text style={styles.textDate}>
                {formatDateDMY(dateSelected.date)}
              </Text>
              <Text style={styles.textToday}>{dateSelected.day}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('CreateScheduleScreen');
            }}>
            <Text style={styles.textButton}>{t('workingSchedule.add')}</Text>
          </TouchableOpacity>
        </View>
        <WeekCalendar date={dateSelected} onPress={selectedDate} />
        <Text style={styles.textTitle}>{t('workingSchedule.title')}</Text>
        {loading ? (
          <ActivityIndicator color={color.primaryBlue} />
        ) : (
          <AppTimeline events={events} />
        )}
        {/* <AppDatePicker
          dateInitial={dateSelected}
          isShow={isDatePickerVisible}
          onPressCancel={showDatePicker}
          onPressConfirm={calendarDate => {
            showDatePicker();
            selectedDate(calendarDate);
          }}
        /> */}
        {/* <AppTimePicker
          dateInitial={dateSelected}
          isShow={isDatePickerVisible}
          onPressCancel={showDatePicker}
          onPressConfirm={calendarDate => {
            showDatePicker();
            selectedDate(calendarDate);
          }}
        /> */}
      </View>
    </BaseScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.white,
    rowGap: ms(10),
  },
  header: {
    ...S.rowSpaceBetween,
    ...S.center,
    paddingHorizontal: ms(16),
    paddingTop: ms(16),
  },
  textDate: {
    ...TS.textBaseRegular,
  },
  textToday: {
    ...TS.textXlMedium,
    color: color.black44,
  },
  button: {
    backgroundColor: color.primaryBlue,
    paddingHorizontal: ms(20),
    paddingVertical: ms(8),
    borderRadius: ms(30),
  },
  textButton: {
    ...TS.textSmRegular,
    color: color.white,
  },
  textTitle: {
    ...TS.textXlMedium,
    color: color.black44,
    marginHorizontal: ms(16),
  },
});

export default WorkingScheduleScreen;
