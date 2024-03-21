import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper, Line, Helper, Span, LinkStyled } from 'components/LoginForm/LoginForm.styled'
import { Button, Input, Logo, Socials, Title } from 'components/common'
import { titles } from 'constants'
import theme from 'styles/theme'
import { AppRoute, Notification } from 'enums'
import { patterns } from 'constants'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from 'components/common'
import { selectIsLoading } from 'store/auth/selectors'
import Notiflix from 'notiflix'
import { messages } from 'constants'
import { accessUser } from 'store/auth/operations'

function LoginByAccessIdForm() {
  const [code, setCode] = useState('')
  const [reset, setReset] = useState(false)
  const [message, setMessage] = useState(false)

  const dispatch = useDispatch()
  const isLoadingWithLogIn = useSelector(selectIsLoading)
  const navigate = useNavigate()

  const resetInputs = () => {
    setCode('')
    setReset(false)
  }

  const handleSubmit = async () => {
    if (!isValidCode(code)) {
      setMessage(true)

      return
    }

    try {
      const response = await dispatch(accessUser({ access_id: code }))
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

    Notiflix.Notify.success(Notification.successfullyLogIned)
    navigate(AppRoute.SUCCESS)

    resetInputs()
  }

  const isValidCode = (code) => {
    return patterns.code.test(code)
  }

  return (
    <Wrapper>
      <Logo />
      <Title text={titles.loginByCode} />
      <Socials />
      <Line>or</Line>
      <Input
        type="code"
        placeholder="Enter code"
        mb="30px"
        validateMessage={messages.requiredCode}
        setValue={(value) => setCode(value)}
        value={code}
        setReset={(value) => setReset(value)}
        reset={reset}
        setMessage={(value) => setMessage(value)}
        message={message}
      />
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
        <LinkStyled to={AppRoute.SIGN_UP} data-mb="0px">
          Sign up
        </LinkStyled>
      </Helper>
      <Loading isVisible={isLoadingWithLogIn} />
    </Wrapper>
  )
}

export default LoginByAccessIdForm
