import React from 'react'
import { Wrapper } from 'components/common/Socials/Socials.styled'
import { Button } from 'components/common'
import theme from 'styles/theme'
import { ReactComponent as Google } from 'assets/icons/google.svg'
import { ReactComponent as Github } from 'assets/icons/github.svg'

export const Socials = () => {
  return (
    <Wrapper>
      <Button
        radius={theme.radii.normal}
        width="190"
        border={theme.border.button}
        text="Google"
        bg={theme.colors.white}
        color={theme.colors.primary}
        onClick={() => console.log('Google')}
        Icon={Google}
      />
      <Button
        radius={theme.radii.normal}
        width="190"
        border={theme.border.button}
        text="Github"
        bg={theme.colors.white}
        color={theme.colors.primary}
        onClick={() => console.log('Github')}
        Icon={Github}
      />
    </Wrapper>
  )
}
