import { useEffect, useRef } from 'react'
import { Container, Image } from './style'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@redux/hooks/useAppSelector'
import { useNavigation } from '@react-navigation/native'
import Logo from '@assets/Logo.png'
import { StyleSheet, Animated } from 'react-native'
import { userGet } from '@storage/user/userGet'
import { setName } from '@redux/reducers/userReducer'
import { userCreate } from '@storage/user/userCreate'

export function Load() {
  useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const user = useAppSelector((state) => state.user)
  const opacityAnimation = useRef(new Animated.Value(0.5)).current
  const opacityStyle = { opacity: opacityAnimation }

  const animateElement = () => {
    Animated.timing(opacityAnimation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true
    }).start(() => {
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true
      }).start()
    })
  }

  async function fetchUser() {
    try {
      const data = await userGet()

      if (data === '') {
        navigate('signup')
      } else {
        dispatch(setName(data))
        navigate('mainscreen')
      }
    } catch (error) {
      console.log(error)
    }
  }

  function time(millisec: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('')
      }, millisec)
    })
  }

  async function animation() {
    for (let i = 0; i < 5; ++i) {
      animateElement()
      await time(4000)
      await fetchUser()
    }
  }

  useEffect(() => {
    void animation()
  }, [])

  return (
    <Container>
      <Animated.View style={[styles.box, opacityStyle]}>
        <Image source={Logo} resizeMode="contain" />
      </Animated.View>
    </Container>
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ffff',
    width: 300,
    opacity: 0.5
  }
})
