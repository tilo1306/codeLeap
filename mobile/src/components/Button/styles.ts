import { Text, TouchableOpacity } from 'react-native'
import { StyledComponent } from 'styled-components'
import styled, { DefaultTheme } from 'styled-components/native'

export interface IButtonStyles {
  [key: string]: StyledComponent<
    typeof TouchableOpacity,
    DefaultTheme,
    {},
    never
  >
}

export interface ITextStyles {
  [key: string]: StyledComponent<typeof Text, any, {}, never>
}

export const PrimaryStyles = styled.TouchableOpacity`
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BLUE};
  border: none;
  border-radius: 8px;
  width: 111px;
  padding: 7px;
`

export const PrimaryStylesText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const SecondaryStyles = styled.TouchableOpacity`
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BLUE};
  border: none;
  border-radius: 8px;
  width: 120px;
  padding: 7px;
`
export const SecondaryStylesText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const TertiaryStyles = styled.TouchableOpacity`
  align-items: center;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY60};
  border-radius: 8px;
  margin-right: 16px;
  padding: 7px;
  width: 100px;
`
export const TertiaryStylesText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const QuaternaryStyles = styled.TouchableOpacity`
  background: ${({ theme }) => theme.COLORS.RED};
  border: none;
  border-radius: 8px;
  width: 100px;
  align-items: center;
  padding: 7px;
`

export const QuaternaryStylesText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
export const QuinaryStyles = styled.TouchableOpacity`
  align-items: center;
  background: ${({ theme }) => theme.COLORS.GREEN};
  border: none;
  border-radius: 8px;
  width: 100px;
  padding: 7px;
`
export const QuinaryStylesText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const SenaryStyles = styled.TouchableOpacity`
  align-items: center;
  background: ${({ theme }) => theme.COLORS.BLUE};
  border: none;
  border-radius: 8px;
  width: 70px;
  padding: 7px;
`
export const SenaryStylesText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
