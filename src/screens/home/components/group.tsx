import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {useTranslation} from 'react-i18next';
import Animated from 'react-native-reanimated';
import {ms, S, TS} from '../../../themes';
import {AppTouchableOpacity} from '../../../components/app-touchable-opacity';
import {AppStackParamList, AppStackScreenProps} from '../../../navigation';

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {
  tilte: string;
  onPress: () => void;
  childrent: React.JSX.Element;
  animated?: boolean;
  styleAnimated?: ViewStyle;
}

const Group = <T extends keyof AppStackParamList>(props: Props<T>) => {
  const {t} = useTranslation();
  return (
    <View>
      {props.animated ? <Animated.View style={props.styleAnimated} /> : null}
      <View style={styles.block}>
        <Text style={styles.titleBlock}>{props.tilte}</Text>
        <AppTouchableOpacity onPress={props.onPress}>
          <Text style={styles.textMore}>{t('more')}</Text>
        </AppTouchableOpacity>
      </View>
      {props.childrent}
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    ...S.flexRow,
    ...S.centerSpaceBetween,
    paddingHorizontal: ms(16),
  },
  titleBlock: {
    ...TS.textLgSemiBold,
    fontWeight: '600',
    color: '#364152',
    marginVertical: ms(4),
  },
  textMore: {
    ...TS.textXsRegular,
    fontWeight: '400',
    color: '#364152',
  },
});

export default Group;
