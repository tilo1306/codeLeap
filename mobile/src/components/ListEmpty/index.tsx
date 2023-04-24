import { ActivityIndicator } from 'react-native'
import { Container } from './styles'

export function ListEmpty() {
  return (
    <Container>
      <ActivityIndicator size="large" color="#0000ff" />
    </Container>
  )
}
