import { useRef, useState } from 'react'
import {
  AreaPost,
  HeaderTitle,
  Text,
  AreaButton,
  InputTitle,
  TextArea,
  ButtonText,
  Button
} from './style'

interface Props {
  createPost: (title: string, content: string) => void
}

export function Post({ createPost }: Props) {
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')

  const handleCreatePost = () => {
    createPost(title, post)
    setTitle('')
    setPost('')
  }
  return (
    <AreaPost>
      <HeaderTitle>What’s on your mind?</HeaderTitle>
      <Text>Title</Text>
      <InputTitle
        placeholder="Hello world"
        value={title}
        maxLength={30}
        onChangeText={setTitle}
      />

      <Text>Content here</Text>
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
        <Button onPress={handleCreatePost}>
          <ButtonText onPress={handleCreatePost}>Enter</ButtonText>
        </Button>
      </AreaButton>
    </AreaPost>
  )
}
