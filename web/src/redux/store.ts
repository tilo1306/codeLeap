import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './reducers/userReducer/slice'
import { postSlice } from './reducers/postsReducer/slice'
import { modalSlice } from './reducers/modalReducer/slice'
export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    posts: postSlice.reducer,
    modal: modalSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
