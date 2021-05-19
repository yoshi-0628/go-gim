import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import Header from '../component/Header';

const WeightScreen = () => {
  // スタイル群
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Header />
      <Text>WeightScreen</Text>
    </View>
  );
};

export default withTheme(WeightScreen);
