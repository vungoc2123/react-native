import React, {useRef, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {AppStackParamList, AppStackScreenProps} from '../../navigation';
import {Platform, S, TS, color, ms} from '../../themes';
import {notifications} from '../home/home-screen';
import Notification, {
  IconNoti,
  INotification,
} from '../../components/notification';
import {AppNavBar} from '../../components/app-nav-bar';
import {BaseScreen} from '../../components/base-screen';
import AppCheckBox from '../../components/app-checkbox';
import {AppTouchableOpacity} from '../../components/app-touchable-opacity';
import {AppButton} from '../../components/app-button';
import Filter from '../../../assets/icons/filter';
import AppBottomSheet, {
  AppBottomSheetRef,
} from '../../components/app-bottom-sheet';
import {IDropdownItem} from '../../components/drop-down';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    paddingHorizontal: ms(16),
  },
  flatList: {
    marginVertical: ms(12),
  },
  sperator: {
    height: ms(12),
  },
  divider: {
    width: Platform.deviceWidth - ms(40),
    height: ms(1),
    backgroundColor: color.greyDivider,
    marginVertical: ms(12),
  },
  header: {
    ...S.flexRow,
    ...S.justifyBetween,
    ...S.itemsCenter,
    marginTop: ms(16),
  },
  label: {
    ...TS.textSmMedium,
  },
  text: {
    ...TS.textSmMedium,
    color: '#697586',
  },
  styleBtn: {
    position: 'absolute',
    width: ms(50),
    height: ms(50),
    borderRadius: ms(25),
    justifyContent: 'center',
    alignContent: 'center',
    bottom: ms(40),
    right: ms(30),
  },
  styleTextBtn: {
    fontSize: ms(24),
    alignSelf: 'center',
    alignContent: 'center',
  },
  styleFilter: {
    borderWidth: ms(0.5),
    borderColor: color.gray[500],
  },
  containerItemBot: {
    ...S.flexRow,
    alignItems: 'center',
  },
});

const dataFilter: IDropdownItem[] = [
  {label: 'Tất cả', value: '0'},
  {label: 'văn bản đến', value: 'LH'},
  {label: 'Lịch công tác', value: 'CV'},
  {label: 'Văn bản cần ký', value: 'VBD'},
  {label: 'Công việc', value: '4'},
];

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {}

const NotificationScreen = <T extends keyof AppStackParamList>(
  props: Props<T>,
) => {
  const [isChecked, setCheckBox] = useState(false);

  const {navigation} = props;
  const {t} = useTranslation();

  const bottomSheetRef = useRef<AppBottomSheetRef>(null);

  const showBottomSheet = () => {
    bottomSheetRef.current?.show();
  };
  const renderItem = ({item}: {item: INotification}) => (
    <Notification
      id={item.id}
      sender={item.sender}
      content={item.content}
      sentDate={item.sentDate}
      type={item.type}
      readed={item.readed}
    />
  );

  const actionSearch = () => (
    <AppTouchableOpacity onPress={showBottomSheet}>
      <Filter width={ms(30)} height={ms(30)} />
    </AppTouchableOpacity>
  );

  const itemFliterBottomSheet = ({item}: {item: IDropdownItem}) => (
    <AppTouchableOpacity
      onPress={() => {
        bottomSheetRef.current?.close();
      }}>
      <View style={styles.containerItemBot}>
        <IconNoti type={item.value} />
        <Text style={{...TS.textSmRegular}}>{item.label}</Text>
      </View>
    </AppTouchableOpacity>
  );

  const divider = () => <View style={styles.divider} />;
  return (
    <BaseScreen backgroundColor={color.white}>
      <AppNavBar title={t('notification')} action={actionSearch} />
      <View style={styles.container}>
        <View style={styles.header}>
          <AppCheckBox
            label={t('unread')}
            value={isChecked}
            labelStyle={styles.text}
            onPress={() => {
              setCheckBox(!isChecked);
            }}
          />
          <AppTouchableOpacity>
            <Text style={styles.text}>{t('readedAll')}</Text>
          </AppTouchableOpacity>
        </View>
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={notifications}
          renderItem={renderItem}
          ItemSeparatorComponent={divider}
        />
        <AppButton
          customStyleButton={styles.styleBtn}
          customStyleText={styles.styleTextBtn}
          title="+"
          onPress={() => {
            navigation.navigate('CreateNotiScreen');
          }}
        />
        <AppBottomSheet ref={bottomSheetRef} enableHeader={false}>
          <View
            style={{
              padding: ms(12),
            }}>
            <Text style={[{...TS.textLgSemiBold}, {paddingHorizontal: ms(12)}]}>
              {t('choseTypeNoti')}
            </Text>
            <FlatList data={dataFilter} renderItem={itemFliterBottomSheet} />
          </View>
        </AppBottomSheet>
      </View>
    </BaseScreen>
  );
};

export default NotificationScreen;
