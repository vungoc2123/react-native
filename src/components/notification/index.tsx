import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {S, TS, color, ms} from '../../themes';
import {
  ClockCalendar,
  EditDoc,
  IncomingFile,
  JobSolid,
} from '../../../assets/icons';

export interface INotification {
  id: string;
  type: string;
  content: string;
  sender: string;
  sentDate: string;
  readed: boolean;
}

export const IconNoti = ({type}: {type: string}) => {
  let Icon: React.FC<SvgProps> = EditDoc;
  const sizeIcon = ms(28);
  switch (type) {
    case 'LH':
      Icon = ClockCalendar;
      break;
    case 'VBD':
      Icon = IncomingFile;
      break;
    case 'CV':
      Icon = JobSolid;
      break;
    default:
      Icon = EditDoc;
      break;
  }
  return (
    <View style={styles.containerIcon}>
      <Icon width={sizeIcon} height={sizeIcon} color={color.gray[600]} />
    </View>
  );
};

const DotNoti = ({readed}: {readed: boolean}) => {
  const styleDot = StyleSheet.create({
    dotNoti: {
      backgroundColor: readed ? color.white : color.primaryBlue,
      width: ms(10),
      height: ms(10),
      borderRadius: ms(10),
    },
  });
  return <View style={styleDot.dotNoti} />;
};

const Sperator = ({height}: {height: number}) => <View style={{height}} />;

const Notification = (props: INotification) => (
  <View style={[styles.container, {...S.justifyBetween}]}>
    <View style={styles.container}>
      <IconNoti type={props.type} />
      <View style={[styles.noti]}>
        <Text style={styles.nameSender} numberOfLines={2}>
          {props.sender}
          <Text style={styles.content}> {props.content}</Text>
        </Text>
        <Sperator height={ms(4)} />
        <Text style={styles.date}>{props.sentDate}</Text>
      </View>
    </View>
    <DotNoti readed={props.readed} />
  </View>
);

const styles = StyleSheet.create({
  nameSender: {
    ...TS.textSmMedium,
    fontWeight: '500',
    color: '#121926',
    textAlign: 'justify',
  },
  container: {
    ...S.flexRow,
    alignItems: 'center',
  },
  containerIcon: {
    padding: ms(15),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: ms(12),
  },
  noti: {
    width: '82%',
    justifyContent: 'space-between',
  },
  content: {
    ...TS.textSmRegular,
    fontWeight: '400',
    color: '#364152',
  },
  date: {
    ...TS.textXsRegular,
    color: color.gray[700],
  },
});

export default Notification;
