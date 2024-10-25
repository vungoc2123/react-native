import React, {useState} from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {faGear, faLock} from '@fortawesome/free-solid-svg-icons';
import {BaseScreen} from '../../components/base-screen';
import {color, ms} from '../../themes';
import InfomationItem from './components/infomation-item';
import {AppNavBar} from '../../components/app-nav-bar';
import {ButtonHorizontal} from './components/button-horizontal';
import {AppStackParamList, AppStackScreenProps} from '../../navigation';
import ConfirmModal from '../../components/confirm-modal';

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {}

const AccountScreen = <T extends keyof AppStackParamList>(props: Props<T>) => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    setModalVisible(false);
  };
  const logout = () => {
    navigation.navigate('LoginScreen');
    setModalVisible(false);
  };

  return (
    <BaseScreen colorStart={color.white} colorEnd={color.white}>
      <View style={styles.container}>
        <AppNavBar title="tài khoản" showClose={false} />
        <InfomationItem
          onPressButton1={() => navigation.navigate('AccountDetailScreen')}
          onPressButton2={() => navigation.navigate('AccountDetailScreen')}
        />
        <ButtonHorizontal
          typeNameButton="Đổi mật khẩu"
          icon={faLock}
          onPress={() => navigation.navigate('ChangePassScreen')}
        />
        <ButtonHorizontal
          typeNameButton="Đăng xuất"
          icon={faGear}
          onPress={() => setModalVisible(true)}
        />
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <ConfirmModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            titleModal="Bạn có muốn đăng xuất không?"
            cancleButton="Huỷ"
            confirmButton="Đăng xuất"
            onPressCancel={handleLogout}
            onPressConfirm={logout}
          />
        </Modal>
      </View>
    </BaseScreen>
  );
};
export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(15),
    rowGap: ms(15),
  },
});
