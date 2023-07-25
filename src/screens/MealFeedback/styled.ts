import styled, { css } from "styled-components/native";

type Props = {
  type: 'GOOD' | 'BAD'
}

export const  Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text<Props>`
${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.TITLE_M};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${type === 'GOOD' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}
`

export const Description = styled.Text`
  width: 80%;
  margin-top: 5px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
    text-align: center;
  `}
`

export const Bold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
    text-align: center;
  `}
`