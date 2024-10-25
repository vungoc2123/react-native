import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {BottomSheetStack} from './bottom-sheet-stack';
import {Logger} from '../utils/logger.ts';
import ChangePassScreen from '../screens/account/change-pass-screen.tsx';
import AccountDetailScreen from '../screens/account/account-detail-screen.tsx';
import LoginScreen from '../screens/Login/login-screen.tsx';
import NotificationScreen from '../screens/notification/notification-screen.tsx';
import WorkingScheduleScreen from '../screens/working-schedule/working-schedule-screen.tsx';
import WorkListScreen from '../screens/work-list/work-list-screen.tsx';
import ListDocumentScreen from '../screens/list-document/list-document-screen.tsx';
import {IDocument} from '../components/document/index.tsx';
import InfoDocumentScreen from '../screens/info-document/info-document-screen.tsx';
import CreateNotiScreen from '../screens/notification/create-noti-screen.tsx';
import CreateScheduleScreen from '../screens/working-schedule/create-schedule-screen.tsx';
import DetailWorkListScreen from '../screens/work-list/detail-work-list-screen.tsx';
import TaskAssignmentScreen from '../screens/task-assignment/task-assignment-screen.tsx';
import MainProcessingScreen from '../screens/task-assignment/main-processing-screen.tsx';
import ProcessingParticipationScreen from '../screens/task-assignment/processing-participation-screen.tsx';

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>();

export type AppStackParamList = {
  BottomSheetStack: undefined;
  AccountDetailScreen: undefined;
  ChangePassScreen: undefined;
  LoginScreen: undefined;
  WorkListScreen: undefined;
  NotificationScreen: undefined;
  WorkingScheduleScreen: undefined;
  ListDocumentScreen: undefined;
  InfoDocumentScreen: {doc: IDocument};
  CreateNotiScreen: undefined;
  CreateScheduleScreen: undefined;
  DetailWorkListScreen: undefined;
  TaskAssignmentScreen: undefined;
  MainProcessingScreen: undefined;
  ProcessingParticipationScreen: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;

export function AppNavigation() {
  const navigationRef = createNavigationContainerRef();
  const routeNameRef = React.useRef<string>();
  return (
    <NavigationContainer
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      ref={navigationRef}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef?.getCurrentRoute()?.name;
        if (previousRouteName !== currentRouteName) {
          Logger.info(`Current route: ${currentRouteName}`);
        }
      }}>
      <StatusBar style="auto" />
      <AppStack />
    </NavigationContainer>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomSheetStack">
      <Stack.Screen name="BottomSheetStack" component={BottomSheetStack} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen
        name="AccountDetailScreen"
        component={AccountDetailScreen}
      />
      <Stack.Screen name="ChangePassScreen" component={ChangePassScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen
        name="WorkingScheduleScreen"
        component={WorkingScheduleScreen}
      />
      <Stack.Screen name="WorkListScreen" component={WorkListScreen} />
      <Stack.Screen
        name="DetailWorkListScreen"
        component={DetailWorkListScreen}
      />
      <Stack.Screen
        name="TaskAssignmentScreen"
        component={TaskAssignmentScreen}
      />
      <Stack.Screen
        name="MainProcessingScreen"
        component={MainProcessingScreen}
      />
      <Stack.Screen name="ListDocumentScreen" component={ListDocumentScreen} />
      <Stack.Screen name="InfoDocumentScreen" component={InfoDocumentScreen} />
      <Stack.Screen name="CreateNotiScreen" component={CreateNotiScreen} />
      <Stack.Screen
        name="CreateScheduleScreen"
        component={CreateScheduleScreen}
      />
      <Stack.Screen
        name="ProcessingParticipationScreen"
        component={ProcessingParticipationScreen}
      />
    </Stack.Navigator>
  );
}
