/* eslint-disable no-useless-catch */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER } from '@storage/storageConfig'
import { userGet } from './userGet'

export async function userCreate(user: string) {
  try {
    const storageUser = await userGet()

    const storage = JSON.stringify(storageUser.length === 0 ? user : storageUser)
    await AsyncStorage.setItem(USER, storage)
  } catch (error) {
    throw error
  }
}
