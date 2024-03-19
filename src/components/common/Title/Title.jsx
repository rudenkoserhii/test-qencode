import React from 'react'
import PropTypes from 'prop-types'
import { TitleStyled } from 'components/common/Title/Title.styled'

export const Title = ({ text }) => {
  return <TitleStyled>{text}</TitleStyled>
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}
