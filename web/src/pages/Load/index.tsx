/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import { Container, Image } from './styles'
import Logo from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@redux/hooks/useAppSelector'
import { setName } from '@actions/user'

export function Load() {
  const dispatch = useAppDispatch()

  const user = useAppSelector((state) => state.user)
  const localStorageUsername = localStorage.getItem('username')

  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      if (user.name === '' && localStorageUsername === null) {
        navigate('/signup')
      } else {
        dispatch(setName(localStorageUsername))
        navigate('/mainscreen')
      }
    }, 4000)
  }, [])

  return (
    <Container>
      <Image src={Logo} />
    </Container>
  )
}
