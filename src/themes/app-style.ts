import {StyleSheet} from 'react-native';

const AppStyle = StyleSheet.create({
  flex: {
    display: 'flex',
  },
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  columnCenterAll: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  itemsStart: {
    alignItems: 'flex-start',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  itemsCenter: {
    alignItems: 'center',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowCenterAll: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowFlexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rowCenterSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowCenterSpaceAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  center: {
    alignItems: 'center',
  },
  centerAll: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    justifyContent: 'center',
  },
  centerSpaceBetween: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  centerSpaceAround: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  relativeFill: {
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  top: {
    position: 'absolute',
    top: 0,
  },
  right: {
    position: 'absolute',
    right: 0,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
  },
  left: {
    position: 'absolute',
    left: 0,
  },
});

export const S = AppStyle;
