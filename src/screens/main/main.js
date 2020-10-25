/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './main.style';

const Main = ({navigation}) => {
  const [code, setCode] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Great Crop Limited</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCode(text)}
        value={code}
      />
      <TouchableOpacity
        style={styles.payBtn}
        onPress={() => navigation.navigate('Scanner', {userCode: code})}>
        <Text>Pay With MTN Mobile Money</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
