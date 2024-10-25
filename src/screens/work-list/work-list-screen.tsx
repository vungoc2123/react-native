import React, {useRef} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {t} from 'i18next';
import {Divider} from 'react-native-paper';
import {faMagnifyingGlass, faSliders} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {AppNavBar} from '../../components/app-nav-bar';
import {TS, color, ms} from '../../themes';
import {BaseScreen} from '../../components/base-screen';
import Wokitem, {IWorkItem} from './components/wok_item';
import AppInput from '../../components/app-input';
import {AppTouchableOpacity} from '../../components/app-touchable-opacity';
import AppBottomSheet, {
  AppBottomSheetRef,
} from '../../components/app-bottom-sheet';
import {AppStackParamList, AppStackScreenProps} from '../../navigation';

const workList: IWorkItem[] = [
  {
    progress: 0.79,
    nameJob: 'Kiểm tra hoạt động công việc',
    description: 'Thử luồng công việc',
    processor: 'Trần Tất Thắng',
    time: '07/05/2024',
  },
  {
    progress: 0.79,
    nameJob: 'Kiểm tra hoạt động công việc',
    description: 'Thử luồng công việc',
    processor: 'Trần Tất Thắng',
    time: '07/05/2024',
  },
  {
    progress: 0.79,
    nameJob: 'Kiểm tra hoạt động công việc',
    description: 'Thử luồng công việc',
    processor: 'Trần Tất Thắng',
    time: '07/05/2024',
  },
  {
    progress: 0.79,
    nameJob: 'Kiểm tra hoạt động công việc',
    description: 'Thử luồng công việc',
    processor: 'Trần Tất Thắng',
    time: '07/05/2024',
  },
  {
    progress: 0.79,
    nameJob: 'Kiểm tra hoạt động công việc',
    description: 'Thử luồng công việc',
    processor: 'Trần Tất Thắng',
    time: '07/05/2024',
  },
  {
    progress: 0.79,
    nameJob: 'Kiểm tra hoạt động công việc',
    description: 'Thử luồng công việc',
    processor: 'Trần Tất Thắng',
    time: '07/05/2024',
  },
  {
    progress: 0.79,
    nameJob: 'Kiểm tra hoạt động công việc',
    description: 'Thử luồng công việc',
    processor: 'Trần Tất Thắng',
    time: '07/05/2024',
  },
];

const filterWork = [
  {
    id: 1,
    name: t('notYet.title'),
  },
  {
    id: 1,
    name: t('processing.title'),
  },
  {
    id: 1,
    name: t('processed.title'),
  },
  {
    id: 1,
    name: t('Issued'),
  },
];
const ItemSeparator = () => <View style={{height: ms(12)}} />;
interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {}
const WorkListScreen = <T extends keyof AppStackParamList>(props: Props<T>) => {
  const bottomSheetRef = useRef<AppBottomSheetRef>(null);
  const {navigation} = props;

  const showBottomSheet = () => {
    bottomSheetRef.current?.show();
  };

  const divider = () => <Divider />;

  const action = () => (
    <AppTouchableOpacity onPress={showBottomSheet}>
      <FontAwesomeIcon icon={faSliders} size={20} color={color.gray[600]} />
    </AppTouchableOpacity>
  );

  return (
    <BaseScreen backgroundColor={color.white}>
      {/* app bar */}
      <AppNavBar title={t('workList.title')} action={action} />
      <View style={styles.container}>
        {/* search */}
        <View
          style={{
            columnGap: ms(20),
          }}>
          <AppInput
            placeholder="Tìm kiếm"
            leftIcon={
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                color={color.gray[500]}
                style={styles.input}
              />
            }
          />
          {/* filter */}
          <AppBottomSheet ref={bottomSheetRef} enableHeader={false}>
            <View style={styles.bottomSheetFilter}>
              <Text style={styles.textTitleBottomSheet}>
                {t('processingStatus')}
              </Text>
              <FlatList
                scrollEnabled={false}
                data={filterWork}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{
                      paddingVertical: ms(12),
                      paddingHorizontal: ms(4),
                    }}>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                )}
                ItemSeparatorComponent={divider}
              />
            </View>
          </AppBottomSheet>
        </View>

        {/* body */}
        <FlatList
          data={workList}
          renderItem={({item}) => (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailWorkListScreen')}>
                <Wokitem {...item} />
              </TouchableOpacity>
            </View>
          )}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: ms(8),
    paddingHorizontal: ms(16),
    rowGap: ms(16),
    flex: 1,
  },
  item: {
    paddingVertical: ms(12),
    paddingHorizontal: ms(16),
    borderRadius: ms(16),
    backgroundColor: color.gray[100],
  },
  bottomSheetFilter: {
    backgroundColor: color.white,
    right: ms(10),
    paddingHorizontal: ms(30),
    paddingVertical: ms(20),
    marginBottom: ms(60),
  },
  input: {
    flex: 1,
  },
  textTitleBottomSheet: {
    ...TS.textLgBold,
    fontSize: ms(22),
    marginBottom: ms(15),
  },
});
export default WorkListScreen;
