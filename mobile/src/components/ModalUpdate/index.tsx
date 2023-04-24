import { Alert } from 'react-native'
import {
  AreaButton,
  Container,
  Title,
  AreaPopUp,
  ModalUpdateArea,
  InputTitle,
  Text,
  TextArea
} from './styles'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@redux/hooks/useAppSelector'
import { updatePost } from '@redux/thunks/postThunks'
import { setModalUpdate } from '@actions/modal'
import { Button } from '@components/Button'

export function ModalUpdate() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useAppDispatch()

  const { id, isModalUpdate } = useAppSelector((state) => state.modal)

  const handleCancelUpdate = () => {
    dispatch(setModalUpdate(false))
    setContent('')
    setTitle('')
  }

  const handleUpdatePost = () => {
    const update = {
      id,
      title,
      content
    }
    dispatch(updatePost(update))
    dispatch(setModalUpdate(false))
    setContent('')
    setTitle('')
  }
  const handlePostUpdate = () => {
    Alert.alert('Update', `Really need to update post ?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => handleUpdatePost()
      }
    ])
  }

  return (
    <ModalUpdateArea animationType="slide" transparent visible={isModalUpdate}>
      <Container>
        <AreaPopUp>
          <Title>Edit item</Title>
          <Text>Title</Text>
          <InputTitle
            placeholder="Hello world"
            value={title}
            maxLength={30}
            onChangeText={setTitle}
          />

          <Text>Content</Text>
          <TextArea
            textAlignVertical="top"
            multiline={true}
            placeholder="Content here"
            numberOfLines={3}
            maxLength={250}
            value={content}
            onChangeText={setContent}
          />
          <AreaButton>
            <Button
              styleType="tertiary"
              title="Cancel"
              onPress={handleCancelUpdate}
            />
            <Button
              title="Save"
              styleType="quaternary"
              disabled={
                title.trim().length === 0 || content.trim().length === 0
              }
              style={
                title.trim().length === 0 || content.trim().length === 0
                  ? [{ opacity: 0.5 }]
                  : [{ opacity: 1 }]
              }
              onPress={handlePostUpdate}
            />
          </AreaButton>
        </AreaPopUp>
      </Container>
    </ModalUpdateArea>
  )
}
