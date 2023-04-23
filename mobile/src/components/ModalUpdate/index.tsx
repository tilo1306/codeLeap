import { Alert } from 'react-native'
import {
  AreaButton,
  Container,
  Title,
  AreaPopUp,
  AreaButtomCancel,
  ButtonTextCancel,
  AreaButtomSave,
  ButtonTextSave,
  ModalUpdateArea,
  InputTitle,
  Text,
  TextArea
} from './style'
import { useState } from 'react'

interface Props {
  activeModal: boolean
  cancelModelClosed: () => void
  updatePost: (title: string, content: string) => void
}

export function ModalUpdate({
  activeModal,
  cancelModelClosed,
  updatePost
}: Props) {
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')

  const handleCancelUpdate = () => {
    cancelModelClosed()
    setPost('')
    setTitle('')
  }

  const handleUpdatePost = () => {
    updatePost(title, post)
    setPost('')
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
    <ModalUpdateArea animationType="slide" transparent visible={activeModal}>
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
            value={post}
            onChangeText={setPost}
          />
          <AreaButton>
            <AreaButtomCancel onPress={handleCancelUpdate}>
              <ButtonTextCancel>Cancel</ButtonTextCancel>
            </AreaButtomCancel>
            <AreaButtomSave
              onPress={handlePostUpdate}
              disabled={title.trim().length === 0 || post.trim().length === 0}
              style={
                title.trim().length === 0 || post.trim().length === 0
                  ? [{ opacity: 0.5 }]
                  : [{ opacity: 1 }]
              }
            >
              <ButtonTextSave>Save</ButtonTextSave>
            </AreaButtomSave>
          </AreaButton>
        </AreaPopUp>
      </Container>
    </ModalUpdateArea>
  )
}
