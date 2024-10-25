/* eslint-disable react/jsx-no-useless-fragment */
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetProps,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import {Keyboard, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {BottomSheetDefaultBackdropProps} from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types';
import {Portal} from '@gorhom/portal';
import XVector from '../../../assets/icons/icons-base/x-vector';
import {S, TS, ms} from '../../themes';

const styles = StyleSheet.create({
  headerContainer: {
    ...S.rowCenterSpaceBetween,
    padding: ms(16),

    borderBottomWidth: ms(1),
  },
  title: {
    ...TS.textBaseSemiBold,
  },
  dragIndicator: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  dragHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
  },
});

export interface AppBottomSheetRef {
  show: () => void;
  close: () => void;
  handleSheetChanges: (index: number) => void;
}

export interface IProps extends Omit<BottomSheetProps, 'snapPoints'> {
  withoutPortal?: boolean;
  initialSnapPoints?: (string | number)[];
  title?: string;
  enableHeader?: boolean;
}

const AppBottomSheet = forwardRef((props: IProps, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const initialSnapPoints = useMemo(
    () => props.initialSnapPoints || ['CONTENT_HEIGHT', ms(700)],
    [props.initialSnapPoints],
  );

  // handles close pressed and pan down events
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const handleShowPress = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index < 0) Keyboard.dismiss();
  }, []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  useImperativeHandle(
    ref,
    () => ({
      show: () => {
        handleShowPress();
      },
      close: () => {
        handleClosePress();
      },
      handleSheetChanges: (index: number) => {
        bottomSheetRef.current?.snapToIndex(index);
      },
    }),
    [props.initialSnapPoints],
  );

  const renderBackdrop = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (props: JSX.IntrinsicAttributes & BottomSheetDefaultBackdropProps) => (
      <BottomSheetBackdrop
        opacity={0.3}
        enableTouchThrough={false}
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        onPress={() => {
          handleClosePress();
        }}
      />
    ),
    [],
  );

  const BottomSheetResult = (
    <BottomSheet
      handleComponent={null}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      keyboardBehavior="extend"
      keyboardBlurBehavior="restore"
      android_keyboardInputMode="adjustPan"
      {...props}>
      <BottomSheetView onLayout={handleContentLayout}>
        <View style={styles.dragIndicator}>
          <View style={styles.dragHandle} />
        </View>
        {props.enableHeader ? (
          <View style={styles.headerContainer}>
            {props.title && (
              <Text style={styles.title}>{props.title || ''}</Text>
            )}

            <TouchableOpacity
              hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
              onPress={() => {
                handleClosePress();
              }}>
              <XVector height={ms(12)} width={ms(12)} />
            </TouchableOpacity>
          </View>
        ) : null}
        <>{props.children}</>
      </BottomSheetView>
    </BottomSheet>
  );

  return (
    <>
      {props.withoutPortal ? (
        BottomSheetResult
      ) : (
        <Portal>{BottomSheetResult}</Portal>
      )}
    </>
  );
});

export default AppBottomSheet;
