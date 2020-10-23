/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './main.style';

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>WIRELESS PAY</Text>
      <TouchableOpacity
        style={styles.payBtn}
        onPress={() => navigation.navigate('Scanner')}>
        <Text>PAY</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
