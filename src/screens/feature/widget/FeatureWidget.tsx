import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {S, color, ms} from '../../../themes';
import {AppTouchableOpacity} from '../../../components/app-touchable-opacity';

interface FeatureWidgetProps {
  iconName: (props: SvgProps) => React.JSX.Element;
  featureName: string;
  colorFeature: string;
  onPress?: () => void;
}

const FeatureWidget = (props: FeatureWidgetProps) => (
  <AppTouchableOpacity style={[styles.container]} onPress={props.onPress}>
    <props.iconName style={styles.icon} fill={color.primaryBlue} />
    <Text style={styles.text}>{props.featureName}</Text>
  </AppTouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    ...S.rowCenter,
    borderRadius: ms(16),
    padding: ms(10),
    width: '100%',
    height: ms(62),
    columnGap: ms(16),
  },
  text: {
    fontSize: ms(14),
    textAlign: 'center',
    color: color.black44,
  },
  icon: {
    alignItems: 'center',
    width: ms(12),
    height: ms(12),
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: ms(0),
      height: ms(2),
    },
    shadowOpacity: ms(0.25),
    shadowRadius: ms(3.84),
    ...Platform.select({
      android: {
        elevation: 5,
      },
    }),
  },
});

export default FeatureWidget;
