import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons"

type Props = {
  type: 'DEFAULT' | 'GOOD' | 'BAD'
}

export const Container = styled(SafeAreaView)<Props>`
  width: 100%;
  justify-content: center;

  flex-direction: row;

  ${({ theme, type }) => css`
    background-color: ${type === 'DEFAULT' ? theme.COLORS.GRAY_300 : type === 'GOOD' ? theme.COLORS.GREEN_LIGTH : theme.COLORS.RED_LIGTH};
    padding-top: 18px;
  `}
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_S};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Button = styled(TouchableOpacity)`
  position: absolute;
  top: 32px;
  left: 32px;

  margin-top: 32px;
  width: 24px;
  height: 24px;
`

export const Icon = styled(Feather).attrs<Props>(({ theme, type }) => ({
  name: 'arrow-left',
  size: 24,
  color: type === 'DEFAULT' ? theme.COLORS.GRAY_600 : type === 'GOOD' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``