import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from 'components/LoginForm/LoginForm.styled'
import { Button, Input, Logo, Title } from 'components/common'
import { titles } from 'constants'
import theme from 'styles/theme'
import { AppRoute } from 'enums'
import { patterns } from 'constants'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from 'components/common'
import { selectIsLoading } from 'store/auth/selectors'
import { passwordSet } from 'store/auth/operations'
import Notiflix from 'notiflix'
import { messages } from 'constants'

function SetPasswordForm() {
  const [passwordFirst, setPasswordFirst] = useState('')
  const [passwordSecond, setPasswordSecond] = useState('')
  const [resetPasswordFirst, setResetPasswordFirst] = useState(false)
  const [resetPasswordSecond, setResetPasswordSecond] = useState(false)
  const [messagePasswordFirst, setMessagePasswordFirst] = useState(false)
  const [messagePasswordSecond, setMessagePasswordSecond] = useState(false)

  const dispatch = useDispatch()
  const isLoadingWithLogIn = useSelector(selectIsLoading)
  const navigate = useNavigate()

  const resetInputs = () => {
    setPasswordSecond('')
    setPasswordFirst('')
    setResetPasswordSecond(false)
    setResetPasswordFirst(false)
  }

  const handleSubmit = async () => {
    if (!isValidPasswordSecond(passwordSecond)) {
      setMessagePasswordSecond(true)

      return
    } else if (!isValidPasswordFirst(passwordFirst)) {
      setMessagePasswordFirst(true)

      return
    }

    try {
      const response = await dispatch(
        passwordSet({ password: passwordFirst, password_confirm: passwordSecond }),
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

    Notiflix.Notify.success(Notification.successfullyRestore)
    navigate(AppRoute.HOME)

    resetInputs()
  }

  const isValidPasswordSecond = (passwordSecond) => {
    return patterns.email.test(passwordSecond)
  }

  const isValidPasswordFirst = (passwordFirst) => {
    return patterns.password.test(passwordFirst)
  }

  return (
    <Wrapper>
      <Logo />
      <Title text={titles.restorePassword} />
      <Input
        type="password"
        placeholder="Password"
        mb="15px"
        label="Password"
        validateMessage={messages.requiredPassword}
        setValue={(value) => setPasswordFirst(value)}
        value={passwordFirst}
        setReset={(value) => setResetPasswordFirst(value)}
        reset={resetPasswordFirst}
        setMessage={(value) => setMessagePasswordFirst(value)}
        message={messagePasswordFirst}
      />
      <Input
        type="password"
        placeholder="Password"
        mb="15px"
        label="Confirm password"
        validateMessage={messages.requiredPassword}
        setValue={(value) => setPasswordSecond(value)}
        value={passwordSecond}
        setReset={(value) => setResetPasswordSecond(value)}
        reset={resetPasswordSecond}
        setMessage={(value) => setMessagePasswordSecond(value)}
        message={messagePasswordSecond}
      />

      <Button
        radius={theme.radii.medium}
        width="400"
        text="Reset Password"
        bg={theme.colors.primary}
        color={theme.colors.white}
        border={theme.border.button}
        onClick={handleSubmit}
      />
      <Loading isVisible={isLoadingWithLogIn} />
    </Wrapper>
  )
}

export default SetPasswordForm
