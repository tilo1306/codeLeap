import { useState } from 'react'
import {
  AreaPost,
  HeaderTitle,
  Text,
  AreaButton,
  Input,
  TextArea,
} from './styles'
import { useAppDispatch, useAppSelector } from '@redux/hooks/useAppSelector'
import { createPost } from '@redux/thunks/postThunks'
import { Button } from '../Button'

export function Post() {
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')

  const { name } = useAppSelector((state) => state.user)

  const dispatch = useAppDispatch()

  const handleCreatePost = () => {
    const newPost = {
      username: name,
      title,
      content: post,
    }

    dispatch(createPost(newPost))
    setTitle('')
    setPost('')
  }
  return (
    <AreaPost
      onSubmit={(e) => {
        e.preventDefault()
        handleCreatePost()
      }}
    >
      <HeaderTitle>What’s on your mind?</HeaderTitle>
      <Text>Title</Text>
      <Input
        required
        placeholder="Hello world"
        value={title}
        maxLength={30}
        onChange={({ target }) => setTitle(target.value)}
      />

      <Text>Content here</Text>
      <TextArea
        required
        placeholder="Content here"
        maxLength={250}
        value={post}
        onChange={({ target }) => setPost(target.value)}
      />
      <AreaButton>
        <Button
          disabled={!!(title.trim().length === 0 || post.trim().length === 0)}
          type="submit"
          styleType="quaternary"
        >
          Enter
        </Button>
      </AreaButton>
    </AreaPost>
  )
}
