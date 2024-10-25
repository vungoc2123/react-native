import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCalendarDays,
  faPen,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import NetworkCacheImage from '../../../components/network-cache-image';
import {AppTouchableOpacity} from '../../../components/app-touchable-opacity';
import {S, TS, color, ms} from '../../../themes';

interface Props {
  onPressButton1: () => void;
  onPressButton2: () => void;
}

const InfomationItem: React.FC<Props> = ({onPressButton1, onPressButton2}) => (
  <AppTouchableOpacity style={styles.itemInfomation} onPress={onPressButton1}>
    <NetworkCacheImage
      url="https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-3.jpg"
      width={120}
      height={100}
    />
    <View style={{...S.flexColumn, rowGap: ms(20)}}>
      <Text style={{...TS.textSmBold}}>Nguyễn Hiệp</Text>
      <View style={{...S.flexRow, columnGap: ms(6)}}>
        <FontAwesomeIcon
          icon={faCalendarDays}
          size={ms(15)}
          style={{color: color.primary[500]}}
        />
        <Text style={{...TS.textSmRegular}}>08/01/2004</Text>
      </View>
      <View style={{...S.flexRow, columnGap: ms(6)}}>
        <FontAwesomeIcon
          icon={faPhone}
          size={ms(15)}
          style={{color: color.primary[500]}}
        />
        <Text style={{...TS.textSmRegular}}>0923424214</Text>
      </View>
    </View>
    <AppTouchableOpacity style={styles.editButton} onPress={onPressButton2}>
      <FontAwesomeIcon
        icon={faPen}
        size={ms(15)}
        style={{color: color.primary[500]}}
      />
    </AppTouchableOpacity>
  </AppTouchableOpacity>
);

const styles = StyleSheet.create({
  itemInfomation: {
    ...S.flexRow,
    width: ms(380),
    height: ms(130),
    backgroundColor: color.white,
    alignSelf: 'center',
    borderRadius: ms(20),
    padding: ms(10),
    columnGap: ms(20),
    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: ms(0),
      height: ms(2),
    },
    shadowOpacity: ms(0.25),
    shadowRadius: ms(3.84),
    elevation: ms(5),
  },
  editButton: {
    backgroundColor: color.primary[50],
    padding: ms(10),
    width: ms(36),
    height: ms(36),
    alignItems: 'center',
    borderRadius: ms(10),
    marginHorizontal: ms(35),
    marginVertical: ms(15),
    shadowColor: '#000',
    shadowOffset: {
      width: ms(0),
      height: ms(2),
    },
    shadowOpacity: ms(0.25),
    shadowRadius: ms(3.84),
    elevation: ms(2),
  },
});

export default InfomationItem;
