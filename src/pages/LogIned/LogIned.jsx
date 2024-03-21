import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Notiflix from 'notiflix'
import { Button, Logo, Title } from 'components/common'
import { Section } from 'components/LayOut/LayOut.styled'
import { titles } from 'constants'
import { AppRoute, Notification } from 'enums'
import { Wrapper } from 'pages/LogIned/LogIned.styled'
import { logOut } from 'store/auth/operations'
import theme from 'styles/theme'

const LogIned = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = async () => {
    try {
      const response = await dispatch(logOut())
      if (response.error) {
        Notiflix.Notify.failure(`${Notification.rejectedWithError} - ${response.payload}!`)

        return
      }
    } catch (error) {
      Notiflix.Notify.failure(`${Notification.catchError} - ${error.message}`)
    }

    Notiflix.Notify.success(Notification.successfullyLogOuted)
    navigate(AppRoute.HOME)
  }

  return (
    <Section className="scale-in-center">
      <Wrapper>
        <Logo />
        <Title text={titles.success} />
        <Button
          radius={theme.radii.medium}
          width="400"
          text="Log out"
          mb="30px"
          bg={theme.colors.primary}
          color={theme.colors.white}
          onClick={handleClick}
        />
        <Button
          radius={theme.radii.medium}
          width="400"
          text="Create new password"
          bg={theme.colors.primary}
          color={theme.colors.white}
          onClick={() => navigate(AppRoute.RESTORE_PASSWORD)}
        />
      </Wrapper>
    </Section>
  )
}

export default LogIned
