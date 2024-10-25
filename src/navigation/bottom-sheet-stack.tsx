import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  faCalendar,
  faHouse,
  faLayerGroup,
  faUserLarge,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useTranslation} from 'react-i18next';
import {AppStackParamList, AppStackScreenProps} from './app-navigation.tsx';
import {color, ms, S, TS} from '../themes';
import AccountScreen from '../screens/account/account-screen.tsx';
import HomeScreen from '../screens/home/home-screen.tsx';
import WorkingScheduleScreen from '../screens/working-schedule/working-schedule-screen.tsx';
import NotificationScreen from '../screens/feature/feature-screen.tsx';

export type TabParamList = {
  HomeScreen: undefined;
  WorkingScheduleScreen: undefined;
  FeatureScreen: undefined;
  AccountScreen: undefined;
};

/**
 * Helper for automatically generating navigation prop types for each route.
 *
 * More info: https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, T>,
  AppStackScreenProps<keyof AppStackParamList>
>;

const Tab = createBottomTabNavigator<TabParamList>();
interface ITabScreen {
  title: string;
  icon: IconDefinition;
  name: keyof TabParamList;
  component: (props: AppStackScreenProps<any>) => React.JSX.Element;
}

interface TabBarIconProps {
  focused: boolean;
  tab: Omit<ITabScreen, 'component'>;
}

export function TabBarIcon(props: TabBarIconProps) {
  const {focused, tab} = props;

  const styles = StyleSheet.create({
    tabBarIconContainer: {
      ...S.itemsCenter,
      ...S.justifyCenter,
      rowGap: ms(5),
    },
    tabBarTitle: {
      ...(focused ? TS.textXsBold : TS.textXsMedium),
      color: focused ? color.primaryBlue : color.gray[500],
    },
  });

  return (
    <View style={styles.tabBarIconContainer}>
      <FontAwesomeIcon
        icon={tab.icon}
        size={ms(20)}
        color={focused ? color.primaryBlue : color.gray[500]}
      />
      <Text style={styles.tabBarTitle}>{tab.title}</Text>
    </View>
  );
}

export function BottomSheetStack() {
  const {t} = useTranslation();

  const tabScreens: ITabScreen[] = [
    {
      title: t('home.title'),
      icon: faHouse,
      name: 'HomeScreen',
      component: HomeScreen,
    },
    {
      title: t('workingSchedule.title'),
      icon: faCalendar,
      name: 'WorkingScheduleScreen',
      component: WorkingScheduleScreen,
    },
    {
      title: t('function.title'),
      icon: faLayerGroup,
      name: 'FeatureScreen',
      component: NotificationScreen,
    },
    {
      title: t('account.title'),
      icon: faUserLarge,
      name: 'AccountScreen',
      component: AccountScreen,
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          minHeight: ms(64),
          backgroundColor: color.white,
          borderColor: color.gray[200],
        },
        tabBarItemStyle: {
          height: ms(48),
          marginVertical: ms(8),
        },
        tabBarIconStyle: {
          ...S.flex1,
        },
      }}>
      {tabScreens.map((tab, index) => (
        <Tab.Screen
          key={index}
          component={tab.component}
          name={tab.name}
          options={{
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({focused}) => (
              <TabBarIcon focused={focused} tab={tab} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
