import React from 'react'
// import authApi from 'api/authApi'
import { Wrapper, Line, Helper, Span, LinkStyled } from 'components/LoginForm/LoginForm.styled'
import { Button, Logo, Socials, Title } from 'components/common'
import { titles } from 'constants'
import theme from 'styles/theme'
import { AppRoute } from 'enums'

function LoginForm() {
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const userData = await authApi.login(email, password)
  //     console.log('Login successful:', userData)
  //     // Handle successful login (e.g., update state, redirect user)
  //   } catch (error) {
  //     console.error('Login failed:', error.message)
  //     // Handle login failure (e.g., display error message)
  //   }
  // }

  return (
    <Wrapper>
      <Logo />
      <Title text={titles.login} />
      <Socials />
      <Line>or</Line>
      {/* <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form> */}
      <Button
        radius={theme.radii.medium}
        width="400"
        text="Log in to Qencode"
        bg={theme.colors.primary}
        color={theme.colors.white}
        onClick={() => console.log('click')}
      />
      <Helper>
        <Span>Is your company new to Qencode?</Span>
        <LinkStyled to={AppRoute.SIGN_UP_PAGE}>Sign up</LinkStyled>
      </Helper>
    </Wrapper>
  )
}

export default LoginForm
