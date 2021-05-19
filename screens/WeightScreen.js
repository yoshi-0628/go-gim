import * as React from 'react';
import { View } from 'react-native';
import { withTheme, Text } from 'react-native-paper';

function WeightScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>WeightScreen</Text>
    </View>
  );
}

export default withTheme(WeightScreen);
