/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {Platform, StatusBar, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {color} from '../../themes';

interface Props {
  children?: ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  colorStart?: string;
  colorEnd?: string;
  barStyle?: 'light-content' | 'dark-content' | 'default';
  heightStatusBar?: number;
}

export function BaseScreen(props: Props) {
  const {children, style, barStyle, colorStart, colorEnd, heightStatusBar} =
    props;
  const insert = useSafeAreaInsets();

  return (
    <>
      <LinearGradient
        colors={[colorStart ?? color.white, colorEnd ?? color.white]}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={{
          height:
            Platform.OS === 'ios'
              ? insert.top
              : heightStatusBar || StatusBar.currentHeight,
        }}
      />
      <StatusBar barStyle={barStyle ?? 'dark-content'} />
      <View
        style={{
          flex: 1,
          backgroundColor: color.white,
          ...style,
        }}>
        {children}
      </View>
      {/* <StatusBar
        barStyle={barStyle ?? 'dark-content'}
        backgroundColor={backgroundColor ?? color.primaryBlue}
      />
      <SafeAreaView
        style={{flex: 0, backgroundColor: backgroundColor ?? color.primaryBlue}}
      />
      <SafeAreaView style={{flex: 1, backgroundColor: color.white}}>
        <View style={{flex: 1, backgroundColor: color.white, ...style}}>
          {children}
        </View>
      </SafeAreaView> */}
    </>
  );
}
