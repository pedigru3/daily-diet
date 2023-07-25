import { ThemeProvider } from 'styled-components/native'
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans'

import theme from './src/theme';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoad] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='transparedent'
        translucent
        />
      {fontsLoad ? <Routes/> : <ActivityIndicator/>}
    </ThemeProvider>
  );
}

