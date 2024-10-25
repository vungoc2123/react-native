import React, {useState} from 'react';
import {Modal, StatusBar, StyleSheet, View} from 'react-native';
import {BaseScreen} from '../../components/base-screen';
import {AppButton} from '../../components/app-button';
import {AppStackParamList, AppStackScreenProps} from '../../navigation';
import {S, color, ms} from '../../themes';
import {AppNavBar} from '../../components/app-nav-bar';
import AppInputPass from '../../components/app-input-pass';
import ConfirmModal from '../../components/confirm-modal';

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {}

const ChangePassScreen = <T extends keyof AppStackParamList>(
  props: Props<T>,
) => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    setModalVisible(false);
  };
  const accept = () => {
    navigation.navigate('BottomSheetStack');
    setModalVisible(false);
  };

  return (
    <BaseScreen
      style={{backgroundColor: color.white}}
      backgroundColor={color.white}>
      <StatusBar backgroundColor={color.white} />
      <AppNavBar title="Thay đổi mật khẩu" />
      <View style={styles.container}>
        <View style={styles.formInput}>
          <AppInputPass placeholder="Nhập mật khẩu cũ" secureText />
          <AppInputPass placeholder="Nhập mật khẩu mới" secureText />
          <AppInputPass placeholder="Nhập lại mật khẩu" secureText />
          <View style={{...S.rowCenterSpaceBetween, columnGap: ms(20)}}>
            <AppButton
              title="Trở về"
              onPress={() => navigation.navigate('BottomSheetStack')}
              customStyleButton={{
                ...styles.button,
                borderWidth: ms(0.5),
                backgroundColor: color.white,
              }}
              customStyleText={{color: color.black}}
            />
            <AppButton
              title="Lưu"
              onPress={() => setModalVisible(true)}
              customStyleButton={styles.button}
            />
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <ConfirmModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            titleModal="Bạn có muốn thay đổi mật khẩu không?"
            cancleButton="Huỷ"
            confirmButton="Đồng ý"
            onPressCancel={handleLogout}
            onPressConfirm={accept}
          />
        </Modal>
      </View>
    </BaseScreen>
  );
};

export default ChangePassScreen;
const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    width: ms(180),
    paddingVertical: ms(8),
  },
  container: {
    paddingHorizontal: ms(15),
    rowGap: ms(15),
    marginVertical: ms(20),
  },
  formInput: {
    ...S.centerAll,
    rowGap: ms(20),
  },
});
