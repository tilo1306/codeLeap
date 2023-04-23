/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER } from '@storage/storageConfig'

export async function userGet() {
  try {
    const storage = await AsyncStorage.getItem(USER)

    const user: string = storage ? JSON.parse(storage) : ''

    return user
  } catch (error) {
    throw error
  }
}
