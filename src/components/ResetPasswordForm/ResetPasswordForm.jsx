import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from 'components/LoginForm/LoginForm.styled'
import { Button, Input, Logo, Title } from 'components/common'
import { titles } from 'constants'
import theme from 'styles/theme'
import { AppRoute, Notification } from 'enums'
import { patterns } from 'constants'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from 'components/common'
import { selectIsLoading } from 'store/auth/selectors'
import { passwordReset } from 'store/auth/operations'
import Notiflix from 'notiflix'
import { messages } from 'constants'

function ResetPasswordForm() {
  const [email, setEmail] = useState('')
  const [resetEmail, setResetEmail] = useState(false)
  const [messageEmail, setMessageEmail] = useState(false)

  const dispatch = useDispatch()
  const isLoadingWithLogIn = useSelector(selectIsLoading)
  const navigate = useNavigate()

  const resetInputs = () => {
    setEmail('')
    setResetEmail(false)
  }

  const handleSubmitSend = async () => {
    if (!isValidEmail(email)) {
      setMessageEmail(true)

      return
    }

    try {
      const response = await dispatch(
        passwordReset({
          email,
        }),
      )
      if (response.error) {
        Notiflix.Notify.failure(`${Notification.rejectedWithError} - ${response.payload}!`)

        return
      }
    } catch (error) {
      Notiflix.Notify.failure(`${Notification.catchError} - ${error.message}`)
    }

    Notiflix.Notify.success(Notification.successfullyReset)
    navigate(AppRoute.RESTORE_PASSWORD)

    resetInputs()
  }

  const isValidEmail = (email) => {
    return patterns.email.test(email)
  }

  const handleSubmitCancel = () => {
    resetInputs()

    navigate(AppRoute.HOME)
  }

  return (
    <Wrapper>
      <Logo />
      <Title text={titles.resetPassword} />
      <Input
        type="email"
        placeholder="Enter your email"
        mb="25px"
        validateMessage={messages.requiredEmail}
        setValue={(value) => setEmail(value)}
        value={email}
        setReset={(value) => setResetEmail(value)}
        reset={resetEmail}
        setMessage={(value) => setMessageEmail(value)}
        message={messageEmail}
      />
      <Button
        radius={theme.radii.medium}
        width="400"
        text="Send"
        mb="25px"
        bg={theme.colors.primary}
        color={theme.colors.white}
        border={theme.border.button}
        onClick={handleSubmitSend}
      />
      <Button
        radius={theme.radii.medium}
        width="400"
        text="Cancel"
        bg={theme.colors.white}
        color={theme.colors.textPrimary}
        border={theme.border.button}
        onClick={handleSubmitCancel}
      />
      <Loading isVisible={isLoadingWithLogIn} />
    </Wrapper>
  )
}

export default ResetPasswordForm
