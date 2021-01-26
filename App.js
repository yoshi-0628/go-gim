import React from 'react';
import Index from './src/Index';
import { Provider as PaperProvider } from 'react-native-paper';


export default function Main() {
  return (
    <PaperProvider>
      <Index />
    </PaperProvider>
  );
}
