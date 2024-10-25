import {StyleSheet, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {TabBar, TabView} from 'react-native-tab-view';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {BaseScreen} from '../../components/base-screen';
import {AppNavBar} from '../../components/app-nav-bar';
import {color, TS} from '../../themes';
import MainProcessingScreen from './main-processing-screen';
import ProcessingParticipationScreen from './processing-participation-screen';
import {AppTouchableOpacity} from '../../components/app-touchable-opacity';

const TaskAssignmentScreen = () => {
  const {t} = useTranslation();

  const renderScene = ({route: hello}: {route: any}) => {
    switch (hello.key) {
      case 'first':
        return <MainProcessingScreen />;
      case 'second':
        return <ProcessingParticipationScreen />;
      default:
        return null;
    }
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: t('mainProcessing')},
    {key: 'second', title: t('participateInProcessing')},
  ]);
  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      bounces={false}
      renderLabel={({route: router, focused}) => (
        <Text
          style={[
            styles.textTabbar,
            {
              color: focused ? color.primaryBlue : color.black,
            },
          ]}>
          {router.title}
        </Text>
      )}
    />
  );
  const action = () => (
    <AppTouchableOpacity onPress={() => {}}>
      <FontAwesomeIcon icon={faPaperPlane} size={20} color={color.gray[600]} />
    </AppTouchableOpacity>
  );
  return (
    <BaseScreen>
      <AppNavBar title="Giao việc" action={action} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        collapsable
        initialLayout={{width: layout.width}}
      />
    </BaseScreen>
  );
};

export default TaskAssignmentScreen;

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: color.white,
    color: color.black,
  },
  textTabbar: {
    ...TS.textBaseMedium,
  },
  scene: {
    flex: 1,
  },
  indicator: {
    backgroundColor: color.primaryBlue,
  },
});
