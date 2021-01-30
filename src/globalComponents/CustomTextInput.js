/* eslint-disable no-shadow */

import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../utilities/style';

export const CustomTextInput = ({ children, label, ipOnChangeText, testID }) => (
    <View style={styles.inputView}>
        <TextInput
            testID={testID}
            placeholder={label}
            placeholderTextColor="#003f5c"
            onChangeText={ipOnChangeText}
        />
        {children}
    </View>
);
