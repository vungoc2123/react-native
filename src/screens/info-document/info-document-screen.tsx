import React from 'react';
import {TabView, TabBar} from 'react-native-tab-view';
import {useWindowDimensions, StatusBar, StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import TransactionHistory from './transaction-history';
import {BaseScreen} from '../../components/base-screen';
import {AppNavBar} from '../../components/app-nav-bar';
import {color, TS} from '../../themes';
import {AppStackScreenProps} from '../../navigation';
import InfoDocument from './info-document';

interface Props extends AppStackScreenProps<'InfoDocumentScreen'> {}

const InfoDocumentScreen = (props: Props) => {
  const {t} = useTranslation();
  const {route} = props;
  const {doc} = route.params;

  const renderScene = ({route: hello}: {route: any}) => {
    switch (hello.key) {
      case 'first':
        return <InfoDocument doc={doc} />;
      case 'second':
        return <TransactionHistory />;
      default:
        return null;
    }
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: t('InfoDoc')},
    {key: 'second', title: t('transactionHistory')},
  ]);

  // eslint-disable-next-line @typescript-eslint/no-shadow
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

  return (
    <BaseScreen backgroundColor={color.white}>
      <AppNavBar title={t('InfoDoc')} />
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

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
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

export default InfoDocumentScreen;
