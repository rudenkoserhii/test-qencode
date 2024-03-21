import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Section } from 'components/LayOut/LayOut.styled'
import { Wrapper } from 'pages/Home/Home.styled'
import { Button, Logo } from 'components/common'
import theme from 'styles/theme'

const Home = () => {
  const navigate = useNavigate()
  return (
    <Section className="scale-in-center">
      <Wrapper>
        <Logo />
        <Button
          radius={theme.radii.medium}
          width="400"
          text="Sign up to Qencode"
          bg={theme.colors.primary}
          color={theme.colors.white}
          onClick={() => navigate('/auth/signup')}
        />
        <Button
          radius={theme.radii.medium}
          width="400"
          text="Log in to Qencode by E-mail"
          bg={theme.colors.primary}
          color={theme.colors.white}
          onClick={() => navigate('/auth/login')}
        />
        <Button
          radius={theme.radii.medium}
          width="400"
          text="Log in to Qencode by code"
          bg={theme.colors.primary}
          color={theme.colors.white}
          onClick={() => navigate('/auth/login-by-access-id')}
        />
      </Wrapper>
    </Section>
  )
}

export default Home
