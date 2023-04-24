import { useRef, useState } from 'react'
import {
  AreaPost,
  HeaderTitle,
  Text,
  AreaButton,
  InputTitle,
  TextArea
} from './styles'
import { useAppDispatch, useAppSelector } from '@redux/hooks/useAppSelector'
import { createPost } from '@redux/thunks/postThunks'
import { Button } from '@components/Button'

export function Post() {
  const [title, setTitle] = useState('')
  const [content, setcontent] = useState('')

  const dispatch = useAppDispatch()

  const { name } = useAppSelector((state) => state.user)

  const handleCreatePost = () => {
    const newPost = {
      username: name,
      title,
      content
    }

    dispatch(createPost(newPost))
    setTitle('')
    setcontent('')
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
        value={content}
        onChangeText={setcontent}
      />

      <AreaButton>
        <Button
          title="Enter"
          onPress={handleCreatePost}
          disabled={
            !!(title.trim().length === 0 || content.trim().length === 0)
          }
          style={
            title.trim().length === 0 || content.trim().length === 0
              ? [{ opacity: 0.5 }]
              : [{ opacity: 1 }]
          }
          styleType="secondary"
        />
      </AreaButton>
    </AreaPost>
  )
}
