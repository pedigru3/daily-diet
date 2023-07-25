import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons"

export interface PercentStyleProps {
  type: 'GOOD' | 'BAD'
}

export const Container = styled(TouchableOpacity)<PercentStyleProps>`
  width: 100%;
  min-height: 100px;
  max-height: 100px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background-color: ${({ theme, type }) =>
   type === 'GOOD' ?
   theme.COLORS.GREEN_LIGTH :
   theme.COLORS.RED_LIGTH};
`

export const Icon = styled(Feather).attrs<PercentStyleProps>(({ theme, type }) => ({
  name: 'arrow-up-right',
  color: type === 'GOOD' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  size: 24
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`

