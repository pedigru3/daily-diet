import { NavigationContainer } from '@react-navigation/native'
import { View } from "react-native";
import { useTheme } from "styled-components";
import { AppRoutes } from "./app.routes";

export function Routes(){
  const { COLORS } = useTheme()

  return (
    <View style={{backgroundColor: COLORS.GRAY_700, flex: 1}}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}