import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
    
  border-radius: 20px;
  
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    padding: ${theme.MARGIN.DEFAULT};
  `}
`

export const Title = styled.Text`
  margin-bottom: 16px;
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_S};
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700}
  `}
`

export const DefaultBox = styled.View`
  width: 100%;

  padding: 16px;
  margin-top: 12px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const BoxWrapper = styled.View`
  flex-direction: row;
  column-gap: 12px;
`

export const GoodBox = styled.View`
  flex: 1;

  padding: 16px;
  margin-top: 16px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGTH};
`

export const BadBox = styled.View`
  flex: 1;

  padding: 16px;
  margin-top: 16px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.RED_LIGTH};
`