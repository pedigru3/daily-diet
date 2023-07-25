import MaskInput from "react-native-mask-input";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: start;
    
  border-radius: 20px;
  
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    padding: ${theme.MARGIN.DEFAULT};
  `}
`

export const Label = styled.Text`
  margin-top: 16px;
  margin-bottom: 6px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_S};
    color: ${theme.COLORS.GRAY_600};
  `}
`

export const Input = styled.TextInput`
  margin-bottom: 12px;

  width: 100%;
  height: 48px;
  border-radius: 6px;

  border: 1px solid ${( { theme }) => theme.COLORS.GRAY_300};
  padding: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const InputDateTime = styled(MaskInput)`
  margin-bottom: 12px;

  width: 100%;
  height: 48px;
  border-radius: 6px;

  border: 1px solid ${( { theme }) => theme.COLORS.GRAY_300};
  padding: 14px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M};
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Wrapper = styled.View`
  flex-direction: row;
  column-gap: 16px;
`

export const Div = styled.View`
  flex: 1;
`

export const ButtonWrapper = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-end;
`

