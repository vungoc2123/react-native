import React from 'react';
import {View, Text} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface Item {
  iconName: (props: SvgProps) => JSX.Element;
  featureName: string;
  colorFeature: string;
  onPress: () => void;
}

interface CommonListProps {
  title: string;
  data: Item[];
  renderItem: ({item, index}: {item: Item; index: number}) => JSX.Element;
  divider: () => JSX.Element;
  styles: any;
}

const CommonList: React.FC<CommonListProps> = ({
  title,
  data,
  renderItem,
  divider,
  styles,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={[styles.containerFeature]}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {renderItem({item, index})}
          {index < data.length - 1 && divider()}
        </React.Fragment>
      ))}
    </View>
  </View>
);

export default CommonList;
