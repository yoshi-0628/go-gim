import * as React from 'react';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-paper';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>NewHome Screen</Text>
    </View>
  );
}

export default withTheme(HomeScreen);
