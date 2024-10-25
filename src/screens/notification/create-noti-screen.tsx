import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {BaseScreen} from '../../components/base-screen';
import {AppNavBar} from '../../components/app-nav-bar';
import {color, ms, S, TS} from '../../themes';
import AppInput from '../../components/app-input';
import AppDatePicker from '../../components/app-datepicker';
import {Calendar} from '../../../assets/icons';
import {AppTouchableOpacity} from '../../components/app-touchable-opacity';
import {formatDateDMY} from '../../utils';
import {AppButton} from '../../components/app-button';

const CreateNotiScreen = () => {
  const {t} = useTranslation();
  const [visibleDateTime, setVisible] = useState(false);
  const [dateSelected, setDateSeleted] = useState(new Date());

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: ms(16),
    },
    title: {
      ...TS.textBaseSemiBold,
      fontWeight: '600',
      color: '#364152',
    },
    redDot: {
      color: color.red,
    },
    textDate: {
      ...TS.textBaseRegular,
      marginHorizontal: ms(8),
      color: '#677294',
    },
    containerTime: {
      ...S.flexRow,
      alignItems: 'center',
    },
    styleBtn: {
      paddingVertical: ms(8),
      marginHorizontal: ms(40),
    },
    styleTextBtn: {
      ...TS.textBaseSemiBold,
      color: color.white,
    },
  });

  const sizeBox = (height: number) => <View style={{height}} />;
  return (
    <BaseScreen>
      <AppNavBar title={t('createNotiAuthority')} />
      <View style={styles.container}>
        <ScrollView>
          {sizeBox(ms(16))}
          <Text style={styles.title}>
            {t('title')} <Text style={styles.redDot}>*</Text>
          </Text>
          {sizeBox(ms(8))}
          <AppInput maxLine={3} multiline />
          {sizeBox(ms(16))}
          <Text style={styles.title}>{t('content')}</Text>
          {sizeBox(ms(8))}
          <AppInput maxLine={8} multiline />
          {sizeBox(ms(16))}
          <View style={styles.containerTime}>
            <Text style={styles.title}>
              {t('dateDisplay')} <Text style={styles.redDot}>*</Text>:
            </Text>
            <AppTouchableOpacity
              style={{marginHorizontal: ms(4)}}
              onPress={() => {
                setVisible(!visibleDateTime);
              }}>
              <View style={{...S.flexRow}}>
                <Calendar />
                <Text style={styles.textDate}>
                  {formatDateDMY(dateSelected)}
                </Text>
              </View>
            </AppTouchableOpacity>
          </View>
          <AppDatePicker
            isShow={visibleDateTime}
            dateInitial={{
              date: dateSelected,
              day: t('datePicker.today'),
              month: '',
            }}
            onPressCancel={() => {
              setVisible(!visibleDateTime);
            }}
            onPressConfirm={value => {
              setDateSeleted(value.date);
              setVisible(!visibleDateTime);
            }}
          />
          {sizeBox(ms(40))}
          <AppButton
            customStyleButton={styles.styleBtn}
            customStyleText={styles.styleTextBtn}
            title={t('save')}
            onPress={() => {}}
          />
        </ScrollView>
      </View>
    </BaseScreen>
  );
};

export default CreateNotiScreen;
