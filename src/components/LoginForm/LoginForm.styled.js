import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Line = styled.p`
  position: relative;

  display: inline-block;

  color: ${(props) => props.theme.colors.lineText};

  font-size: ${(props) => props.theme.fontSizes.extraSmall};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: 1.33;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;

  width: ${(props) => props.theme.space[8]}px;
  margin-bottom: ${(props) => props.theme.space[11]}px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: calc(100% + 5px);
    transform: translateY(-50%);

    width: 186px;
    height: 1px;
    background-color: ${(props) => props.theme.colors.lineBrake};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: calc(100% + 5px);
    transform: translateY(-50%);

    width: 186px;
    height: 1px;
    background-color: ${(props) => props.theme.colors.lineBrake};
  }

  @media screen and (min-width: 1280px) {
  }
`
export const Helper = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  line-height: 1.423;

  text-align: center;

  margin-top: ${(props) => props.theme.space[9]}px;
`
export const Span = styled.span`
  color: ${(props) => props.theme.colors.textPrimary};

  margin-right: ${(props) => props.theme.space[2]}px;
`
export const LinkStyled = styled(Link)`
  color: ${(props) => props.theme.colors.linkText};
`
