import {FontAwesome} from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';
import {Logger} from '../utils/logger.ts';

export function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const getUserInfo = async () => {
    // const userInfo = await getDataStorage(KeyStores.USER_INFO);
    // UserStore.setUserInfo(userInfo);
  };

  async function loadResourcesAndDataAsync() {
    try {
      await SplashScreen.preventAutoHideAsync();
      // Load fonts
      await Font.loadAsync({
        ...FontAwesome.font,
        'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
        'Inter-Medium': require('../../assets/fonts/Inter-Medium.ttf'),
        'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
        'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
        Inter: require('../../assets/fonts/Inter.ttf'),
        'PlusJakartaSans-Bold': require('../../assets/fonts/PlusJakartaSans-Bold.ttf'),
      });
      await getUserInfo();
    } catch (e) {
      // We might want to provide this error information to an error reporting service
      Logger.warn(e);
    } finally {
      setLoadingComplete(true);
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 700); // delay 700 ms
    }
  }

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
