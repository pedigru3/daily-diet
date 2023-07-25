import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;

  ${({ theme }) => css`
    margin-top: ${theme.MARGIN.DEFAULT};
    margin-bottom: ${theme.MARGIN.DEFAULT};
  `}
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BODY_M};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  margin-top: 40px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;

  border-radius: 50px;
`