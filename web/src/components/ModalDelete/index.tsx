import { useAppDispatch, useAppSelector } from '@redux/hooks/useAppSelector'

import { setModalDelete } from '@actions/modal'
import { AreaButton, Container, Title, AreaMessage } from './styles'
import { deletePost } from '@redux/thunks/postThunks'
import { Button } from '../Button'

export function ModalDelete() {
  const dispatch = useAppDispatch()

  const { id } = useAppSelector((state) => state.modal)

  const handleDelete = () => {
    dispatch(deletePost(id))
    dispatch(setModalDelete(false))
  }
  return (
    <Container>
      <AreaMessage>
        <Title>Are you sure you want to delete this item?</Title>
        <AreaButton>
          <Button type="button" onClick={() => dispatch(setModalDelete(false))}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleDelete} styleType="tertiary">
            Delete
          </Button>
        </AreaButton>
      </AreaMessage>
    </Container>
  )
}
