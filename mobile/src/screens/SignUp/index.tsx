/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { userCreate } from '@storage/user/userCreate'
import { setName } from '@actions/user'
import { Button } from '@components/Button'

import { AreaLogin, Container, Title, Text, Input, AreaButton } from './styles'

export function SignUp() {
  const [username, setUsername] = useState<string>('')

  const dispatch = useDispatch()

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
        <AreaButton>
          <Button
            title="Enter"
            onPress={handleSubmit}
            style={
              username.trim().length === 0
                ? [{ opacity: 0.5 }]
                : [{ opacity: 1 }]
            }
            disabled={username.trim().length === 0}
            styleType="quinary"
          />
        </AreaButton>
      </AreaLogin>
    </Container>
  )
}
