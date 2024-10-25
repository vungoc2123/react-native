import AsyncStorage from '@react-native-async-storage/async-storage';
import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/vi';
import {Platform} from 'react-native';
import {useTranslation} from 'react-i18next';
import {LocaleConfig} from 'react-native-calendars';
import {KeyStores} from '../enums/key-storages.ts';
import {Logger} from './logger.ts';

export const Utils = {
  isNumber: (n: any) => _.isNumber(n),
  isString: (n: any) => _.isString(n),
  isArray: (n: any) => _.isArray(n),
  isBoolean: (n: any) => _.isBoolean(n),
  isInteger: (n: any) => _.isInteger(n),
  isNull: (n: any) => _.isNull(n),
  isObject: (n: any) => _.isObject(n),
  isDate: (n: any) => _.isDate(n),
  isIOS: () => Platform.OS === 'ios',
  isAndroid: () => Platform.OS === 'android',
};

export const setDataStorage = async (
  Key: KeyStores,
  value?: any,
): Promise<boolean> => {
  try {
    if (value) {
      await AsyncStorage.setItem(Key, JSON.stringify(value));
    } else {
      await AsyncStorage.removeItem(Key);
    }
    return true;
  } catch (error) {
    Logger.error('Error saving data storage');
    return false;
  }
};

export const getDataStorage = async (Key: KeyStores) => {
  try {
    const data = await AsyncStorage.getItem(Key);
    if (data) {
      return JSON.parse(data);
    }

    return null;
  } catch (error) {
    Logger.error('Error retrieving data storage');
    return null;
  }
};

const noMoreThanOneCommas = (input: number | string) => {
  const str = input.toString();
  let commasCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.') commasCount++;
    if (commasCount > 1) break;
  }
  return commasCount <= 1;
};

export const insertCommas = (
  input: number | undefined | string,
  decimals: number = 4,
) => {
  if (typeof input === 'undefined') return '';
  if (!noMoreThanOneCommas(input)) return '';
  const parts = input.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (parts[1]) parts[1] = parts[1].substring(0, decimals); // Only take the first 4 decimals
  return parts.join('.');
};

export const unInsertCommas = (input: string) => {
  const parts = input.split('.');
  parts[0] = parts[0].split(',').join('');
  if (parts[1]) parts[1] = parts[1].substring(0, 4); // Only take the first 4 decimals
  return parts.join('.');
};

export const calEffectiveTime = (dateEnd: Date) => {
  const currentDate = moment();
  const difference = moment(dateEnd).unix() - currentDate.unix();

  const seconds = Math.floor(difference % 60);
  const minutes = Math.floor((difference / 60) % 60);
  const hours = Math.floor((difference / (60 * 60)) % 24);
  const days = Math.floor(difference / (60 * 60 * 24));
  return {days, hours, minutes, seconds, difference};
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mimeTypes = Object.freeze({
  allFiles: '*/*',
  audio: 'audio/*',
  csv: 'text/csv',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  images: 'image/*',
  pdf: 'application/pdf',
  plainText: 'text/plain',
  ppt: 'application/vnd.ms-powerpoint',
  pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  video: 'video/*',
  xls: 'application/vnd.ms-excel',
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  zip: 'application/zip',
} as const);

export const formatTime = (dateTimeString: string) => {
  if (!dateTimeString) {
    return '';
  }
  const time = dateTimeString.split(' ')[1];
  const [hour, minute] = time.split(':');
  return `${hour}:${minute}`;
};

export const formatDateDMY = (date: Date) => {
  if (!date) {
    return '';
  }
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDate = (date: Date) => {
  if (!date) {
    return '';
  }
  return `${date.toISOString().split('T')[0]}`;
};

export const getDay = (date: Date) =>
  moment(new Date()).isSame(date, 'day')
    ? LocaleConfig.locales.default.today
    : LocaleConfig.locales.default.dayNames[date.getUTCDay()];

export const localeCalendar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {t} = useTranslation();
  LocaleConfig.locales.default = {
    monthNames: [
      t('datePicker.monthNames.month1'),
      t('datePicker.monthNames.month2'),
      t('datePicker.monthNames.month3'),
      t('datePicker.monthNames.month4'),
      t('datePicker.monthNames.month5'),
      t('datePicker.monthNames.month6'),
      t('datePicker.monthNames.month7'),
      t('datePicker.monthNames.month8'),
      t('datePicker.monthNames.month9'),
      t('datePicker.monthNames.month10'),
      t('datePicker.monthNames.month11'),
      t('datePicker.monthNames.month12'),
    ],
    monthNamesShort: [
      t('datePicker.monthShort.monthShort1'),
      t('datePicker.monthShort.monthShort2'),
      t('datePicker.monthShort.monthShort3'),
      t('datePicker.monthShort.monthShort4'),
      t('datePicker.monthShort.monthShort5'),
      t('datePicker.monthShort.monthShort6'),
      t('datePicker.monthShort.monthShort7'),
      t('datePicker.monthShort.monthShort8'),
      t('datePicker.monthShort.monthShort9'),
      t('datePicker.monthShort.monthShort10'),
      t('datePicker.monthShort.monthShort11'),
      t('datePicker.monthShort.monthShort12'),
    ],
    dayNames: [
      t('datePicker.dayNames.sunday'),
      t('datePicker.dayNames.monday'),
      t('datePicker.dayNames.tuesday'),
      t('datePicker.dayNames.wednesday'),
      t('datePicker.dayNames.thursday'),
      t('datePicker.dayNames.friday'),
      t('datePicker.dayNames.saturday'),
    ],
    dayNamesShort: [
      t('datePicker.dayNamesShort.sunday'),
      t('datePicker.dayNamesShort.monday'),
      t('datePicker.dayNamesShort.tuesday'),
      t('datePicker.dayNamesShort.wednesday'),
      t('datePicker.dayNamesShort.thursday'),
      t('datePicker.dayNamesShort.friday'),
      t('datePicker.dayNamesShort.saturday'),
    ],
    today: t('datePicker.today'),
  };
  LocaleConfig.defaultLocale = 'default';
};
