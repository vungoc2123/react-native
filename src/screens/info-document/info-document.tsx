import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import RNFS from 'react-native-fs';
import FileViewer from 'react-native-file-viewer';
import {color, ms, S, TS} from '../../themes';
import DocumentItem from './components/document-item';
import {ToastService} from '../../services/toast/toast-service';
import {Calendar} from '../../../assets/icons';
import ActionsDoc from './components/actions-doc';
import {IDocument} from '../../components/document';

const ContentContainer = (file: string) => {
  const ext = getFileExtensions(file);
  return (
    <DocumentItem
      type={ext}
      key={1}
      name={file}
      onPress={() => onOpenDoc(file)}
    />
  );
};

export const getFileExtensions = (path: string | undefined) => {
  if (!path) return;

  const parts = path.split('.');
  // eslint-disable-next-line consistent-return
  return parts[parts.length - 1];
};

const getLocalPath = (url: string) => {
  const fileName = url.split('/').pop();
  return `${RNFS.DocumentDirectoryPath}/${fileName}`;
};

const onOpenDoc = (url: string) => {
  const localPath = getLocalPath(url);
  const options = {
    fromUrl: url,
    toFile: localPath,
  };
  RNFS.downloadFile(options)
    .promise.then(() => FileViewer.open(localPath))
    .catch((error: any) => {
      ToastService.showError(`${error}`);
    });
};

const RowContent = (title: string, content: string) => (
  <View style={[{...S.flexRow, columnGap: ms(8)}]}>
    <Text style={styles.title}>{title}:</Text>
    <Text style={styles.content}>{content}</Text>
  </View>
);

const InfoDocument = ({doc}: {doc: IDocument}) => {
  const {t} = useTranslation();

  return (
    <View style={styles.stylePage}>
      <View style={styles.container}>
        <Text style={styles.textSummary}>
          {t('summary')}: {doc.summary}
        </Text>
        <View style={styles.containerTime}>
          <Calendar width={ms(20)} height={ms(20)} color={color.gray[950]} />
          {RowContent(t('publishTime'), doc.date)}
        </View>
        {RowContent(t('identifier'), doc.identifier)}
        {RowContent(t('numbered'), doc.numbered)}
        {RowContent(t('typeDoc'), doc.typeDoc)}
        {RowContent(t('priority'), doc.priority.toString())}
        <Text style={styles.textDate}>{t('attachment')}:</Text>
        {ContentContainer(doc.file)}
      </View>
      <View style={styles.styleAction}>
        <ActionsDoc />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: ms(16),
    padding: ms(16),
    flex: 1,
  },
  stylePage: {
    flex: 1,
  },
  containerTime: {
    ...S.flexRow,
    columnGap: ms(8),
  },
  textDate: {
    ...TS.textBaseSemiBold,
    color: color.gray[800],
  },
  textSummary: {
    ...TS.textLgSemiBold,
    textAlign: 'justify',
  },
  title: {
    ...TS.textBaseSemiBold,
  },
  content: {
    ...TS.textBaseRegular,
  },
  styleAction: {
    padding: ms(16),
    justifyContent: 'space-around',
    display: 'flex',
    alignItems: 'flex-end',
  },
});

export default InfoDocument;
