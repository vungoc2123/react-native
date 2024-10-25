import React, {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {BaseScreen} from '../../components/base-screen';
import {AppNavBar} from '../../components/app-nav-bar';
import GroupInput from './component/group-input';
import AppInput from '../../components/app-input';
import {color, ms, Platform, TS} from '../../themes';
import {AppButton} from '../../components/app-button';
import {Calendar} from '../../../assets/icons';
import {AppTouchableOpacity} from '../../components/app-touchable-opacity';
import AppDatePicker from '../../components/app-datepicker';
import {formatDateDMY} from '../../utils';
import ArrowDown from '../../../assets/icons/arrow-down';
import AppBottomSheet, {
  AppBottomSheetRef,
} from '../../components/app-bottom-sheet';

const priorites = ['Bình thường', 'Cao', 'Khẩn cấp', 'Hỏa tốc'];
const importants = ['Thấp', 'Bình thường', 'Cao'];

const CreateScheduleScreen = () => {
  const {t} = useTranslation();
  const [visibleStartDate, setVisibleStartDate] = useState(false);
  const [visibleDeadlineDate, setvisibleDeadlineDate] = useState(false);
  const [startDateSelected, setstartDateSelected] = useState(new Date());
  const [deadlineDateSelected, setdeadlineDateSelected] = useState(new Date());
  const [priorityValue, setPriority] = useState('');
  const [importantValue, setImportant] = useState('');
  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (data: any) => console.log(data);
  const bottomSheetRefPri = useRef<AppBottomSheetRef>(null);
  const bottomSheetRefImportant = useRef<AppBottomSheetRef>(null);

  const showBottomSheetPri = () => {
    bottomSheetRefPri.current?.show();
  };

  const showBottomSheetImportant = () => {
    bottomSheetRefImportant.current?.show();
  };

  const itemPriorityBot = ({item}: {item: string}) => (
    <AppTouchableOpacity
      onPress={() => {
        bottomSheetRefPri.current?.close();
        setPriority(item);
        setValue('priority', item, {shouldValidate: true});
      }}>
      <Text style={{...TS.textSmRegular}}>{item}</Text>
    </AppTouchableOpacity>
  );

  const itemImportantBot = ({item}: {item: string}) => (
    <AppTouchableOpacity
      onPress={() => {
        bottomSheetRefImportant.current?.close();
        setImportant(item);
        setValue('important', item, {shouldValidate: true});
      }}>
      <Text style={{...TS.textSmRegular}}>{item}</Text>
    </AppTouchableOpacity>
  );

  const divider = () => <View style={styles.divider} />;
  return (
    <BaseScreen backgroundColor={color.white}>
      <AppNavBar title={t('addNewScheduleWork')} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{height: ms(12)}} />
          <View style={styles.containerFiled}>
            <GroupInput
              title={t('nameWork')}
              childrent={
                <View>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                      <AppInput
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        placeholder={t('nameWork')}
                      />
                    )}
                    name="nameWork"
                    rules={{required: true}}
                    defaultValue=""
                  />
                  {errors.nameWork && (
                    <Text style={styles.styleError}>
                      {t('nameWork')} {t('notiEmpty')}
                    </Text>
                  )}
                </View>
              }
            />
            <GroupInput
              title={t('assigner')}
              childrent={
                <View>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                      <AppInput
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        placeholder={t('assigner')}
                      />
                    )}
                    name="assigner"
                    rules={{required: true}}
                    defaultValue=""
                  />
                  {errors.assigner && (
                    <Text style={styles.styleError}>
                      {t('assigner')} {t('notiEmpty')}
                    </Text>
                  )}
                </View>
              }
            />
            <GroupInput
              title={t('priorityLevel')}
              childrent={
                <View>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => {
                      value = priorityValue;
                      return (
                        <AppTouchableOpacity onPress={showBottomSheetPri}>
                          <AppInput
                            onBlur={onBlur}
                            onChange={onChange}
                            value={value}
                            editable={false}
                            placeholder={t('priorityLevel')}
                            rightIcon={
                              <ArrowDown width={ms(20)} height={ms(20)} />
                            }
                          />
                        </AppTouchableOpacity>
                      );
                    }}
                    name="priority"
                    rules={{required: true}}
                    defaultValue=""
                  />
                  {errors.priority && (
                    <Text style={styles.styleError}>
                      {t('priorityLevel')} {t('notiEmpty')}
                    </Text>
                  )}
                </View>
              }
            />
            <GroupInput
              title={t('important')}
              childrent={
                <View>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur}}) => (
                      <AppTouchableOpacity onPress={showBottomSheetImportant}>
                        <AppInput
                          onBlur={onBlur}
                          onChange={onChange}
                          value={importantValue}
                          placeholder={t('important')}
                          editable={false}
                          rightIcon={
                            <ArrowDown width={ms(20)} height={ms(20)} />
                          }
                        />
                      </AppTouchableOpacity>
                    )}
                    name="important"
                    rules={{required: true}}
                    defaultValue=""
                  />
                  {errors.important && (
                    <Text style={styles.styleError}>
                      {t('important')} {t('notiEmpty')}
                    </Text>
                  )}
                </View>
              }
            />
            <GroupInput
              title={t('startDate')}
              childrent={
                <View>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur}}) => (
                      <AppTouchableOpacity
                        onPress={() => {
                          setVisibleStartDate(!visibleStartDate);
                        }}>
                        <AppInput
                          onBlur={onBlur}
                          onChange={onChange}
                          value={formatDateDMY(startDateSelected)}
                          placeholder={t('startDate')}
                          editable={false}
                          rightIcon={<Calendar />}
                        />
                      </AppTouchableOpacity>
                    )}
                    name="startDate"
                    rules={{required: true}}
                    defaultValue={formatDateDMY(startDateSelected)}
                  />
                  {errors.startDate && (
                    <Text style={styles.styleError}>
                      {t('startDate')} {t('notiEmpty')}
                    </Text>
                  )}
                </View>
              }
            />
            <GroupInput
              title={t('deadline')}
              childrent={
                <View>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur}}) => (
                      <AppTouchableOpacity
                        onPress={() => {
                          setvisibleDeadlineDate(!visibleDeadlineDate);
                        }}>
                        <AppInput
                          onBlur={onBlur}
                          onChange={onChange}
                          editable={false}
                          value={formatDateDMY(deadlineDateSelected)}
                          placeholder={t('deadline')}
                          rightIcon={<Calendar />}
                        />
                      </AppTouchableOpacity>
                    )}
                    name="deadline"
                    rules={{required: true}}
                    defaultValue={formatDateDMY(deadlineDateSelected)}
                  />
                  {errors.deadline && (
                    <Text style={styles.styleError}>
                      {t('deadline')} {t('notiEmpty')}
                    </Text>
                  )}
                </View>
              }
            />
            <GroupInput
              title={t('reminderBefore')}
              childrent={
                <View>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                      <AppInput
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        keyboardType="numeric"
                        placeholder={t('reminderBefore')}
                      />
                    )}
                    name="reminderBefore"
                    rules={{
                      required: t('notiEmpty'),
                      pattern: {
                        value: /^\d+$/,
                        message: t('onlyNumber'),
                      },
                    }}
                    defaultValue=""
                  />
                  {errors.reminderBefore && (
                    <Text style={styles.styleError}>
                      {t('reminderBefore')}{' '}
                      {errors.reminderBefore.message?.toString()}
                    </Text>
                  )}
                </View>
              }
            />
            <GroupInput
              title={t('content')}
              childrent={
                <View>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                      <AppInput
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        maxLine={7}
                        multiline
                        placeholder={t('content')}
                      />
                    )}
                    name="content"
                    rules={{required: true}}
                    defaultValue=""
                  />
                  {errors.content && (
                    <Text style={styles.styleError}>
                      {t('content')} {t('notiEmpty')}
                    </Text>
                  )}
                </View>
              }
            />
            <GroupInput
              title={t('target')}
              childrent={
                <View>
                  <Controller
                    control={control}
                    render={({field: {onChange, onBlur, value}}) => (
                      <AppInput
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        maxLine={3}
                        multiline
                        placeholder={t('target')}
                      />
                    )}
                    name="target"
                    rules={{required: true}}
                    defaultValue=""
                  />
                  {errors.target && (
                    <Text style={styles.styleError}>
                      {t('target')} {t('notiEmpty')}
                    </Text>
                  )}
                </View>
              }
            />
          </View>
          <View style={{height: ms(24)}} />
          <AppButton
            title={t('createNew')}
            onPress={handleSubmit(onSubmit)}
            customStyleButton={styles.styleBtn}
          />
          <View style={{height: ms(24)}} />
        </ScrollView>
        <AppDatePicker
          isShow={visibleStartDate}
          dateInitial={{
            date: startDateSelected,
            day: t('datePicker.today'),
            month: '',
          }}
          onPressCancel={() => {
            setVisibleStartDate(!visibleStartDate);
          }}
          onPressConfirm={value => {
            setstartDateSelected(value.date);
            setVisibleStartDate(!visibleStartDate);
            setValue('startDate', value.date);
          }}
        />
        <AppDatePicker
          isShow={visibleDeadlineDate}
          dateInitial={{
            date: deadlineDateSelected,
            day: t('datePicker.today'),
            month: '',
          }}
          onPressCancel={() => {
            setvisibleDeadlineDate(!visibleDeadlineDate);
          }}
          onPressConfirm={value => {
            setdeadlineDateSelected(value.date);
            setvisibleDeadlineDate(!visibleDeadlineDate);
            setValue('deadline', value.date);
          }}
        />
        <AppBottomSheet ref={bottomSheetRefPri} enableHeader={false}>
          <View
            style={{
              padding: ms(12),
            }}>
            <Text style={[{...TS.textXlSemiBold}, {paddingHorizontal: ms(12)}]}>
              {t('chosePriority')}
            </Text>
            <View style={{height: ms(24)}} />
            <FlatList
              style={{paddingHorizontal: ms(16)}}
              data={priorites}
              renderItem={itemPriorityBot}
              ItemSeparatorComponent={divider}
            />
          </View>
        </AppBottomSheet>
        <AppBottomSheet ref={bottomSheetRefImportant} enableHeader={false}>
          <View
            style={{
              padding: ms(12),
            }}>
            <Text style={[{...TS.textXlSemiBold}, {paddingHorizontal: ms(12)}]}>
              {t('choseImportant')}
            </Text>
            <View style={{height: ms(24)}} />
            <FlatList
              style={{paddingHorizontal: ms(16)}}
              data={importants}
              renderItem={itemImportantBot}
              ItemSeparatorComponent={divider}
            />
          </View>
        </AppBottomSheet>
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(16),
    marginBottom: ms(52),
  },
  styleBtn: {
    paddingVertical: ms(8),
    alignSelf: 'center',
    width: ms(300),
  },
  containerFiled: {
    rowGap: ms(20),
  },
  styleError: {
    ...TS.textSmMedium,
    color: color.red,
    marginTop: ms(4),
  },
  divider: {
    width: Platform.deviceWidth,
    height: ms(1),
    backgroundColor: color.greyDivider,
    marginVertical: ms(12),
  },
});

export default CreateScheduleScreen;
