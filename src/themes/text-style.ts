import {StyleSheet} from 'react-native';
import {color} from './colors';
import {ms} from './platform';

const TextStyle = StyleSheet.create({
  // text xs
  textXsRegular: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: color.black,
  },
  textXsMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: color.black,
  },
  textXsSemiBold: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: color.black,
  },
  textXsBold: {
    fontFamily: 'Inter-Bold',
    fontSize: ms(12),
    lineHeight: ms(16),
    color: color.black,
  },

  // text sm
  textSmRegular: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: color.black,
  },
  textSmRegularModal: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(14),
    color: color.black,
  },
  textSmMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: color.black,
  },
  textSmSemiBold: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: color.black,
  },
  textSmBold: {
    fontFamily: 'Inter-Bold',
    fontSize: ms(14),
    lineHeight: ms(20),
    color: color.black,
  },

  // text base
  textBaseRegular: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(16),
    lineHeight: ms(24),
    color: color.black,
  },
  textBaseMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(16),
    lineHeight: ms(24),
    color: color.black,
  },
  textBaseSemiBold: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(16),
    lineHeight: ms(24),
    color: color.black,
  },
  textBaseBold: {
    fontFamily: 'Inter-Bold',
    fontSize: ms(16),
    lineHeight: ms(24),
    color: color.black,
  },

  // text lg
  textLgRegular: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(18),
    lineHeight: ms(28),
    color: color.black,
  },
  textLgMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(18),
    lineHeight: ms(28),
    color: color.black,
  },
  textLgSemiBold: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(18),
    lineHeight: ms(28),
    color: color.black,
  },
  textLgBold: {
    fontFamily: 'Inter-Bold',
    fontSize: ms(18),
    lineHeight: ms(28),
    color: color.black,
  },

  // text xl
  textXlRegular: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(20),
    lineHeight: ms(28),
    color: color.black,
  },
  textXlMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(20),
    lineHeight: ms(28),
    color: color.black,
  },
  textXlSemiBold: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(20),
    lineHeight: ms(28),
    color: color.black,
  },
  textXlBold: {
    fontFamily: 'Inter-Bold',
    fontSize: ms(20),
    lineHeight: ms(28),
    color: color.black,
  },
  textXlBoldLogin: {
    fontFamily: 'Inter-Bold',
    fontSize: ms(20),
    color: color.black,
  },

  // text 2xl
  text2XlRegular: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(24),
    lineHeight: ms(32),
    color: color.black,
  },
  text2XlMedium: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(24),
    lineHeight: ms(32),
    color: color.black,
  },
  text2XlSemiBold: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(24),
    lineHeight: ms(32),
    color: color.black,
  },
  text2XlBold: {
    fontFamily: 'Inter-Bold',
    fontSize: ms(24),
    lineHeight: ms(32),
    color: color.black,
  },
});

export const TS = TextStyle;
