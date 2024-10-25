import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {AppTouchableOpacity} from '../app-touchable-opacity';
import {ms, TS} from '../../themes';

interface Props {
  title: string;
  backgroundColor?: string;
  showClose?: boolean;
  action?: () => React.JSX.Element;
}

export function AppNavBar(props: Props) {
  const {title, showClose, action} = props;

  const navigation = useNavigation();

  const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: ms(12),
    },
    title: {
      ...TS.textLgBold,
      textTransform: 'uppercase',
      paddingVertical: ms(10),
    },
    buttonWrapper: {
      width: ms(40),
      height: ms(40),
      padding: ms(5),
      justifyContent: 'center',
    },
    buttonEmptyWrapper: {
      paddingHorizontal: ms(4),
    },
    itemButtonEmty: {
      width: ms(40),
      height: ms(40),
    },
  });

  // eslint-disable-next-line react/no-unstable-nested-components
  const EmptyContainer = () => (
    <View style={styles.buttonWrapper}>
      <View style={{width: ms(24), height: ms(24)}} />
    </View>
  );

  return (
    <View style={styles.wrapper}>
      {showClose ?? true ? (
        <AppTouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={ms(20)} />
        </AppTouchableOpacity>
      ) : (
        <EmptyContainer />
      )}
      <Text style={styles.title}>{title}</Text>
      {action ? (
        <View style={styles.buttonWrapper}>{action()}</View>
      ) : (
        <EmptyContainer />
      )}
    </View>
  );
}
