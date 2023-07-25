import styled, { css } from "styled-components/native";

export type StatusDietProps = {
type: 'GOOD' | 'BAD'
}

export const Container = styled.View`
  flex: 1;
  align-items: start;
    
  border-radius: 20px;
  
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    padding: ${theme.MARGIN.DEFAULT};
  `}
`

export const Title = styled.Text`
  margin-top: 16px;
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Description = styled.Text`
  margin-top: 6px
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `}
`

export const DateTitle = styled.Text`
  margin-top: 32px
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const StatusContainer = styled.View`
  height: 34px;
  padding: 16px;
  border-radius: 1000px;

  margin-top: 32px;

  flex-direction: row;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.GRAY_200}
`

export const Icon = styled.View<StatusDietProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  margin-right: 6px;

  background-color: ${({ theme, type }) => type === 'GOOD' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
`

export const StatusText = styled.Text`
  height: 20px;
  ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.BODY_S};
      font-family: ${theme.FONT_FAMILY.REGULAR};
      color: ${theme.COLORS.GRAY_700};
    `}
`

export const Space = styled.View`
  flex: 1;
`