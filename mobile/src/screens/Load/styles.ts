import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: center;
`

export const Image = styled.Image`
  width: 100%;
`
