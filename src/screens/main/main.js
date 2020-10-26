import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './main.style';

const Main = ({navigation}) => {
  const [code, setCode] = useState('');

  const movetoScanner = () => {
    if (code.length > 0) {
      navigation.navigate('Scanner', {userCode: code});
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Great Crop Limited</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCode(text)}
        value={code}
      />
      <TouchableOpacity style={styles.payBtn} onPress={movetoScanner}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
