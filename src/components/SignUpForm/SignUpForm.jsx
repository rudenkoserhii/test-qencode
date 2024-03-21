import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper, Line } from 'components/LoginForm/LoginForm.styled'
import { Button, Input, Logo, Socials, Title } from 'components/common'
import { titles } from 'constants'
import theme from 'styles/theme'
import { AppRoute } from 'enums'
import { patterns } from 'constants'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from 'components/common'
import { selectIsLoading } from 'store/auth/selectors'
import { logIn } from 'store/auth/operations'
import Notiflix from 'notiflix'
import { messages } from 'constants'

function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [resetEmail, setResetEmail] = useState(false)
  const [resetPassword, setResetPassword] = useState(false)
  const [messageEmail, setMessageEmail] = useState(false)
  const [messagePassword, setMessagePassword] = useState(false)

  const dispatch = useDispatch()
  const isLoadingWithLogIn = useSelector(selectIsLoading)
  const navigate = useNavigate()

  const resetInputs = () => {
    setEmail('')
    setPassword('')
    setResetEmail(false)
    setResetPassword(false)
  }

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      setMessageEmail(true)

      return
    } else if (!isValidPassword(password)) {
      setMessagePassword(true)

      return
    }

    try {
      const response = await dispatch(
        logIn({
          email,
          password,
        }),
      )
      if (response.error) {
        Notiflix.Notify.failure(`${Notification.rejectedWithError} - ${response.payload}!`)

        return
      }
    } catch (error) {
      Notiflix.Notify.failure(`${Notification.catchError} - ${error.message}`)
    }

    Notiflix.Notify.init({
      success: {
        background: theme.colors.linkText,
      },
    })

    Notiflix.Notify.success(Notification.successfullySignUped)
    navigate(AppRoute.SUCCESS)

    resetInputs()
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
      <Title text={titles.signup} />
      <Socials />
      <Line>or</Line>
      <Input
        type="email"
        placeholder="Your email"
        mb="25px"
        validateMessage={messages.requiredEmail}
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
        mb="25px"
        validateMessage={messages.requiredPassword}
        setValue={(value) => setPassword(value)}
        value={password}
        setReset={(value) => setResetPassword(value)}
        reset={resetPassword}
        setMessage={(value) => setMessagePassword(value)}
        message={messagePassword}
      />
      <Button
        radius={theme.radii.medium}
        width="400"
        text="Sign up to Qencode"
        bg={theme.colors.primary}
        color={theme.colors.white}
        onClick={handleSubmit}
      />
      <Loading isVisible={isLoadingWithLogIn} />
    </Wrapper>
  )
}

export default SignUpForm
