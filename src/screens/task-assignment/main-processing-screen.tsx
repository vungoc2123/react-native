import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import AppInput from '../../components/app-input';
import {color, ms} from '../../themes';

const MainProcessingScreen = () => (
  <View style={styles.container}>
    <AppInput
      placeholder="Họ tên"
      leftIcon={
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          color={color.gray[500]}
          style={styles.input}
        />
      }
    />
    <Text>xử lý chính</Text>
  </View>
);

export default MainProcessingScreen;

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
  container: {
    padding: ms(12),
    rowGap: ms(12),
  },
});
