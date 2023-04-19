import {
  AreaButton,
  ButtomCancel,
  ButtomDelete,
  Container,
  Title,
  AreaMessage,
} from './style'

interface Props {
  cancelModelClosed: () => void
  deletePost: () => void
}

export function ModalDelete({ cancelModelClosed, deletePost }: Props) {
  return (
    <Container>
      <AreaMessage>
        <Title>Are you sure you want to delete this item?</Title>
        <AreaButton>
          <ButtomCancel onClick={cancelModelClosed}>Cancel</ButtomCancel>
          <ButtomDelete onClick={deletePost}>Delete</ButtomDelete>
        </AreaButton>
      </AreaMessage>
    </Container>
  )
}
