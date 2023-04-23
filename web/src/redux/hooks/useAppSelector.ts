import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { RootState } from '../store'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
