import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import styles from './scanner.style';

const Scanner = ({navigation}) => {
  const [data, setData] = useState('');
  const onSuccess = (e) => {
    console.log(e.data);
    setData(e.data);
    // Linking.openURL(e.data).catch((err) =>
    //   console.error('An error occured', err),
    // );
  };
  return (
    <QRCodeScanner
      onRead={onSuccess}
      showMarker={true}
      fadeIn={true}
      flashMode={RNCamera.Constants.FlashMode.auto}
      containerStyle={styles.container}
      topContent={
        <Text style={styles.centerText}>
          Scan the code in order to process payment through MTN mobile money
        </Text>
      }
      bottomContent={
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>Scan Again</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default Scanner;
