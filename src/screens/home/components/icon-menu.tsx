import React from 'react';
import {ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import {ms} from '../../../themes/platform';

interface Props {
  styleIcon: ViewStyle;
  icon: React.ReactNode;
  visible: boolean;
}

const IconMenu = ({styleIcon, visible, icon}: Props) => {
  const styleContainer: ViewStyle = {
    opacity: visible ? 1 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: ms(10),
    borderRadius: ms(12),
  };

  return (
    <Animated.View style={[styleIcon, styleContainer]}>{icon}</Animated.View>
  );
};

export default IconMenu;
