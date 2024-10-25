import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  Modal,
} from 'react-native';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useTranslation} from 'react-i18next';
import {AppNavBar} from '../../components/app-nav-bar';
import {S, TS, color, ms} from '../../themes';
import NetworkCacheImage from '../../components/network-cache-image';
import {BaseScreen} from '../../components/base-screen';
import {AppButton} from '../../components/app-button';
import {AppStackScreenProps} from '../../navigation';
import ConfirmModal from '../../components/confirm-modal';
import AppDatePicker from '../../components/app-datepicker';
import {AppTouchableOpacity} from '../../components/app-touchable-opacity';

interface Props extends AppStackScreenProps<'AccountDetailScreen'> {}
const AccountDetailScreen: React.FC<Props> = ({navigation}) => {
  const [imageUri, setImageUri] = useState<string>(
    'https://cellphones.com.vn/sforum/wp-content/uploads/2024/02/avatar-anh-meo-cute-3.jpg',
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editableContents, setEditableContents] = useState<{
    [key: string]: string;
  }>({
    name: 'Nguyễn Công Hoàng Hiệp',
    phone: '0932545245',
    birthday: 'DD/MM/YYYY',
    address: '********',
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [visibleDateTime, setVisible] = useState(false);
  const [dateSelected, setDateSeleted] = useState(new Date());
  const {t} = useTranslation();

  const handleLogout = () => {
    setModalVisible(false);
  };

  const saveEdit = () => {
    navigation.navigate('BottomSheetStack');
    setModalVisible(false);
  };

  const handleChangeImage = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      (response: ImagePickerResponse) => {
        if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri || '');
        } else if (response.errorMessage) {
          Alert.alert('Lỗi', response.errorMessage);
        }
      },
    );
  };

  const viewInfo = (props: {
    name: string;
    contentKey: keyof typeof editableContents;
  }) => (
    <View style={styles.containerViewInfo}>
      <Text style={TS.textSmBold}>{props.name}</Text>
      {isEditing ? (
        props.contentKey === 'birthday' ? (
          <AppTouchableOpacity onPress={() => setVisible(!visibleDateTime)}>
            {/* <TextInput
              style={[TS.textSmRegular]}
              value={editableContents[props.contentKey]}
              editable={false}
            /> */}
            <Text>{editableContents.birthday}</Text>
          </AppTouchableOpacity>
        ) : (
          <TextInput
            style={[TS.textSmRegular]}
            value={editableContents[props.contentKey]}
            onChangeText={text =>
              setEditableContents(prev => ({
                ...prev,
                [props.contentKey]: text,
              }))
            }
            multiline
          />
        )
      ) : (
        <Text style={TS.textSmRegular}>
          {editableContents[props.contentKey]}
        </Text>
      )}
    </View>
  );

  return (
    <BaseScreen
      style={{backgroundColor: color.white}}
      backgroundColor={color.white}>
      <AppNavBar title="Thông tin tài khoản" />
      <View style={styles.container}>
        <View style={styles.containerItem}>
          <View style={styles.imageContainer}>
            <NetworkCacheImage
              url={imageUri}
              width={130}
              height={130}
              styleImage={styles.imageAva}
            />
            <TouchableOpacity
              style={styles.cameraIconContainer}
              onPress={handleChangeImage}
              accessible
              accessibilityLabel="Thay đổi hình đại diện">
              <FontAwesomeIcon icon={faCamera} size={20} color={color.white} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textName}>Bác sĩ: Nguyễn Hiệp</Text>
          {viewInfo({name: 'Họ và tên', contentKey: 'name'})}
          {viewInfo({name: 'Số điện thoại', contentKey: 'phone'})}
          {viewInfo({name: 'Ngày sinh', contentKey: 'birthday'})}
          {viewInfo({name: 'Địa chỉ', contentKey: 'address'})}
          <View style={styles.buttonView}>
            {isEditing ? (
              <AppButton
                title="Lưu"
                onPress={() => setModalVisible(true)}
                customStyleButton={styles.buttonSave}
              />
            ) : (
              <AppButton
                title="Chỉnh sửa"
                onPress={() => setIsEditing(true)}
                customStyleButton={styles.buttonEdit}
                customStyleText={styles.textEdit}
              />
            )}
            {!isEditing && (
              <AppButton
                title="Trở về"
                onPress={() => navigation.navigate('BottomSheetStack')}
                customStyleButton={styles.button}
              />
            )}
          </View>
          <Modal
            animationType="slide"
            transparent
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <ConfirmModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              titleModal="Bạn có muốn lưu thông tin đã chỉnh sửa không ?"
              cancleButton="Huỷ"
              confirmButton="Xác nhận"
              onPressCancel={handleLogout}
              onPressConfirm={saveEdit}
            />
          </Modal>
          <AppDatePicker
            isShow={visibleDateTime}
            dateInitial={{
              date: dateSelected,
              day: t('datePicker.today'),
              month: '',
            }}
            onPressCancel={() => {
              setVisible(!visibleDateTime);
            }}
            onPressConfirm={value => {
              setDateSeleted(value.date);
              setVisible(!visibleDateTime);
            }}
          />
        </View>
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(15),
    rowGap: ms(15),
  },
  imageContainer: {
    position: 'relative',
    marginVertical: ms(16),
  },
  imageAva: {
    borderRadius: ms(100),
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: ms(5),
    right: ms(5),
    backgroundColor: color.gray[400],
    borderRadius: ms(20),
    padding: ms(7),
  },
  containerItem: {
    ...S.centerAll,
    rowGap: ms(20),
  },
  textName: {
    ...TS.textBaseBold,
  },
  containerViewInfo: {
    backgroundColor: color.gray[200],
    borderRadius: ms(10),
    padding: ms(15),
    width: ms(370),
    rowGap: ms(5),
  },
  buttonView: {
    ...S.flexRow,
    columnGap: ms(30),
    top: ms(40),
  },
  buttonEdit: {
    backgroundColor: color.white,
    borderWidth: ms(0.5),
    width: ms(190),
    paddingVertical: ms(8),
  },
  textEdit: {
    color: color.black,
  },
  button: {
    paddingHorizontal: ms(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSave: {
    paddingHorizontal: ms(55),
    paddingVertical: ms(10),
  },
});

export default AccountDetailScreen;
