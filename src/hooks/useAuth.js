import { useSelector } from 'react-redux'
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectAccessToken,
  selectRefreshToken,
  selectAccessTokenExpire,
  selectRefreshTokenExpire,
} from 'store/auth/selectors'

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isRefreshing = useSelector(selectIsRefreshing)
  const accessToken = useSelector(selectAccessToken)
  const refreshToken = useSelector(selectRefreshToken)
  const accessTokenExpire = useSelector(selectAccessTokenExpire)
  const refreshTokenExpire = useSelector(selectRefreshTokenExpire)

  return {
    isLoggedIn,
    isRefreshing,
    accessToken,
    refreshToken,
    accessTokenExpire,
    refreshTokenExpire,
  }
}
