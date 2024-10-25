import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {AppTouchableOpacity} from '../../../components/app-touchable-opacity';
import {TS, color, ms} from '../../../themes';

interface Props {
  typeNameButton: string;
  backgroundColor?: string;
  icon: IconProp;
  onPress: () => void;
}

export function ButtonHorizontal(props: Props) {
  const {typeNameButton, backgroundColor, icon, onPress} = props;

  const navigation = useNavigation();

  const styles = StyleSheet.create({
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: backgroundColor ?? color.white,
      borderRadius: ms(20),
      padding: ms(15),
      shadowColor: '#000',
      shadowOffset: {
        width: ms(0),
        height: ms(2),
      },
      shadowOpacity: ms(0.25),
      shadowRadius: ms(2.84),
      elevation: ms(5),
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    nameButton: {
      ...TS.textSmRegular,
      color: color.black,
      textTransform: 'uppercase',
      marginHorizontal: ms(20),
    },
    buttonWrapper: {
      width: ms(40),
      height: ms(40),
      padding: ms(5),
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonEmptyWrapper: {
      paddingHorizontal: ms(4),
    },
  });

  return (
    <AppTouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.container}>
        <View
          style={{
            ...styles.buttonWrapper,
            backgroundColor: color.primary[50],
            borderRadius: ms(15),
          }}>
          <FontAwesomeIcon
            icon={icon}
            size={ms(20)}
            color={color.primary[500]}
          />
        </View>
        <Text style={styles.nameButton}>{typeNameButton}</Text>
      </View>
      <AppTouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faChevronRight} size={ms(20)} />
      </AppTouchableOpacity>
    </AppTouchableOpacity>
  );
}
