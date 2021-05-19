import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Switch, withTheme, Text } from 'react-native-paper';
import { PreferencesContext } from '../src/PreferencesContext';

function SettingScreen() {
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);

  const onToggleSwitch = () => {
    toggleTheme(!isThemeDark);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Text>theme</Text>
      <Switch value={isThemeDark} onValueChange={onToggleSwitch} />
    </View>
  );
}

export default withTheme(SettingScreen);
