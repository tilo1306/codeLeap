import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../utils/axios'

interface Props {
  id?: number
  username?: string
  content: string
  title: string
}

export const getAllPost = createAsyncThunk('getAllPost', async () => {
  return await api.allPosts()
})

export const createPost = createAsyncThunk(
  'createPost',
  async (data: Props) => {
    await api.createPost(data)
    return await api.allPosts()
  },
)

export const updatePost = createAsyncThunk(
  'updatePost',
  async (data: Props) => {
    await api.updatePost(data)
    return await api.allPosts()
  },
)

export const deletePost = createAsyncThunk('deletePost', async (id: number) => {
  await api.deletePost(id)
  return await api.allPosts()
})

export const paginationPost = createAsyncThunk(
  'paginationPost',
  async (page: string) => {
    return await api.pagination(page)
  },
)
