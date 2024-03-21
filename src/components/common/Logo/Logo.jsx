import React from 'react'
import { LogoStyled, LinkStyled } from 'components/common/Logo/Logo.styled'

export const Logo = () => (
  <LinkStyled to={'/'}>
    <LogoStyled />
  </LinkStyled>
)
