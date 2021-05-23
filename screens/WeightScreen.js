import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { withTheme, Text, FAB } from 'react-native-paper';
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
      flexDirection: 'row',
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.topArea}>
        <Text>現在</Text>
        <Text>67kg</Text>
      </View>
      <LineChart />
      <View>
        <FAB
          style={styles.fab}
          icon="plus"
          onPress={() => console.log('Pressed')}
        />
      </View>
    </ScrollView>
  );
};

export default withTheme(WeightScreen);
