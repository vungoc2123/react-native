import React from 'react';
import {Platform, ScrollView, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Divider} from 'react-native-paper';
import {NotYetProcess} from '../../../assets/icons';
import {TS, color, ms} from '../../themes';
import FeatureWidget from './widget/FeatureWidget';
import {AppNavBar} from '../../components/app-nav-bar';
import {BaseScreen} from '../../components/base-screen';
import {AppStackParamList, AppStackScreenProps} from '../../navigation';
import CommonList from './widget/common-list';

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {}

const FeatureScreen = <T extends keyof AppStackParamList>(props: Props<T>) => {
  const {t} = useTranslation();
  const {navigation} = props;
  const textComming = [
    {
      iconName: NotYetProcess,
      featureName: t('notYet.title'),
      colorFeature: color.error[500],
      onPress: () => navigation.navigate('WorkListScreen'),
    },
    {
      iconName: NotYetProcess,
      featureName: t('internalNotYet.title'),
      colorFeature: color.error[500],
      onPress: () => () => navigation.navigate('WorkListScreen'),
    },
    {
      iconName: NotYetProcess,
      featureName: t('processing.title'),
      colorFeature: color.warning[500],
      onPress: () => navigation.navigate('WorkListScreen'),
    },
    {
      iconName: NotYetProcess,
      featureName: t('processed.title'),
      colorFeature: color.success[500],
      onPress: () => navigation.navigate('WorkListScreen'),
    },
    {
      iconName: NotYetProcess,
      featureName: t('internalProcessed.title'),
      colorFeature: color.success[500],
      onPress: () => navigation.navigate('WorkListScreen'),
    },
  ];

  const textOut = [
    {
      iconName: NotYetProcess,
      featureName: t('notYet.title'),
      colorFeature: color.error[500],
      onPress: () => navigation.navigate('WorkListScreen'),
    },
    {
      iconName: NotYetProcess,
      featureName: t('processing.title'),
      colorFeature: color.warning[500],
      onPress: () => navigation.navigate('WorkListScreen'),
    },
    {
      iconName: NotYetProcess,
      featureName: t('processed.title'),
      colorFeature: color.success[500],
      onPress: () => navigation.navigate('WorkListScreen'),
    },
  ];

  const work = [
    {
      iconName: NotYetProcess,
      featureName: t('individual.title'),
      colorFeature: color.primaryBlue,
      onPress: () => navigation.navigate('WorkListScreen'),
    },
    {
      iconName: NotYetProcess,
      featureName: t('assigned.title'),
      colorFeature: color.primaryBlue,
      onPress: () => navigation.navigate('WorkListScreen'),
    },
  ];

  const divider = () => <Divider />;

  const renderItem = ({item}: {item: (typeof work)[0]}) => (
    <FeatureWidget
      iconName={item.iconName}
      featureName={item.featureName}
      colorFeature={item.colorFeature}
      onPress={item.onPress}
    />
  );
  return (
    <BaseScreen colorStart={color.white} colorEnd={color.white}>
      <AppNavBar title={t('mainFeature.title')} showClose={false} />
      <ScrollView>
        <CommonList
          title={t('incomingDoc')}
          data={textComming}
          renderItem={renderItem}
          divider={divider}
          styles={styles}
        />
        <CommonList
          title={t('outGoingDoc')}
          data={textOut}
          renderItem={renderItem}
          divider={divider}
          styles={styles}
        />
        <CommonList
          title={t('job')}
          data={work}
          renderItem={renderItem}
          divider={divider}
          styles={styles}
        />
      </ScrollView>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(10),
    paddingVertical: ms(8),
    marginHorizontal: ms(18),
    marginVertical: ms(8),
    backgroundColor: color.white,
    borderRadius: ms(16),
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
  containerFeature: {
    columnGap: ms(12),
    rowGap: ms(4),
  },
  title: {
    ...TS.textLgSemiBold,
  },
});

export default FeatureScreen;
