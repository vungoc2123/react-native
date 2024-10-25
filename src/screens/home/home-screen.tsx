import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Platform as PlatformDevice,
  FlatList,
  LogBox,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnJS,
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {useTranslation} from 'react-i18next';
import _debounce from 'lodash/debounce';
import {color} from '../../themes/colors';
import {ms, Platform} from '../../themes/platform';
import {
  Bell,
  calendarClock,
  Category,
  FileDownload,
  invate,
  meeting,
  OutFile,
  sheducar,
  Work,
} from '../../../assets/icons';
import Group from '../home/components/group';
import Notification, {INotification} from '../../components/notification';
import AppTimeline from '../../components/timeline';
import {AppStackParamList, AppStackScreenProps} from '../../navigation';
import MenuBelow from './components/menu-below';
// import Menu from './components/menu';
import HeaderHome from './components/header-home';
import AppBottomSheet, {
  AppBottomSheetRef,
} from '../../components/app-bottom-sheet';
import {S, TS} from '../../themes';
import {AppTouchableOpacity} from '../../components/app-touchable-opacity';
import {BaseScreen} from '../../components/base-screen';
import Widget from './components/widget';

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {}

export const notifications: INotification[] = [
  {
    id: '1',
    type: 'LH',
    content: 'đã đặt một lịch họp vào ngày 22/11/2019 lúc 13h04 đến 15h25',
    sender: 'Nguyễn Văn A',
    sentDate: '13:00 - 01/07/2023',
    readed: false,
  },
  {
    id: '2',
    type: 'VBD',
    content: 'đã gửi bạn một văn bản đến',
    sender: 'Trần Thị B',
    sentDate: '13:00 - 01/07/2023',
    readed: false,
  },
  {
    id: '3',
    type: 'CV',
    content: 'đã gửi đánh giá công việc #Công việc 236',
    sender: 'Lê Hữu C',
    sentDate: '13:00 - 01/07/2023',
    readed: true,
  },
  {
    id: '4',
    type: 'VBTK',
    content: 'đã gửi bạn một văn bản trình ký',
    sender: 'Phạm Thị D',
    sentDate: '13:00 - 01/07/2023',
    readed: false,
  },
  {
    id: '5',
    type: 'VBD',
    content: 'đã gửi bạn một văn bản đến',
    sender: 'Vũ Văn E',
    sentDate: '13:00 - 01/07/2023',
    readed: true,
  },
  {
    id: '6',
    type: 'VBD',
    content: 'đã gửi bạn một văn bản đến',
    sender: 'Trần Thị B',
    sentDate: '13:00 - 01/07/2023',
    readed: false,
  },
  {
    id: '7',
    type: 'CV',
    content: 'đã gửi đánh giá công việc #Công việc 236',
    sender: 'Lê Hữu C',
    sentDate: '13:00 - 01/07/2023',
    readed: true,
  },
  {
    id: '8',
    type: 'VBTK',
    content: 'đã gửi bạn một văn bản trình ký',
    sender: 'Phạm Thị D',
    sentDate: '13:00 - 01/07/2023',
    readed: false,
  },
  {
    id: '9',
    type: 'VBD',
    content: 'đã gửi bạn một văn bản đến',
    sender: 'Vũ Văn E',
    sentDate: '13:00 - 01/07/2023',
    readed: true,
  },
];
const events = [
  {
    time: '09:00',
    title: 'Giao ban Trung tâm đào tạo và CĐT',
    description: '09h00 - 10h30',
  },
  {
    time: '10:45',
    title: 'Giao ban chuyên môn. Báo cáo chuyên đề khoa KBNT',
    description: '10h45 - 11h30',
  },
  {
    time: '12:00',
    title: 'Công ty công nghệ thuyết minh mô hình bệnh án điện tử BVMTW',
    description: '12h00 - 13h30',
  },
  {
    time: '14:00',
    title: 'Họp ban giám đốc',
    description: '14h00 - 16h00',
  },
  {
    time: '16:30',
    title: 'Gặp mặt giáo sư Nguyễn Hoàng Đạt',
    description: '16h30 - 17h30',
  },
];

