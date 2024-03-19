import React from 'react'
// import { Button } from 'components/common'
// import theme from 'styles/theme'
import { Section } from 'components/LayOut/LayOut.styled'
import LoginForm from 'components/LoginForm/LoginForm'

const Login = () => (
  <Section className="scale-in-center">
    <LoginForm />
    {/* <Button
      width="400"
      text="Log in to Qencode"
      bg={theme.colors.primary}
      color={theme.colors.white}
      onClick={() => console.log('click')}
    /> */}
  </Section>
)

export default Login
