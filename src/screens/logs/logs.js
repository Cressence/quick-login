import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {userLogs} from './../../apiHandler/userLogs';

import styles from './logs.style';

const Logs = ({navigation, route}) => {
  userLogs.push({
    id: route.params.user.id,
    name: route.params.user.name,
    position: route.params.user.position,
    date: route.params.user.date,
    checkin: true,
  });

  const checkout = () => {
    userLogs.push({
      id: route.params.user.id,
      name: route.params.user.name,
      position: route.params.user.position,
      date: new Date().toLocaleString(),
      checkin: false,
    });
    navigation.navigate('Main');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.heading}>Employee Log</Text>
        <TouchableOpacity style={styles.checkOutBtn} onPress={checkout}>
          <Text>Check-out</Text>
        </TouchableOpacity>
      </View>

      {userLogs.map((logs, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.textValue}>
            <Text style={styles.bold}>ID:</Text> <Text>{logs.id}</Text>
          </Text>
          <Text style={styles.textValue}>
            <Text style={styles.bold}>Name:</Text> <Text>{logs.name}</Text>
          </Text>
          <Text style={styles.textValue}>
            <Text style={styles.bold}>Position:</Text>{' '}
            <Text>{logs.position}</Text>
          </Text>
          <Text style={styles.textValue}>
            {logs.checkin ? (
              <Text style={styles.greenText}>Check-in: </Text>
            ) : (
              <Text style={styles.redText}>Check-out: </Text>
            )}
            <Text>{logs.date}</Text>
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Logs;
