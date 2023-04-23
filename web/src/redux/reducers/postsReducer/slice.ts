import {
  createPost,
  deletePost,
  getAllPost,
  paginationPost,
  updatePost,
} from '../../thunks/postThunks'
import { createSlice } from '@reduxjs/toolkit'
import { postInitialState } from './initialState'

export const postSlice = createSlice({
  name: 'post',
  initialState: postInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllPost.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(getAllPost.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(getAllPost.rejected, (state, action) => {
      console.log('reject')
    })
    builder.addCase(paginationPost.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(paginationPost.rejected, (state, action) => {
      console.log('reject')
    })
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(createPost.rejected, (state, action) => {
      console.log('reject')
    })
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(updatePost.rejected, (state, action) => {
      console.log('reject')
    })
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(deletePost.rejected, (state, action) => {
      console.log('reject')
    })
  },
})
