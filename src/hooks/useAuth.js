import { useSelector } from 'react-redux'
import { selectIsLoggedIn, selectIsRefreshing, selectAccessToken } from 'store/auth/selectors'

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const isRefreshing = useSelector(selectIsRefreshing)
  const accessToken = useSelector(selectAccessToken)

  return {
    isLoggedIn,
    isRefreshing,
    accessToken,
  }
}
