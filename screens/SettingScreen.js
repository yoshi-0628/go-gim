import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper';
import { withTheme } from 'react-native-paper';
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
      // backgroundColor: colors.background,
    },
    textStyle: {
      // color: colors.text,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>NewSetting Screen</Text>
      <Switch value={isThemeDark} onValueChange={onToggleSwitch} />
    </View>
  );
}

export default withTheme(SettingScreen);