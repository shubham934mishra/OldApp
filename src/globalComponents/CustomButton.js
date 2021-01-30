
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../utilities/style';

export const AppButton = ({ onPress, title, stylee, testID }) => (
    <TouchableOpacity style={stylee} testID={testID} onPress={onPress}>
      <Text style={styles.submitButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  
