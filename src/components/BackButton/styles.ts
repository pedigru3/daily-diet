import styled from "styled-components/native"
import { Feather } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native"

export type BackButtonStyleProps = {
  type: 'DEFAULT' | 'GOOD' | 'BAD'
}

export const Container = styled(TouchableOpacity)`
  margin-top: 32px;
  width: 24px;
  height: 24px;
`

export const Icon = styled(Feather).attrs<BackButtonStyleProps>(({ theme, type }) => ({
  name: 'arrow-left',
  size: 24,
  color: type === 'DEFAULT' ? theme.COLORS.GRAY_600 : type === 'GOOD' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``