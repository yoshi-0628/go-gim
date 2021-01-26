import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Index from './src/Index';
import { Provider as PaperProvider } from 'react-native-paper';


export default function Main() {
  return (
    <PaperProvider>
      <Index />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});