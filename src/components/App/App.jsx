import React, { useEffect, lazy } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { LayOut } from 'components/LayOut/LayOut'
import { refreshUser } from 'store/auth/operations'
import { useAuth } from 'hooks'
import { Loading } from 'components/common/Loading/Loading'
import Notiflix from 'notiflix'

const HomePage = lazy(() => import('pages/Home/Home'))
const Login = lazy(() => import('pages/Login/Login'))
const LoginByAccessId = lazy(() => import('pages/LoginByAccessId/LoginByAccessId'))
const ForgotPassword = lazy(() => import('pages/ForgotPassword/ForgotPassword'))
const ResetPassword = lazy(() => import('pages/ResetPassword/ResetPassword'))

const App = () => {
  const dispatch = useDispatch()
  const { isRefreshing, token } = useAuth()

  useEffect(() => {
    ;(() => {
      if (token) {
        try {
          const response = dispatch(refreshUser())
          if (response.meta.requestStatus === 'rejected') {
            Notiflix.Notify.failure(`Something went wrong - ${response.payload}!`)
            return
          }
        } catch (error) {
          Notiflix.Notify.failure(`Something went wrong - ${error.message}`)
        }
      }
    })()
  }, [dispatch, token])

  return isRefreshing ? (
    <Loading isVisible={true} />
  ) : (
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/login-by-access-id" element={<LoginByAccessId />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  )
}

export default App
