import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons"

type Props = {
  justBorder: boolean
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  
  min-height: 50px;
  max-height: 50px;

  border-radius: 6px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, justBorder }) => justBorder ? theme.COLORS.WHITE : theme.COLORS.GRAY_600};
  border: 1px solid ${({ theme, justBorder }) => justBorder ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};

  margin-top: 6px;
`
export const Title = styled.Text<Props>`
  ${({ theme, justBorder }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_S};
    color: ${ justBorder ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE}
  `}
`
export const Icon = styled(Feather).attrs<Props>(props => ({
  color: props.justBorder ? props.theme.COLORS.GRAY_600 : props.theme.COLORS.WHITE,
  size: 20
}))`
  margin-right: 6px
`