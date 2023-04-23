import { createSlice } from '@reduxjs/toolkit'
import { modalInitialState } from './initialState'

export const modalSlice = createSlice({
  name: 'modal',
  initialState: modalInitialState,
  reducers: {
    setModalId: (state, action) => {
      state.id = action.payload
    },
    setModalDelete: (state, action) => {
      state.isModalDelete = action.payload
    },
    setModalUpdate: (state, action) => {
      state.isModalUpdate = action.payload
    },
  },
})
