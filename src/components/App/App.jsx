import React, { useEffect, lazy, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { LayOut } from 'components/LayOut/LayOut'
import { refreshUser } from 'store/auth/operations'
import { useAuth } from 'hooks'
import { Loading } from 'components/common/Loading/Loading'
import Notiflix from 'notiflix'
import { AppRoute, Notification } from 'enums'

const Home = lazy(() => import('pages/Home/Home'))
const LogIned = lazy(() => import('pages/LogIned/LogIned'))
const OAuth = lazy(() => import('pages/OAuth/OAuth'))
const SignUp = lazy(() => import('pages/SignUp/SignUp'))
const Login = lazy(() => import('pages/Login/Login'))
const LoginByAccessId = lazy(() => import('pages/LoginByAccessId/LoginByAccessId'))
const SetPassword = lazy(() => import('pages/SetPassword/SetPassword'))
const ResetPassword = lazy(() => import('pages/ResetPassword/ResetPassword'))

const App = () => {
  const [authCode, setAuthCode] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isRefreshing, accessTokenExpire, refreshTokenExpire } = useAuth()
  const {
    HOME,
    RANDOM,
    SUCCESS,
    OAUTH,
    SIGN_UP,
    LOG_IN_BY_CREDENTIALS,
    LOGIN_BY_CODE,
    RESTORE_PASSWORD,
    RESET_PASSWORD,
  } = AppRoute

  useEffect(() => {
    const receiveMessage = (event) => {
      if (event.origin !== window.origin) return

      if (event.data.code) {
        setAuthCode(event.data.code)
      }
    }

    window.addEventListener('message', receiveMessage)

    return () => {
      window.removeEventListener('message', receiveMessage)
    }
  }, [])

  useEffect(() => {
    if (authCode) {
      navigate(SUCCESS)
    }
  }, [SUCCESS, authCode, navigate])

  useEffect(() => {
    ;(async () => {
      if (accessTokenExpire > Date.now() || refreshTokenExpire > Date.now()) {
        try {
          const response = await dispatch(refreshUser())
          if (response.meta.requestStatus === 'rejected') {
            Notiflix.Notify.failure(`${Notification.rejectedWithError} - ${response.payload}!`)
            return
          }
        } catch (error) {
          Notiflix.Notify.failure(`${Notification.catchError} - ${error.message}`)
        }
      }
    })()
  }, [accessTokenExpire, dispatch, refreshTokenExpire])

  return isRefreshing ? (
    <Loading isVisible={true} />
  ) : (
    <Routes>
      <Route path={HOME} element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path={RANDOM} element={<Home />} />
        <Route path={SUCCESS} element={<LogIned />} />
        <Route path={OAUTH} element={<OAuth />} />
        <Route path={SIGN_UP} element={<SignUp />} />
        <Route path={LOG_IN_BY_CREDENTIALS} element={<Login />} />
        <Route path={LOGIN_BY_CODE} element={<LoginByAccessId />} />
        <Route path={RESTORE_PASSWORD} element={<SetPassword />} />
        <Route path={RESET_PASSWORD} element={<ResetPassword />} />
      </Route>
    </Routes>
  )
}

export default App
