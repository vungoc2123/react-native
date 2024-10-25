import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {color, ms, Platform, S, TS} from '../../themes';
import {AppStackParamList, AppStackScreenProps} from '../../navigation';

interface PropChild {
  title: string;
  child: React.ReactNode;
}

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {
  styleIndicator?: ViewStyle;
  styleContainer?: ViewStyle;
  styleLabel?: ViewStyle;
  colorSelected?: string;
  colorUnSelected?: string;
  HEIGHT_TAB_BAR?: number;
  PADDING?: number;
  childrens: PropChild[];
}

const AppTabBar = <T extends keyof AppStackParamList>(
  propsTabBar: Props<T>,
) => {
  const [index, setIndex] = React.useState(0);
  const renderScene = SceneMap(
    propsTabBar.childrens.reduce(
      (acc, child, idx) => {
        const key = `key_${idx}`;
        // eslint-disable-next-line react/jsx-no-useless-fragment
        acc[key] = () => <>{child.child}</>;
        return acc;
      },
      {} as Record<string, React.FC>,
    ),
  );
  const initialRoutes = propsTabBar.childrens.map((child, idx) => ({
    key: `key_${idx}`,
    title: `${child.title}`,
  }));

  const [routes] = React.useState(initialRoutes);
  return (
    <View style={styles.container}>
      <TabView
        renderTabBar={props => (
          <TabBar
            {...props}
            pressColor={color.transfer}
            indicatorStyle={[styles.indicator, propsTabBar.styleIndicator]}
            style={[styles.containerTab, propsTabBar.styleContainer]}
            renderTabBarItem={({key}) => {
              const routeIndex = props.navigationState.routes.findIndex(
                route => route.key === key,
              );
              const isFocused = props.navigationState.index === routeIndex;
              return (
                <TouchableOpacity
                  onPress={() => props.jumpTo(key)}
                  style={{
                    width:
                      (Platform.deviceWidth - (propsTabBar.PADDING || ms(32))) /
                      propsTabBar.childrens.length,
                    height: propsTabBar.HEIGHT_TAB_BAR || ms(50),
                    ...S.centerAll,
                  }}>
                  <Text
                    style={[
                      styles.labelTabView,
                      {
                        color: isFocused
                          ? propsTabBar.colorSelected
                          : propsTabBar.colorUnSelected,
                      },
                      propsTabBar.styleLabel,
                    ]}>
                    {key}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', height: '100%', alignSelf: 'center'},
  indicator: {
    backgroundColor: color.header.end,
    height: '80%',
    width: '48%',
    borderRadius: ms(12),
    top: '10%',
    bottom: '10%',
    right: '1%',
    left: '1%',
  },
  containerTab: {
    backgroundColor: color.white,
    borderRadius: ms(12),
    borderColor: color.header.end,
    borderWidth: ms(1),
    marginBottom: ms(12),
    height: ms(50),
  },
  labelTabView: {
    ...TS.textBaseRegular,
  },
});

export default AppTabBar;
