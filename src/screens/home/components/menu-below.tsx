import React from 'react';
import {StyleSheet, Text, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import {ms} from '../../../themes/platform';
import IconMenu from './icon-menu';
import {color, S, TS} from '../../../themes';
import {AppTouchableOpacity} from '../../../components/app-touchable-opacity';

interface PropsIcon {
  id: string;
  icon: React.ReactNode;
  title: string;
  onPressed: () => void;
}
interface PropsMenu {
  menus: PropsIcon[];
  styleMenu: ViewStyle;
  styleIcon: ViewStyle;
}
const MenuBelow = (props: PropsMenu) => (
  <Animated.View style={[styles.container, props.styleMenu]}>
    {props.menus.map(menu => (
      <AppTouchableOpacity key={menu.id} style={styles.item}>
        <IconMenu
          styleIcon={props.styleIcon}
          icon={menu.icon}
          visible={false}
        />
        <Text style={styles.text}>{menu.title}</Text>
      </AppTouchableOpacity>
    ))}
  </Animated.View>
);

const styles = StyleSheet.create({
  container: {
    ...S.flexRow,
    ...S.bottom,
    left: ms(16),
    right: ms(16),
    paddingVertical: ms(10),
    borderRadius: ms(16),
    backgroundColor: color.white,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    rowGap: ms(8),
  },
  text: {
    ...TS.textSmRegular,
  },
});

export default MenuBelow;
