// import React, {useEffect, useState} from 'react';
// import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {Calendar, CalendarProps, LocaleConfig} from 'react-native-calendars';
// import {useTranslation} from 'react-i18next';
// import DatePicker from 'react-native-modern-datepicker';
// import {color} from '../../themes/colors';
// import {ms} from '../../themes/platform';
// import {formatDate, getDay, localeCalendar} from '../../utils';
// import {S, TS} from '../../themes';

// interface CalendarDate {
//   date: Date;
//   day: string;
//   month: string;
// }

// interface Props {
//   isShow: boolean;
//   dateInitial: CalendarDate;
//   onPressCancel: () => void;
//   onPressConfirm: ({date, day, month}: CalendarDate) => void;
// }

// const AppTimePicker = ({
//   dateInitial,
//   isShow,
//   onPressCancel,
//   onPressConfirm,
// }: Props) => {
//   const {t} = useTranslation();
//   const [dateSelected, setDateSelected] = useState(dateInitial);
//   localeCalendar();
//   useEffect(() => {
//     setDateSelected(dateInitial);
//   }, [dateInitial]);
//   const resetDaySelected = () => {
//     setDateSelected(dateInitial);
//   };
//   const style: CalendarProps = {
//     initialDate: formatDate(dateSelected.date),
//     markedDates: {
//       [formatDate(dateSelected.date)]: {
//         selected: true,
//         disableTouchEvent: true,
//         selectedColor: color.primaryBlue,
//       },
//     },
//     onDayPress: date => {
//       const dateNew = new Date(Date.UTC(date.year, date.month - 1, date.day));
//       setDateSelected({
//         date: dateNew,
//         day: getDay(dateNew),
//         month: LocaleConfig.locales.default.monthNames[dateNew.getUTCMonth()],
//       });
//     },
//     style: {
//       borderRadius: ms(16),
//     },
//     theme: {
//       arrowColor: color.primaryBlue,
//       todayTextColor: color.orange,
//       dayTextColor: color.black44,
//     },
//   };

//   return (
//     <DatePicker
//       mode="time"
//       minuteInterval={1}
//       onTimeChange={() => {}}
//       style={{
//         backgroundColor: 'red',
//         borderRadius: 20,
//         height: 200,
//         width: '80%',
//       }}
//       options={{backgroundColor: 'red', mainColor: 'red'}}
//     />
//     // <Modal animationType="fade" transparent visible={isShow}>
//     //   <View style={styles.container}>
//     //     <View style={styles.background} />
//     //     <View style={styles.datePicker}>

//     //  <View style={styles.containerButton}>
//     //   <TouchableOpacity
//     //     style={styles.buttonCancel}
//     //     onPress={() => {
//     //       onPressCancel();
//     //       resetDaySelected();
//     //     }}>
//     //     <Text style={styles.textCancel}>{t('datePicker.cancel')}</Text>
//     //   </TouchableOpacity>
//     //   <TouchableOpacity
//     //     style={styles.buttonConfirm}
//     //     onPress={() => {
//     //       onPressConfirm(dateSelected);
//     //     }}>
//     //     <Text style={styles.textConfirm}>{t('datePicker.confirm')}</Text>
//     //   </TouchableOpacity>
//     // </View>
//     //     </View>
//     //   </View>
//     // </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...S.centerAll,
//     height: '100%',
//   },
//   background: {
//     height: '100%',
//     width: '100%',
//     backgroundColor: color.black,
//     opacity: 0.7,
//   },
//   datePicker: {
//     width: '80%',
//     backgroundColor: color.white,
//     borderColor: color.blue,
//     borderRadius: ms(16),
//     position: 'absolute',
//   },
//   containerButton: {
//     ...S.flexRow,
//     columnGap: ms(16),
//     margin: ms(16),
//   },
//   buttonCancel: {
//     ...S.flex1,
//     alignItems: 'center',
//     backgroundColor: color.white,
//     borderColor: color.primaryBlue,
//     borderWidth: ms(1),
//     paddingVertical: ms(10),
//     borderRadius: ms(12),
//   },
//   buttonConfirm: {
//     ...S.flex1,
//     alignItems: 'center',
//     backgroundColor: color.primaryBlue,
//     paddingVertical: ms(10),
//     borderRadius: ms(12),
//   },
//   textCancel: {
//     ...TS.textSmRegular,
//     color: color.black44,
//   },
//   textConfirm: {
//     ...TS.textSmRegular,
//     color: color.white,
//   },
// });

// export default AppTimePicker;
