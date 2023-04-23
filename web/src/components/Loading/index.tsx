import ReactLoading from 'react-loading'
import { Container } from './styles'

export function Loading() {
  return (
    <Container>
      <ReactLoading type={'spinningBubbles'} color="blue" />
    </Container>
  )
}
