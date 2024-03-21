export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const selectIsRefreshing = (state) => state.auth.isRefreshing
export const selectIsLoading = (state) => state.auth.isLoading
export const selectAccessToken = (state) => state.auth.accessToken
export const selectRefreshToken = (state) => state.auth.refreshToken
export const selectAccessTokenExpire = (state) => state.auth.accessTokenExpire
export const selectRefreshTokenExpire = (state) => state.auth.refreshTokenExpire
