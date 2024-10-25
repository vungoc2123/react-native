import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BaseScreen} from '../../components/base-screen';
import {AppNavBar} from '../../components/app-nav-bar';
import {color, ms, TS} from '../../themes';
import {AppButton} from '../../components/app-button';
import {AppStackParamList, AppStackScreenProps} from '../../navigation';
import ConfirmModal from '../../components/confirm-modal';

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {}
const DetailWorkListScreen = <T extends keyof AppStackParamList>(
  props: Props<T>,
) => {
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const handleAcceptWork = () => {
    setModalVisible(false);
  };
  const accept = () => {
    setModalVisible(false);
  };
  return (
    <BaseScreen>
      <AppNavBar title="Thông tin công việc" />
      <View style={styles.container}>
        <View style={styles.containerContent}>
          <Text style={styles.textTitle}>Kiểm tra hoạt động của công việc</Text>
          <Text style={styles.textTitleContent}>
            Người giao việc:{' '}
            <Text style={styles.textContent}>Hoàng Diệp Hạnh</Text>
          </Text>
          <Text style={styles.textTitleContent}>
            Ngày hoàn thành mong muốn:
            <Text style={styles.textContent}> 22/11/2020</Text>
          </Text>
          <Text style={styles.textTitleContent}>
            Người xử lý chính:
            <Text style={styles.textContent}> Trần Tất Thắng</Text>
          </Text>
          <Text style={styles.textTitleContent}>
            Nội dung công việc:
            <Text style={styles.textContent}>Thử luồng công việc</Text>
          </Text>
          <Text style={styles.textTitleContent}>
            Độ ưu tiên: <Text style={styles.textContent}>Khẩn</Text>
          </Text>
          <Text style={styles.textTitleContent}>
            Mức độ quan trọng:{' '}
            <Text style={styles.textContent}>Quan trọng</Text>
          </Text>
          <Text style={styles.textTitleContent}>
            Trạng thái: <Text style={styles.textContent}>Đang thực hiện</Text>
          </Text>
          <Text style={styles.textTitleContent}>Tệp đính kèm:</Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.flexButton}>
            <AppButton
              title="Giao việc"
              onPress={() => navigation.navigate('TaskAssignmentScreen')}
              customStyleButton={styles.styleButton}
              customStyleText={styles.styleText}
            />
            <AppButton
              title="Bắt đầu xử lý"
              onPress={() => setModalVisible(true)}
              customStyleButton={styles.styleButton}
              customStyleText={styles.styleText}
            />
            <AppButton
              title="Các công việc con"
              onPress={() => {}}
              customStyleButton={styles.styleButton}
              customStyleText={styles.styleText}
            />
            <AppButton
              title="Cập nhật tiến độ"
              onPress={() => {}}
              customStyleButton={styles.styleButton}
              customStyleText={styles.styleText}
            />
            <AppButton
              title="Lùi hạn công việc"
              onPress={() => {}}
              customStyleButton={styles.styleButton}
              customStyleText={styles.styleText}
            />
          </View>
        </ScrollView>
      </View>

      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <ConfirmModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          titleModal="Bạn có chắc chắn muốn bắt đầu công việc này ?"
          cancleButton="không"
          confirmButton="Có"
          onPressCancel={handleAcceptWork}
          onPressConfirm={accept}
        />
      </Modal>
    </BaseScreen>
  );
};

export default DetailWorkListScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: ms(12),
    flex: 1,
  },
  containerContent: {
    rowGap: ms(16),
  },
  textTitle: {
    ...TS.textXlBold,
    textAlign: 'center',
    color: color.primaryBlue,
  },
  textContent: {
    ...TS.textBaseRegular,
    fontSize: ms(15),
  },
  textTitleContent: {
    ...TS.textBaseRegular,
    color: color.gray[500],
  },
  styleButton: {
    borderColor: color.primaryBlue,
    borderWidth: ms(1),
    backgroundColor: color.white,
    justifyContent: 'center',
    padding: ms(20),
  },
  styleText: {
    ...TS.textSmBold,
    color: color.primaryBlue,
    textAlign: 'center',
  },
  flexButton: {
    columnGap: ms(8),
    flexDirection: 'row',
  },
  containerButton: {
    position: 'absolute',
    bottom: ms(20),
    padding: ms(12),
  },
});
