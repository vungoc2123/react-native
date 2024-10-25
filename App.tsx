import {PortalProvider} from '@gorhom/portal';
import {useNetInfo} from '@react-native-community/netinfo';
import React, {useEffect} from 'react';
import {Platform, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import './ReactotronConfig';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ErrorBoundary} from './src/error/error-boundary.tsx';
import {useCachedResources} from './src/hooks';
import './src/i18n/config';
import {toastConfig, ToastService} from './src/services/toast/toast-service';
import {AppNavigation} from './src/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const {isConnected} = useNetInfo();
  useEffect(() => {
    if (!isConnected) {
      ToastService.showError('No network connection');
    }
  }, [isConnected]);

  if (!isLoadingComplete) return null;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.AndroidSafeArea}>
        <ErrorBoundary>
          <PortalProvider>
            <AppNavigation />
          </PortalProvider>
        </ErrorBoundary>
        <Toast config={toastConfig} />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 0 : 0,
  },
});
