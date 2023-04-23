import { useState } from 'react'
import {
  AreaButton,
  Text,
  Container,
  AreaModal,
  HeaderTitle,
  TextArea,
  Input,
} from './styles'
import { useAppDispatch, useAppSelector } from '@redux/hooks/useAppSelector'
import { setModalUpdate } from '@actions/modal'
import { updatePost } from '@redux/thunks/postThunks'
import { Button } from '../Button'

export function ModalUpdate() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useAppDispatch()

  const { id } = useAppSelector((state) => state.modal)

  const handleUpdatePost = () => {
    const update = {
      id,
      title,
      content,
    }
    dispatch(updatePost(update))
    dispatch(setModalUpdate(false))
  }

  return (
    <Container>
      <AreaModal
        onSubmit={(e) => {
          e.preventDefault()
          handleUpdatePost()
        }}
      >
        <HeaderTitle>Edit item</HeaderTitle>
        <Text>Title</Text>
        <Input
          required
          placeholder="Hello world"
          value={title}
          maxLength={50}
          onChange={({ target }) => setTitle(target.value)}
        />

        <Text>Content here</Text>
        <TextArea
          required
          placeholder="Content here"
          maxLength={250}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
        <AreaButton>
          <Button type="button" onClick={() => dispatch(setModalUpdate(false))}>
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={!!(title.length === 0 || content.length === 0)}
            styleType="secondary"
          >
            Save
          </Button>
        </AreaButton>
      </AreaModal>
    </Container>
  )
}
