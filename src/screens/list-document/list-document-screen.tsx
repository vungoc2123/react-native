import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, StyleSheet, View} from 'react-native';
import {BaseScreen} from '../../components/base-screen';
import Document, {IDocument} from '../../components/document';
import {AppNavBar} from '../../components/app-nav-bar';
import {color, ms, Platform} from '../../themes';
import {AppTouchableOpacity} from '../../components/app-touchable-opacity';
import {AppStackParamList, AppStackScreenProps} from '../../navigation';
import Search from '../../../assets/icons/search';

export const documents: IDocument[] = [
  {
    identifier: '976/KL-BYT', // so ki hieu
    summary:
      'Về việc: ban hành danh mục cấp giấy ĐKLH thuốc nước ngoài - Đợt 103 bổ sung lần 2',
    numbered: '107', // sổ theo số
    date: '20/12/2022',
    field: 'Y tế',
    typeDoc: 'Công văn',
    priority: 1,
    file: 'https://vinacomin-uat.metasol.vn/userfiles/files/%C4%90%E1%BA%A5u%20th%E1%BA%A7u%202/thong-bao-kq-lc-ncc-sc-thiet-bi-van-phong-1545396765.pdf',
  },
  {
    identifier: '976/KL-BYT', // so ki hieu
    summary:
      'Về việc: ban hành danh mục cấp giấy ĐKLH thuốc nước ngoài - Đợt 103 bổ sung lần 2',
    numbered: '107', // sổ theo số
    date: '20/12/2022',
    field: 'Y tế',
    typeDoc: 'Thông tư',
    priority: 2,
    file: 'https://vinacomin-uat.metasol.vn/userfiles/files/%C4%90%E1%BA%A5u%20th%E1%BA%A7u%202/thong-bao-kq-lc-ncc-sc-thiet-bi-van-phong-1545396765.pdf',
  },
  {
    identifier: '976/KL-BYT', // so ki hieu
    summary:
      'Về việc: ban hành danh mục cấp giấy ĐKLH thuốc nước ngoài - Đợt 103 bổ sung lần 2',
    numbered: '107', // sổ theo số
    date: '20/12/2022',
    field: 'Y tế',
    typeDoc: 'Quyết định',
    priority: 3,
    file: 'https://vinacomin-uat.metasol.vn/userfiles/files/%C4%90%E1%BA%A5u%20th%E1%BA%A7u%202/thong-bao-kq-lc-ncc-sc-thiet-bi-van-phong-1545396765.pdf',
  },
  {
    identifier: '976/KL-BYT', // so ki hieu
    summary:
      'Về việc: ban hành danh mục cấp giấy ĐKLH thuốc nước ngoài - Đợt 103 bổ sung lần 2',
    numbered: '107', // sổ theo số
    date: '20/12/2022',
    field: 'Y tế',
    typeDoc: 'Công văn',
    priority: 1,
    file: 'https://vinacomin-uat.metasol.vn/userfiles/files/%C4%90%E1%BA%A5u%20th%E1%BA%A7u%202/thong-bao-kq-lc-ncc-sc-thiet-bi-van-phong-1545396765.pdf',
  },
  {
    identifier: '976/KL-BYT', // so ki hieu
    summary:
      'Về việc: ban hành danh mục cấp giấy ĐKLH thuốc nước ngoài - Đợt 103 bổ sung lần 2',
    numbered: '107', // sổ theo số
    date: '20/12/2022',
    field: 'Y tế',
    typeDoc: 'Thông tư',
    priority: 2,
    file: 'https://vinacomin-uat.metasol.vn/userfiles/files/%C4%90%E1%BA%A5u%20th%E1%BA%A7u%202/thong-bao-kq-lc-ncc-sc-thiet-bi-van-phong-1545396765.pdf',
  },
  {
    identifier: '976/KL-BYT', // so ki hieu
    summary:
      'Về việc: ban hành danh mục cấp giấy ĐKLH thuốc nước ngoài - Đợt 103 bổ sung lần 2',
    numbered: '107', // sổ theo số
    date: '20/12/2022',
    field: 'Y tế',
    typeDoc: 'Quyết định',
    priority: 3,
    file: 'https://vinacomin-uat.metasol.vn/userfiles/files/%C4%90%E1%BA%A5u%20th%E1%BA%A7u%202/thong-bao-kq-lc-ncc-sc-thiet-bi-van-phong-1545396765.pdf',
  },
];

interface Props<T extends keyof AppStackParamList>
  extends AppStackScreenProps<T> {}

const ListDocumentScreen = <T extends keyof AppStackParamList>(
  props: Props<T>,
) => {
  const {navigation} = props;
  const {t} = useTranslation();

  const renderItem = ({item}: {item: IDocument}) => (
    <AppTouchableOpacity
      onPress={() => {
        navigation.navigate('InfoDocumentScreen', {doc: item});
      }}>
      <Document
        identifier={item.identifier}
        date={item.date}
        typeDoc={item.typeDoc}
        field={item.field}
        file={item.file}
        numbered={item.numbered}
        priority={item.priority}
        summary={item.summary}
      />
    </AppTouchableOpacity>
  );

  const divider = () => <View style={styles.divider} />;

  const actionSearch = () => (
    <AppTouchableOpacity>
      <Search width={ms(25)} height={ms(25)} />
    </AppTouchableOpacity>
  );

  return (
    <BaseScreen backgroundColor={color.white}>
      <AppNavBar title={t('document')} action={actionSearch} />
      <View style={styles.container}>
        {/* <AppInput leftIcon={<Search width={ms(20)} height={ms(20)} />} /> */}
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={documents}
          renderItem={renderItem}
          ItemSeparatorComponent={divider}
        />
      </View>
    </BaseScreen>
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginVertical: ms(22),
  },
  container: {
    marginHorizontal: ms(12),
    marginBottom: ms(50),
    paddingBottom: ms(10),
  },
  divider: {
    width: Platform.deviceWidth,
    height: ms(1),
    backgroundColor: color.greyDivider,
    marginVertical: ms(12),
  },
});

export default ListDocumentScreen;
