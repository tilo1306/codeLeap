import { useState } from 'react'
import { AreaLogin, Container, Title, Text, Input, Buttom, Div } from './styles'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setName } from '../../redux/reducers/userReducer'

export function SignUp() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState<string>('')

  const navigate = useNavigate()

  const handleSubmit = () => {
    dispatch(setName(username))
    localStorage.setItem('username', username)

    navigate('/mainscreen')
  }

  return (
    <Container>
      <AreaLogin
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <Title>Welcome to CodeLeap network!</Title>
        <Text>Please enter your username</Text>
        <Input
          required
          placeholder="John doe"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <Div>
          <Buttom disabled={username.length === 0}>Enter</Buttom>
        </Div>
      </AreaLogin>
    </Container>
  )
}
