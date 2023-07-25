import styled, { css } from "styled-components/native";

export type TitleWithSubititleStyleType = {
  type: 'PRIMARY' | 'SECONDARY'
}

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text<TitleWithSubititleStyleType>`
  ${({ theme, type }) => css`
    font-size: ${type === 'PRIMARY' ? theme.FONT_SIZE.TITLE_G : theme.FONT_SIZE.TITLE_M};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
    text-align: center;
  `}
`