import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { withTheme, Text } from 'react-native-paper';

const HomeScreen = () => {
  // スタイル群
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Text>NewHome Screen</Text>
    </View>
  );
};

export default withTheme(HomeScreen);
