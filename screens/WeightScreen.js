import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import Header from '../component/Header';
import LineChart from '../component/LineChart';

const WeightScreen = () => {
  // スタイル群
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topArea: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
    },
    bottomArea: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      backgroundColor: 'black',
      flexDirection: 'row',
    },
    bottomLeft: {
      alignItems: 'flex-start',
      width: '30%',
      backgroundColor: 'red',
    },
    bottomCenter: {
      alignItems: 'center',
      width: '40%',
      backgroundColor: 'blue',
    },
    bottomRight: {
      alignItems: 'flex-end',
      width: '30%',
      backgroundColor: 'green',
    },
  });

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.topArea}>
        <Text>現在</Text>
        <Text>67kg</Text>
      </View>
      <LineChart />
      <View style={styles.bottomArea}>
        <View style={styles.bottomLeft}>
          <Text>現在</Text>
          <Text>67kg</Text>
        </View>
        <View style={styles.bottomCenter}>
          <Text>現在</Text>
          <Text>67kg</Text>
        </View>
        <View style={styles.bottomRight}>
          <Text>現在</Text>
          <Text>67kg</Text>
        </View>

      </View>
    </View>
  );
};

export default withTheme(WeightScreen);
