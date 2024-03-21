import styled from 'styled-components'
import { ReactComponent as Reset } from 'assets/icons/reset.svg'
import { ReactComponent as Eye } from 'assets/icons/eye.svg'
import { ReactComponent as EyeSlash } from 'assets/icons/eye-slash.svg'

export const Placeholder = styled.div`
  position: absolute;

  top: 50%;
  left: ${(props) => props.theme.space[6]}px;

  transform: translateY(-50%);

  width: auto;
  height: auto;
  padding: ${(props) => props.theme.space[3]}px;

  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: 1.33;
  color: ${(props) => props.theme.colors.placeholder};
  background-color: ${(props) => props.theme.colors.white};

  transition: ${(props) => props.theme.animation.hover};
`
export const Span = styled.span`
  position: absolute;
  bottom: -16px;
  left: 50%;

  transform: translateX(-50%);

  font-size: 10px;
  color: var(--text-error);
`

export const IconReset = styled(Reset)`
  display: block;

  width: ${(props) => props.theme.space[8]}px;
  height: ${(props) => props.theme.space[8]}px;

  cursor: pointer;

  fill: ${(props) => props.theme.colors.eye};

  transition: ${(props) => props.theme.animation.hover};

  &:hover,
  &:focus {
    fill: ${(props) => props.theme.colors.placeholder};
    transition: ${(props) => props.theme.animation.hover};
  }
`

export const IconEyeSlash = styled(EyeSlash)`
  display: block;

  width: ${(props) => props.theme.space[8]}px;
  height: ${(props) => props.theme.space[8]}px;

  cursor: pointer;

  fill: ${(props) => props.theme.colors.eye};

  transition: ${(props) => props.theme.animation.hover};

  &:hover,
  &:focus {
    fill: ${(props) => props.theme.colors.placeholder};
    transition: ${(props) => props.theme.animation.hover};
  }
`
export const IconEye = styled(Eye)`
  display: block;

  width: ${(props) => props.theme.space[8]}px;
  height: ${(props) => props.theme.space[8]}px;

  cursor: pointer;

  fill: ${(props) => props.theme.colors.eye};

  transition: ${(props) => props.theme.animation.hover};

  &:hover,
  &:focus {
    fill: ${(props) => props.theme.colors.placeholder};
    transition: ${(props) => props.theme.animation.hover};
  }
`

export const Button = styled.button`
  all: unset;
  position: absolute;

  top: 50%;
  right: ${(props) => props.theme.space[props['data-alone'] ? 5 : 13]}px;
  transform: translateY(-50%);
`
export const ButtonPassword = styled.button`
  all: unset;
  position: absolute;

  top: 50%;
  right: ${(props) => props.theme.space[5]}px;
  transform: translateY(-50%);
`

export const LabelStyled = styled.label`
  position: relative;

  width: ${(props) => props.theme.space[19]}px;
  height: ${(props) => props.theme.space[14]}px;
  margin-bottom: ${(props) => props['data-mb']};
`

export const InputStyled = styled.input`
  width: 100%;
  height: 100%;
  border: ${(props) => props.theme.border.button};
  border-radius: ${(props) => props.theme.radii.normal};

  padding: 14px 50px 14px 15px;

  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: 1.33;

  color: ${(props) => props.theme.colors.textPrimary};

  /* background-color: ${(props) => props.theme.colors.white}; */

  transition: ${(props) => props.theme.animation.hover};

  &:focus,
  &:focus-visible {
    outline: ${(props) => props.theme.border.inputFocus};
    border: ${(props) => props.theme.border.inputFocus};

    transition: ${(props) => props.theme.animation.hover};

    & ~ ${Placeholder} {
      top: -${(props) => props.theme.space[8]}px;
      left: 0;

      transform: translateY(0) scale(0.8);

      transition: ${(props) => props.theme.animation.hover};
    }
  }
`
