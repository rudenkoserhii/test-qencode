import React, { useEffect, lazy } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { LayOut } from 'components/LayOut/LayOut'
import { refreshUser } from 'store/auth/operations'
import { useAuth } from 'hooks'
import { Loading } from 'components/common/Loading/Loading'
import Notiflix from 'notiflix'

const Login = lazy(() => import('pages/LoginPage/LoginPage'))
const ForgotPassword = lazy(() => import('pages/ForgotPasswordPage/ForgotPasswordPage'))
const ResetPassword = lazy(() => import('pages/ResetPasswordPage/ResetPasswordPage'))

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
      <Route path="/" redirectTo="/login" element={<LayOut />}>
        <Route index redirectTo="/login" element={<Login />} />
        <Route path="*" redirectTo="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>
    </Routes>
  )
}

export default App
