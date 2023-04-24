import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  flex: 1;
  padding: 30px;
  justify-content: center;
  align-items: center;
`

export const AreaLogin = styled.View`
  background: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: auto;
  border: 1px solid #cccccc;
  border-radius: 16px;
  margin: 24px;
  padding: 24px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  margin: 24px 0 8px 0;
`

export const Input = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.DARKGRAY1};
  border-radius: 8px;
  height: 32px;
  padding: 8px;
  width: 100%;
`
export const AreaButton = styled.View`
  display: flex;
  align-items: flex-end;
  margin-top: 16px;
  width: 100%;
`
