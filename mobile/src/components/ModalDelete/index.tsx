import { Alert } from 'react-native'
import {
  AreaButton,
  Container,
  Title,
  ModalDeleteArea,
  AreaPopUp,
  AreaButtomCancel,
  ButtonTextCancel,
  AreaButtomDelete,
  ButtonTextDelete
} from './style'

interface Props {
  activeModal: boolean
  cancelModelClosed: () => void
  deletePost: () => void
}

export function ModalDelete({
  activeModal,
  cancelModelClosed,
  deletePost
}: Props) {
  function handlePostRemove() {
    Alert.alert('Remover', `Really want to remove post ?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => deletePost()
      }
    ])
  }

  return (
    <ModalDeleteArea animationType="slide" transparent visible={activeModal}>
      <Container>
        <AreaPopUp>
          <Title>Are you sure you want to delete this item?</Title>
          <AreaButton>
            <AreaButtomCancel onPress={cancelModelClosed}>
              <ButtonTextCancel>Cancel</ButtonTextCancel>
            </AreaButtomCancel>
            <AreaButtomDelete onPress={handlePostRemove}>
              <ButtonTextDelete>Delete</ButtonTextDelete>
            </AreaButtomDelete>
          </AreaButton>
        </AreaPopUp>
      </Container>
    </ModalDeleteArea>
  )
}
