import React, { useEffect, lazy } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { LayOut } from 'components/LayOut/LayOut'
import { refreshUser } from 'store/auth/operations'
import { useAuth } from 'hooks'
import { Loading } from 'components/common/Loading/Loading'
import Notiflix from 'notiflix'
import { AppRoute, Notification } from 'enums'

const Home = lazy(() => import('pages/Home/Home'))
const LogIned = lazy(() => import('pages/LogIned/LogIned'))
const SignUp = lazy(() => import('pages/SignUp/SignUp'))
const Login = lazy(() => import('pages/Login/Login'))
const LoginByAccessId = lazy(() => import('pages/LoginByAccessId/LoginByAccessId'))
const SetPassword = lazy(() => import('pages/SetPassword/SetPassword'))
const ResetPassword = lazy(() => import('pages/ResetPassword/ResetPassword'))

const App = () => {
  const dispatch = useDispatch()
  const { isRefreshing, accessToken } = useAuth()

  useEffect(() => {
    ;(() => {
      if (accessToken) {
        try {
          const response = dispatch(refreshUser())
          if (response.meta.requestStatus === 'rejected') {
            Notiflix.Notify.failure(`${Notification.rejectedWithError} - ${response.payload}!`)
            return
          }
        } catch (error) {
          Notiflix.Notify.failure(`${Notification.catchError} - ${error.message}`)
        }
      }
    })()
  }, [dispatch, accessToken])

  const {
    HOME,
    RANDOM,
    SUCCESS,
    SIGN_UP,
    LOG_IN_BY_CREDENTIALS,
    LOGIN_BY_CODE,
    RESTORE_PASSWORD,
    RESET_PASSWORD,
  } = AppRoute

  return isRefreshing ? (
    <Loading isVisible={true} />
  ) : (
    <Routes>
      <Route path={HOME} element={<LayOut />}>
        <Route index element={<Home />} />
        <Route path={RANDOM} element={<Home />} />
        <Route path={SUCCESS} element={<LogIned />} />
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
