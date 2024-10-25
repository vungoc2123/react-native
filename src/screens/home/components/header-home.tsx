import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {useTranslation} from 'react-i18next';
import Animated from 'react-native-reanimated';
import {S, TS, color, ms} from '../../../themes';
import NetworkCacheImage from '../../../components/network-cache-image';
import {AppStackParamList, AppStackScreenProps} from '../../../navigation';

const urlImage =
  'https://s3-alpha-sig.figma.com/img/df4c/f22d/fd51f05d89c6c2bd92a9059a78109df7?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YfWRqrWTGYp-STGb7SS~12Fy4VVr6qh52mYuelaj2RFjAYbYQwJePbQUriITMTFsd7MdX-h3Yjk1IX-1LC~Y-br7fTlyEtcNDhiVdVUzerfrsWHo7Q7vOzi-vWJ9lm4MgulSEwgaihiUes-mzVXV8pWLJfeOSoJm0uNy3ZFr1ohYiDDDEgEyFwGAH4AQkIJ3Ic0~PjW9DG4l4XNNMYrcKPt3QbWY~tlxDMrJ6b6G8HcQ7sOsJfqywLy2P0yX16FgsJp7rpGtAJv4focYgdNN9ighrtfsxrRhoMgAmX8-m5241f79UWMJbtPIc5as9v9BOE7wzKhyb-gR1u-uM4SuUA__';

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {
  styleInfo: ViewStyle;
  styleIcon: ViewStyle;
}

const HeaderHome = <T extends keyof AppStackParamList>(props: Props<T>) => {
  const {t} = useTranslation();
  return (
    <View style={styles.header}>
      <Animated.View style={[styles.containerInfo, props.styleInfo]}>
        <View style={{...S.flexRow}}>
          <NetworkCacheImage url={urlImage} width={ms(60)} height={ms(60)} />
          <View style={[{...S.flexColumn}, styles.viewInfo]}>
            <Text style={styles.textHello}>{t('hello')}</Text>
            <Text style={styles.textName}>Nguyễn Đức Thịnh !</Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  header: {
    ...S.flexRow,
    ...S.justifyBetween,
    width: '100%',
    paddingLeft: ms(16),
  },
  containerInfo: {
    ...S.justifyBetween,
    ...S.flexRow,
    paddingVertical: ms(16),
  },
  viewInfo: {
    marginLeft: ms(12),
  },
  textHello: {
    ...TS.textLgMedium,
    color: color.white,
  },
  textName: {
    ...TS.textXlBold,
    color: color.white,
  },
});
