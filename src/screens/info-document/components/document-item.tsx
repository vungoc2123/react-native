import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {useTranslation} from 'react-i18next';
import {AppTouchableOpacity} from '../../../components/app-touchable-opacity';
import {color, ms, S, TS} from '../../../themes';

interface DocumentItemProps {
  type?: string;
  name: string;
  onPress: () => void;
  additionalProp?: string;
}

const DocumentItem: React.FC<DocumentItemProps> = ({
  type,
  name,
  onPress,
  additionalProp,
}) => {
  const getIcon = () => {
    switch (type) {
      case 'pdf':
        return <FontAwesome name="file-pdf-o" size={24} color="red" />;
      case 'xls':
        return <FontAwesome name="file-excel-o" size={24} color="green" />;
      case 'docx':
        return <FontAwesome name="file-word-o" size={24} color="blue" />;
      default:
        return <FontAwesome name="file-o" size={24} color="black" />;
    }
  };
  const {t} = useTranslation();

  return (
    <View style={styles.itemContainer}>
      {getIcon()}
      <View style={styles.textContainer}>
        <Text style={styles.fileName} numberOfLines={2}>
          {name}
        </Text>
        {additionalProp && <Text>{additionalProp}</Text>}
      </View>
      <AppTouchableOpacity onPress={onPress}>
        <Text style={{...TS.textSmRegular, color: color.primaryBlue}}>
          {t('open')}
        </Text>
      </AppTouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    ...S.rowCenter,
    marginBottom: ms(15),
    borderWidth: ms(1),
    padding: ms(10),
    borderRadius: ms(10),
    borderColor: color.gray[400],
  },
  textContainer: {
    marginLeft: ms(10),
    ...S.flex1,
  },
  fileName: {
    ...TS.textBaseRegular,
  },
});

export default DocumentItem;
