import axios from 'axios'

const request = axios.create({
  baseURL: 'https://dev.codeleap.co.uk/careers',
})

interface Props {
  id?: number
  username?: string
  content: string
  title: string
}

export const api = {
  allPosts: async () => {
    const response = await request.get('/')
    return response.data
  },
  createPost: async ({ username, content, title }: Props) => {
    const response = await request.post('/', {
      username,
      title,
      content,
    })
    return response.data
  },
  updatePost: async ({ id, content, title }: Props) => {
    const response = await request.patch(`/${id}/`, {
      title,
      content,
    })
    return response.data
  },
  deletePost: async (id: number) => {
    const response = await request.delete(`/${id}/`, {})
    return response.data
  },
  pagination: async (page: string) => {
    const response = await request.get(page)
    return response.data
  },
}
