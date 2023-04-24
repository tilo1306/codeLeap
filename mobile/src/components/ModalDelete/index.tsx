import { Alert } from 'react-native'
import { useAppDispatch, useAppSelector } from '@redux/hooks/useAppSelector'
import { deletePost } from '@redux/thunks/postThunks'
import { setModalDelete } from '@actions/modal'
import {
  AreaButton,
  Container,
  Title,
  ModalDeleteArea,
  AreaPopUp
} from './styles'
import { Button } from '@components/Button'

export function ModalDelete() {
  const dispatch = useAppDispatch()

  const { id, isModalDelete } = useAppSelector((state) => state.modal)

  const handleDelete = () => {
    dispatch(deletePost(id))
    dispatch(setModalDelete(false))
  }

  function handlePostRemove() {
    Alert.alert('Remover', `Really want to remove post ?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => handleDelete()
      }
    ])
  }

  return (
    <ModalDeleteArea animationType="slide" transparent visible={isModalDelete}>
      <Container>
        <AreaPopUp>
          <Title>Are you sure you want to delete this item?</Title>
          <AreaButton>
            <Button
              title="Cancel"
              styleType="tertiary"
              onPress={() => dispatch(setModalDelete(false))}
            />
            <Button
              title="Delete"
              styleType="quaternary"
              onPress={handlePostRemove}
            />
          </AreaButton>
        </AreaPopUp>
      </Container>
    </ModalDeleteArea>
  )
}
