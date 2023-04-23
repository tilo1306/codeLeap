/* eslint-disable @typescript-eslint/no-misused-promises */
import { useDispatch } from 'react-redux'
import {
  AreaLogin,
  Container,
  Title,
  Text,
  Input,
  Div,
  Buttom,
  ButtonText
} from './style'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { setName } from '@redux/reducers/userReducer'
import { userCreate } from '@storage/user/userCreate'

export function SignUp() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState<string>('')

  const { navigate } = useNavigation()

  const handleSubmit = async () => {
    await userCreate(username)
    dispatch(setName(username))

    navigate('mainscreen')
  }

  return (
    <Container>
      <AreaLogin>
        <Title>Welcome to CodeLeap network!</Title>
        <Text>Please enter your username</Text>
        <Input
          maxLength={50}
          value={username}
          onChangeText={setUsername}
          returnKeyType="send"
        />
        <Div>
          <Buttom
            onPress={handleSubmit}
            style={
              username.trim().length === 0
                ? [{ opacity: 0.5 }]
                : [{ opacity: 1 }]
            }
            disabled={username.trim().length === 0}
          >
            <ButtonText>Enter</ButtonText>
          </Buttom>
        </Div>
      </AreaLogin>
    </Container>
  )
}
