import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import IconMenu from './icon-menu';
import {ms, S} from '../../../themes';
import {AppTouchableOpacity} from '../../../components/app-touchable-opacity';

interface PropsIcon {
  id: string;
  icon: React.ReactNode;
  onPressed: () => void;
}
interface PropsMenu {
  menus: PropsIcon[];
  styleMenu: ViewStyle;
  styleIcon: ViewStyle;
}
const Menu = (props: PropsMenu) => (
  <Animated.View style={[styles.container, props.styleMenu]}>
    {props.menus.map(menu => (
      <AppTouchableOpacity
        key={menu.id}
        style={styles.item}
        onPress={menu.onPressed}>
        <IconMenu styleIcon={props.styleIcon} icon={menu.icon} visible />
      </AppTouchableOpacity>
    ))}
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    ...S.flexRow,
    position: 'absolute',
    borderRadius: ms(16),
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Menu;
