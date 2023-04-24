import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const KeyboardArea = styled.KeyboardAvoidingView`
  flex: 1;
  min-height: auto;
`
export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  flex: 1;
  padding: 24px;
`

export const ArearForm = styled.View`
  background: ${({ theme }) => theme.COLORS.WHITE};
  padding-bottom: 24px;
  flex: 1;
  border-radius: 10px;
`
export const Header = styled.View`
  background: ${({ theme }) => theme.COLORS.BLUE};
  width: 100%;
  padding: 24px 37px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
export const AreaButton = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 24px;
`
