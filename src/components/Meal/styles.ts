import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type MealStatusStyleType = {
  type: 'GOOD' | 'BAD'
}

export const Container = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;

  flex-direction: row;

  margin-top: 6px;
  padding: 12px;
  height: 49px;

  border: 1px solid;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};

`

export const Time = styled.Text`

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_XS};
    color: ${theme.COLORS.GRAY_600}
  `}
`

export const Divider = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  height: 80%;
  
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-right-style: solid;
  border-right-width: 1px;
`

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  flex:1

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M};
    color: ${theme.COLORS.GRAY_600}
  `}
`

export const Icon = styled.View<MealStatusStyleType>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ theme, type }) => type === 'GOOD' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID}
`

