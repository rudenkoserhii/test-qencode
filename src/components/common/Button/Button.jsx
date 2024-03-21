import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled, Span, Wrapper } from 'components/common/Button/Button.styled'

export const Button = ({ radius, border, width, text, bg, color, onClick, Icon, mb }) => {
  return (
    <ButtonStyled
      type="button"
      data-border={border}
      data-width={width}
      data-color={color}
      data-radius={radius}
      data-bg={bg}
      data-mb={mb}
      onClick={() => onClick()}
    >
      <Wrapper>
        {Icon && <Icon />}
        <Span>{text}</Span>
      </Wrapper>
    </ButtonStyled>
  )
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  radius: PropTypes.string.isRequired,
  mb: PropTypes.string,
  width: PropTypes.string,
  border: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  Icon: PropTypes.elementType,
}
