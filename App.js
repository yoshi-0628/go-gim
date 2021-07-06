import React, { useState, useCallback } from 'react';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import Index from './src/Index';
import { PreferencesContext } from './src/PreferencesContext';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
export default function Main() {
  const [isThemeDark, setIsThemeDark] = useState(false);

  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = useCallback(
    () => setIsThemeDark(!isThemeDark),
    [isThemeDark]
  );

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Index />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
