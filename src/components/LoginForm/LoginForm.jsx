import React, { useState } from 'react'
// import authApi from 'api/authApi'
import { Wrapper, Line, Helper, Span, LinkStyled } from 'components/LoginForm/LoginForm.styled'
import { Button, Input, Logo, Socials, Title } from 'components/common'
import { titles } from 'constants'
import theme from 'styles/theme'
import { AppRoute } from 'enums'
import { patterns } from 'constants'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [resetEmail, setResetEmail] = useState(false)
  const [resetPassword, setResetPassword] = useState(false)

  // const [resetValues, ]
  const [messageEmail, setMessageEmail] = useState(false)
  const [messagePassword, setMessagePassword] = useState(false)

  const handleSubmit = async () => {
    console.log('click')
    if (!isValidEmail(email)) {
      console.log('we')
      setMessageEmail(true)
    } else if (!isValidPassword(password)) {
      console.log('wp')

      setMessagePassword(true)
    } else {
      console.log('Submit search - ', { email, password })
      setEmail('')
      setPassword('')
      setResetEmail(false)
      setResetPassword(false)
    }

    try {
      // const userData = await authApi.login(email, password)
      // console.log('Login successful:', userData)
      // // Handle successful login (e.g., update state, redirect user)
    } catch (error) {
      // console.error('Login failed:', error.message)
      // Handle login failure (e.g., display error message)
    }
  }

  const isValidEmail = (email) => {
    return patterns.email.test(email)
  }

  const isValidPassword = (password) => {
    return patterns.password.test(password)
  }

  return (
    <Wrapper>
      <Logo />
      <Title text={titles.login} />
      <Socials />
      <Line>or</Line>
      <Input
        type="email"
        placeholder="Work email"
        mb="25px"
        validateMessage={'wrong email'}
        setValue={(value) => setEmail(value)}
        value={email}
        setReset={(value) => setResetEmail(value)}
        reset={resetEmail}
        setMessage={(value) => setMessageEmail(value)}
        message={messageEmail}
      />
      <Input
        type="password"
        placeholder="Password"
        mb="15px"
        validateMessage={'wrong password'}
        setValue={(value) => setPassword(value)}
        value={password}
        setReset={(value) => setResetPassword(value)}
        reset={resetPassword}
        setMessage={(value) => setMessagePassword(value)}
        message={messagePassword}
      />
      <LinkStyled data-mb="30px" to={AppRoute.RESTORE_PASSWORD_PAGE}>
        Forgot your password?
      </LinkStyled>
      <Button
        radius={theme.radii.medium}
        width="400"
        text="Log in to Qencode"
        bg={theme.colors.primary}
        color={theme.colors.white}
        onClick={handleSubmit}
      />
      <Helper>
        <Span>Is your company new to Qencode?</Span>
        <LinkStyled to={AppRoute.SIGN_UP_PAGE} data-mb="0px">
          Sign up
        </LinkStyled>
      </Helper>
    </Wrapper>
  )
}

export default LoginForm
