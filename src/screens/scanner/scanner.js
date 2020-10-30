import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

import styles from './scanner.style';

const Scanner = ({navigation, route}) => {
  const onSuccess = (e) => {
    const jsonData = JSON.parse(e.data.toString());

    navigation.navigate('Logs', {
      user: {
        id: route.params ? route.params.userCode : 'Guest',
        name: jsonData.name,
        position: jsonData.position,
        date: new Date().toLocaleString(),
      },
    });
  };
  return (
    <QRCodeScanner
      onRead={onSuccess}
      showMarker={true}
      fadeIn={false}
      flashMode={RNCamera.Constants.FlashMode.auto}
      containerStyle={styles.container}
      cameraStyle={styles.camera}
      topContent={
        <View style={styles.topContainer}>
          <Text style={styles.centerText}>
            Scan the code in order to continue login
          </Text>
        </View>
      }
      bottomContent={
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Scan Again</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
};

export default Scanner;
