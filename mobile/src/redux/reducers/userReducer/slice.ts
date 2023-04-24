import { createSlice } from '@reduxjs/toolkit'
import { userInitialState } from './initialState'

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
  },
})
