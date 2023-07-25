import styled, { css } from "styled-components/native";

export const Container = styled.View`
  margin-top: 32px;
`

export const DateText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.TITLE_S};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
