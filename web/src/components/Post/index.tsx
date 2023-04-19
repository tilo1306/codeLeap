import { useState } from 'react'
import {
  AreaPost,
  HeaderTitle,
  Text,
  AreaButton,
  Buttom,
  Input,
  TextArea,
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
        <Buttom
          disabled={!!(title.trim().length === 0 || post.trim().length === 0)}
          type="submit"
        >
          Enter
        </Buttom>
      </AreaButton>
    </AreaPost>
  )
}
