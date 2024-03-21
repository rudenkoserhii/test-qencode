import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'

export const LogoStyled = styled(Logo)`
  display: block;

  margin-left: auto;
  margin-right: auto;

  transition: ${(props) => props.theme.animation.hover};

  &:hover,
  &:focus {
    filter: ${(props) => props.theme.filter.hover};

    transition: ${(props) => props.theme.animation.hover};
  }

  @media screen and (min-width: 1280px) {
  }
`
export const LinkStyled = styled(Link)`
  display: block;

  margin-bottom: ${(props) => props.theme.space[16]}px;

  @media screen and (min-width: 1280px) {
  }
`
