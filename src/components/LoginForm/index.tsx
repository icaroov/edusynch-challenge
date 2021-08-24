import { useState } from 'react'

import Button from 'components/Button'
import Input from 'components/Input'

import * as Styled from './styles'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>Get Started</Styled.Title>
        <Styled.Subtitle>Just Login</Styled.Subtitle>
      </Styled.Header>

      <Styled.Form>
        <Input
          label="Username"
          name="Username"
          value={username}
          setValue={setUsername}
        />

        <Input
          label="Password"
          name="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />
      </Styled.Form>

      <Button>Login</Button>
    </Styled.Container>
  )
}

export default LoginForm
