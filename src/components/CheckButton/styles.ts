import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type IconStyleProps = {
  type: 'PRIMARY' | 'SECONDARY'
}

export type ButtonCheckStyle = IconStyleProps & {
  isChecked: boolean | null
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;

  column-gap: 16px;
`

export const Button = styled(TouchableOpacity)<ButtonCheckStyle>`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  border-radius: 6px;

  min-height: 50px;
  max-height: 50px;

  background-color: ${({theme}) =>  theme.COLORS.GRAY_200};

  ${({ theme, isChecked, type }) => isChecked && type === 'PRIMARY' && css`
    background-color: ${theme.COLORS.GREEN_LIGTH};
    border-color: ${theme.COLORS.GREEN_DARK};
    border-style: solid;
    border-width: 1px;
  `}

  ${({ theme, isChecked, type }) => isChecked && type === 'SECONDARY' && css`
    background-color: ${theme.COLORS.RED_LIGTH};
    border-color: ${theme.COLORS.RED_DARK};
    border-style: solid;
    border-width: 1px;
  `}
`

export const Icon = styled.View<IconStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  margin-right: 6px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_S};
    color: ${theme.COLORS.GRAY_600};
  `}
`