import { useEffect, useRef } from 'react'
import { StyleSheet, Animated } from 'react-native'
import { useDispatch } from 'react-redux'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import { useNavigation } from '@react-navigation/native'
import { userGet } from '@storage/user/userGet'
import { setName } from '@actions/user'
import Logo from '@assets/Logo.png'
import { Container, Image } from './styles'

export function Load() {
  useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  const dispatch = useDispatch()

  const { navigate } = useNavigation()

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

  async function login() {
    try {
      const username = await userGet()

      if (username === '') {
        navigate('signup')
      } else {
        dispatch(setName(username))
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
      await login()
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
