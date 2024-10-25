import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {S, TS, color, ms} from '../../../themes';
import {AppTouchableOpacity} from '../../../components/app-touchable-opacity';

interface WidgetProps {
  iconName: (props: SvgProps) => React.JSX.Element;
  featureName: string;
  colorFeature: string;
  onPress?: () => void;
}

const Widget = (props: WidgetProps) => (
  <AppTouchableOpacity style={[styles.container]} onPress={props.onPress}>
    <props.iconName style={styles.icon} fill={color.primaryBlue} />
    <Text style={styles.text}>{props.featureName}</Text>
  </AppTouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...S.rowCenter,
    borderRadius: ms(16),
    height: ms(62),
    columnGap: ms(16),
    width: ms(171),
  },
  text: {
    ...TS.textBaseRegular,
  },
  icon: {
    alignItems: 'center',
    width: ms(17),
    height: ms(17),
  },
});

export default Widget;
