import React, {useRef, useState} from 'react';
import {StyleSheet, Text, StatusBar, Alert, View} from 'react-native';
import 'react-native-gesture-handler';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {AppStackParamList, AppStackScreenProps} from '../../navigation';
import {TS, color, ms} from '../../themes';
import AppInput from '../../components/app-input';
import {BaseScreen} from '../../components/base-screen';
import AppInputPass from '../../components/app-input-pass';
import {AppTouchableOpacity} from '../../components/app-touchable-opacity';
import Logo from '../../../assets/icons/icon-login-screen/logo';
import AppBottomSheet, {
  AppBottomSheetRef,
} from '../../components/app-bottom-sheet';
import {AppButton} from '../../components/app-button';

interface Account {
  mail: string;
  pass: string;
}

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {}

const LoginScreen = <T extends keyof AppStackParamList>(props: Props<T>) => {
  const {navigation} = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [accounts] = useState<Account[]>([{mail: 'Metasol', pass: '1'}]);
  const bottomSheetRef = useRef<AppBottomSheetRef>(null);

  const showBottomSheet = () => {
    bottomSheetRef.current?.show();
  };
  const hideBottomSheet = () => {
    bottomSheetRef.current?.close();
    navigation.navigate('BottomSheetStack');
  };

  return (
    <BaseScreen style={styles.container} backgroundColor={color.white}>
      <StatusBar barStyle="dark-content" backgroundColor={color.white} />
      <Logo style={{marginVertical: ms(20), marginTop: ms(40)}} />
      <Text style={styles.nameAppText}>Phần mềm quản lý điều hành văn bản</Text>
      <Text
        style={{
          ...styles.nameAppText,
          fontSize: ms(30),
          marginBottom: ms(20),
        }}>
        Eoffice VNEH
      </Text>
      <Text style={styles.loginTo}>Đăng nhập hệ thống để tiếp tục</Text>
      <AppInput
        placeholder="Email đăng nhập"
        onChange={text => setEmail(text)}
        value={email}
        rightIcon={<FontAwesomeIcon icon={faUser} color={color.gray[500]} />}
      />
      <AppInputPass
        placeholder="Mật khẩu"
        secureText
        onChange={text => setPassword(text)}
        value={password}
      />
      <AppTouchableOpacity
        style={styles.buttonLogin}
        onPress={() => {
          if (email.length === 0) {
            Alert.alert('Vui lòng nhập địa chỉ email');
            return;
          }
          if (password.length === 0) {
            Alert.alert('Vui lòng nhập mật khẩu');
            return;
          }
          const foundAccount = accounts.find(
            account => account.mail === email && account.pass === password,
          );
          if (foundAccount) {
            navigation.navigate('BottomSheetStack');
          } else {
            Alert.alert('Sai địa chỉ email hoặc mật khẩu. Vui lòng thử lại.');
          }
        }}>
        <Text style={styles.textLogin}>Đăng nhập</Text>
      </AppTouchableOpacity>
      <AppTouchableOpacity onPress={showBottomSheet}>
        <Text style={styles.textFogotPass}>Quên mật khẩu</Text>
      </AppTouchableOpacity>
      <AppBottomSheet ref={bottomSheetRef} enableHeader={false}>
        <View style={styles.containerBottomSheet}>
          <Text style={styles.textFogotPassBottomSheet}>Quên mật khẩu</Text>
          <Text style={styles.textBottomSheet}>
            Nhập email của bạn cho quá trình xác minh, chúng tôi sẽ gửi mã bảo
            mật đến email của bạn.
          </Text>
          <AppInput placeholder="Email" />
          <AppButton
            title="Tiếp theo"
            onPress={hideBottomSheet}
            customStyleButton={styles.buttonBottomSheet}
          />
        </View>
      </AppBottomSheet>
    </BaseScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    alignItems: 'center',
    paddingHorizontal: ms(20),
    rowGap: ms(10),
  },
  nameAppText: {
    ...TS.textXlBoldLogin,
    color: color.primary[500],
    alignSelf: 'center',
  },
  loginTo: {
    ...TS.textSmBold,
    marginVertical: ms(10),
  },
  buttonLogin: {
    alignSelf: 'center',
    width: ms(370),
    height: ms(50),
    backgroundColor: color.primary[500],
    borderRadius: ms(15),
    alignItems: 'center',
    marginVertical: ms(50),
  },
  textLogin: {
    ...TS.textLgSemiBold,
    color: color.white,
    justifyContent: 'center',
    paddingVertical: ms(10),
  },
  textFogotPass: {
    ...TS.textLgSemiBold,
    justifyContent: 'center',
    paddingVertical: ms(10),
  },
  containerBottomSheet: {
    paddingVertical: ms(20),
    paddingHorizontal: ms(20),
    rowGap: ms(10),
  },
  textFogotPassBottomSheet: {
    ...TS.text2XlSemiBold,
  },
  textBottomSheet: {
    ...TS.textBaseRegular,
    marginBottom: ms(20),
  },
  buttonBottomSheet: {
    backgroundColor: color.primary[500],
    marginVertical: ms(20),
    paddingVertical: ms(12),
  },
});