const HomeScreen = <T extends keyof AppStackParamList>(props: Props<T>) => {
  const {t} = useTranslation();
  const {navigation} = props;
  const bottomSheetRef = useRef<AppBottomSheetRef>(null);
  const showBottomSheet = () => {
    bottomSheetRef.current?.show();
  };
  const [isScrolling, setIsScrolling] = useState(false);
  const translationY = useSharedValue(0);
  const isTranslation = useSharedValue(false);
  const animatedRef = useAnimatedRef<Animated.ScrollView>();
  const sizeIconMin = ms(40);
  const sizeIconMax = ms(45);
  const minHeight = ms(56);
  const maxHeight = ms(192);
  const minHeightBanner = ms(56);
  const maxHeightBanner = ms(146);
  const marginHorizontalDefault = ms(16);
  const marginVerticalDefault = ms(8);
  const bottomDefault = ms(34);
  const marginNotiDefault = ms(26);
  const widthRemaining = Platform.deviceWidth - sizeIconMin * 5;
  const space = widthRemaining / 5;
  const halfSpace = space / 2;
  const marginRight = sizeIconMin + space - ms(3);
  const minBox = maxHeight + ms(12);
  const maxBox = maxHeight + minHeight + ms(12);
  let heightHeader = 0;
  let heightBanner = 0;
  let heightBox = 0;
  let size = 0;
  let leftMenu = 0;
  let rightMenu = 0;
  let bottomMenu = 0;
  let opacicyMenuBelow = 0;
  let topNoti = 0;
  let colorIcon = '';
  let colorNoti = '';

  const menus = [
    {
      id: '1',
      icon: <FileDownload color={color.white} />,
      title: t('incomingDoc'),
      onPressed: () => navigation.navigate('ListDocumentScreen'),
    },
    {
      id: '2',
      icon: <OutFile color={color.white} />,
      title: t('outGoingDoc'),
      onPressed: () => navigation.navigate('NotificationScreen'),
    },
    {
      id: '3',
      icon: <Work color={color.white} />,
      title: t('job'),
      onPressed: () => navigation.navigate('NotificationScreen'),
    },
    {
      id: '4',
      icon: <Category color={color.white} />,
      title: t('convenience'),
      onPressed: showBottomSheet,
    },
  ];

  const utilities = [
    {
      iconName: sheducar,
      featureName: t('sheduCar.title'),
      colorFeature: color.primaryBlue,
    },
    {
      iconName: meeting,
      featureName: t('sheduMeeting.title'),
      colorFeature: color.primaryBlue,
    },
    {
      iconName: invate,
      featureName: t('sheduDuty.title'),
      colorFeature: color.primaryBlue,
    },
    {
      iconName: calendarClock,
      featureName: t('notifiWork.title'),
      colorFeature: color.primaryBlue,
    },
  ];
  useEffect(() => {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested', // Cảnh báo cụ thể
    ]);
  }, []);

  useEffect(() => {
    if (translationY.value >= maxHeight || translationY.value === 0) return;
    isTranslation.value = !isTranslation.value;
  }, [isScrolling]);

  const debouncedSetIsScrolling = useCallback(
    _debounce(value => {
      setIsScrolling(value);
    }, 1000),
    [],
  );

  const cancelToggleScrolling = () => {
    debouncedSetIsScrolling.cancel();
  };
  const toggleScrolling = () => {
    debouncedSetIsScrolling(!isScrolling);
  };

  useAnimatedReaction(
    () => isTranslation.value,
    _ => {
      isTranslation.value
        ? scrollTo(animatedRef, 0, maxHeight, true)
        : scrollTo(animatedRef, 0, 0, true);
    },
  );

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      translationY.value = event.contentOffset.y;
    },
    onBeginDrag: _ => {
      runOnJS(cancelToggleScrolling)();
    },
    onEndDrag: e => {
      if (e.contentOffset.y >= maxHeight || e.contentOffset.y === 0) return;
      runOnJS(toggleScrolling)();
    },
  });

  const styleHeader = useAnimatedStyle(() => {
    heightHeader = interpolate(
      translationY.value,
      [0, maxHeight],
      [maxHeight, minHeight],
      Extrapolate.CLAMP,
    );
    return {height: heightHeader};
  });
  const styleBanner = useAnimatedStyle(() => {
    heightBanner = interpolate(
      translationY.value,
      [0, maxHeightBanner],
      [maxHeightBanner, minHeightBanner],
      Extrapolate.CLAMP,
    );
    return {height: heightBanner};
  });

  const styleBox = useAnimatedStyle(() => {
    heightBox = interpolate(
      translationY.value,
      [0, maxHeight],
      [minBox, maxBox],
      Extrapolate.CLAMP,
    );
    return {height: heightBox};
  });

  const styleIcon = useAnimatedStyle(() => {
    if (PlatformDevice.OS === 'ios') {
      size = interpolate(
        translationY.value,
        [0, maxHeightBanner],
        [sizeIconMax, sizeIconMin],
        Extrapolate.CLAMP,
      );
      colorIcon = interpolateColor(
        translationY.value,
        [0, maxHeightBanner],
        [color.header.start, color.transfer],
      );
    } else {
      size = interpolate(
        translationY.value,
        [0, sizeIconMax],
        [sizeIconMax, sizeIconMin],
        Extrapolate.CLAMP,
      );
      colorIcon = interpolateColor(
        translationY.value,
        [0, maxHeight],
        [color.header.start, color.transfer],
      );
    }
    return {
      width: size,
      height: size,
      backgroundColor: colorIcon,
    };
  });

  const styleMenu = useAnimatedStyle(() => {
    leftMenu = interpolate(
      translationY.value,
      [0, maxHeight],
      [marginHorizontalDefault, 0],
      Extrapolate.CLAMP,
    );

    rightMenu = interpolate(
      translationY.value,
      [0, maxHeight],
      [marginHorizontalDefault, marginRight],
      Extrapolate.CLAMP,
    );

    bottomMenu = interpolate(
      translationY.value,
      [0, maxHeight],
      [bottomDefault, marginVerticalDefault],
      Extrapolate.CLAMP,
    );
    return {left: leftMenu, right: rightMenu, bottom: bottomMenu};
  });

  const styleMenuBelow = useAnimatedStyle(() => {
    opacicyMenuBelow = interpolate(
      translationY.value,
      [0, maxHeightBanner],
      [1, 0],
      Extrapolate.CLAMP,
    );
    return {opacity: opacicyMenuBelow};
  });

  const styleIconNoti = useAnimatedStyle(() => {
    colorNoti = interpolateColor(
      translationY.value,
      [0, maxHeightBanner],
      [color.blackOpacity, color.transfer],
    );

    topNoti = interpolate(
      translationY.value,
      [0, maxHeightBanner],
      [marginNotiDefault, marginVerticalDefault],
      Extrapolate.CLAMP,
    );
    return {
      backgroundColor: colorNoti,
      top: topNoti,
      right: halfSpace,
    };
  });

  const renderNoti = ({item}: {item: INotification}) => (
    <View style={{paddingHorizontal: ms(16)}}>
      <Notification
        id={item.id}
        sender={item.sender}
        content={item.content}
        sentDate={item.sentDate}
        type={item.type}
        readed={item.readed}
      />
    </View>
  );
  const divider = () => <View style={styles.divider} />;
  return (
    <BaseScreen
      barStyle="light-content"
      colorStart={color.header.start}
      colorEnd={color.header.end}
      heightStatusBar={1}>
      <LinearGradient
        colors={[color.header.start, color.header.end]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{height: StatusBar.currentHeight}}
      />
      <View style={styles.header}>
        <Animated.View style={styleHeader}>
          <Animated.View style={styleBanner}>
            <LinearGradient
              colors={[color.header.start, color.header.end]}
              style={[StyleSheet.absoluteFillObject]}
              start={{x: 0, y: 0.5}}
              end={{x: 1, y: 0.5}}>
              <View>
                <HeaderHome
                  {...props}
                  styleIcon={styleIconNoti}
                  styleInfo={styleMenuBelow}
                />
              </View>
            </LinearGradient>
          </Animated.View>
          <MenuBelow
            menus={menus}
            styleMenu={styleMenuBelow}
            styleIcon={styleIcon}
          />
          {/* <Menu menus={menus} styleMenu={styleMenu} styleIcon={styleIcon} /> */}
          <Animated.View style={[styles.container, styleMenu]}>
            {menus.map(menu => (
              <AppTouchableOpacity
                key={menu.id}
                style={styles.item}
                onPress={menu.onPressed}>
                <Animated.View style={[styles.iconMenu, styleIcon]}>
                  {menu.icon}
                </Animated.View>
              </AppTouchableOpacity>
            ))}
          </Animated.View>
          <Animated.View style={[styles.iconNoti, styleIconNoti]}>
            <AppTouchableOpacity
              style={styles.iconNoti}
              onPress={() => {
                navigation.navigate('NotificationScreen');
              }}>
              <Bell color={color.white} />
              <View style={styles.containerNumberNoti}>
                <Text style={styles.text}>14</Text>
              </View>
            </AppTouchableOpacity>
          </Animated.View>
        </Animated.View>
      </View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        ref={animatedRef}
        onScroll={scrollHandler}
        useNativeDriver
        showsVerticalScrollIndicator={false}>
        <Group
          {...props}
          onPress={() => {
            navigation.navigate('NotificationScreen');
          }}
          tilte={t('latestNoti')}
          animated
          styleAnimated={styleBox}
          childrent={
            <FlatList
              style={styles.flatList}
              showsVerticalScrollIndicator={false}
              data={notifications.slice(0, 5)}
              renderItem={renderNoti}
              scrollEnabled={false}
              ItemSeparatorComponent={divider}
              keyExtractor={item => item.id}
            />
          }
        />
        <View style={styles.sperator} />
        <Group
          {...props}
          tilte={t('scheduleToday')}
          onPress={() => {
            navigation.navigate('WorkingScheduleScreen');
          }}
          childrent={
            <View style={{paddingLeft: ms(12)}}>
              <AppTimeline events={events} />
            </View>
          }
        />
      </Animated.ScrollView>
      <AppBottomSheet ref={bottomSheetRef} enableHeader={false}>
        <View
          style={{
            paddingHorizontal: ms(30),
            paddingVertical: ms(20),
            rowGap: ms(20),
            paddingBottom: ms(70),
          }}>
          <Text style={styles.titleBottomSheet}>{t('convenience')}</Text>
          <View style={[styles.containerFeature]}>
            {utilities.map((widget, index) => (
              <Widget
                key={index}
                iconName={widget.iconName}
                featureName={widget.featureName}
                colorFeature={widget.colorFeature}
                onPress={() => {}}
              />
            ))}
          </View>
        </View>
      </AppBottomSheet>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  header: {
    top: StatusBar.currentHeight,
    left: 0,
    right: 0,
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1,
  },
  scrollView: {
    marginHorizontal: ms(12),
  },
  flatList: {
    marginVertical: ms(12),
  },
  divider: {
    width: Platform.deviceWidth - ms(40),
    height: ms(1),
    backgroundColor: color.greyDivider,
    marginVertical: ms(12),
    marginLeft: ms(16),
  },
  sperator: {
    height: ms(12),
  },
  itemText: {
    padding: 20,
    textAlign: 'center',
    fontSize: 24,
  },
  titleBottomSheet: {
    ...TS.textLgBold,
    fontSize: ms(20),
  },
  containerFeature: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: ms(11),
  },
  title: {
    ...TS.textLgSemiBold,
  },
  containerNumberNoti: {
    width: ms(20),
    height: ms(20),
    alignSelf: 'flex-end',
    right: -3,
    top: -3,
    position: 'absolute',
    borderRadius: ms(30),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.orange,
  },
  text: {
    ...TS.textXsRegular,
    color: color.white,
  },
  iconNoti: {
    ...S.centerAll,
    width: ms(40),
    height: ms(40),
    borderRadius: ms(30),
    padding: ms(10),
    position: 'absolute',
  },
  container: {
    ...S.flexRow,
    position: 'absolute',
    borderRadius: ms(16),
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: ms(10),
    borderRadius: ms(12),
  },
});

export default HomeScreen;
