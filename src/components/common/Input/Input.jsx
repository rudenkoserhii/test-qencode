import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  InputStyled,
  Span,
  LabelStyled,
  LabelText,
  Button,
  ButtonPassword,
  IconReset,
  IconEye,
  IconEyeSlash,
  Placeholder,
} from 'components/common/Input/Input.styled'
import { nanoid } from '@reduxjs/toolkit'

export const Input = ({
  type,
  placeholder,
  mb,
  validateMessage,
  setValue,
  value,
  reset,
  setReset,
  message,
  setMessage,
  label,
}) => {
  const [isShownPassword, setIsShownPassword] = useState(false)
  const [move, setMove] = useState(false)

  const inputId = nanoid()

  const inputType = () => {
    if (type === 'password') {
      return isShownPassword ? 'text' : 'password'
    }
    if (type === 'code') {
      return 'text'
    }

    return 'email'
  }

  const handleChange = ({ target }) => {
    setValue(target.value)
    setMessage(false)

    if (target.value.length > 0) {
      setReset(true)
    } else {
      setReset(false)
    }
  }

  const handleFocus = () => {
    setMove(true)
    if (value.length > 0) {
      setReset(true)
    }
  }

  const handleClickReset = () => {
    setMessage(false)
    setValue('')
    setReset(false)
    setMove(false)
  }

  const handleBlur = () => {
    if (value.length === 0) {
      setMove(false)
    }
  }

  return (
    <>
      {label && <LabelText>{label}</LabelText>}
      <LabelStyled htmlFor={inputId} data-mb={mb}>
        <InputStyled
          autoComplete="one-time-code"
          id={inputId}
          type={inputType()}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Placeholder data-move={move}>{placeholder}</Placeholder>

        {type === 'password' && (
          <ButtonPassword type="button" onClick={() => setIsShownPassword(!isShownPassword)}>
            {isShownPassword ? (
              <IconEyeSlash className="flip-in-hor-bottom" />
            ) : (
              <IconEye className="flip-in-hor-bottom" />
            )}
          </ButtonPassword>
        )}

        {reset && (
          <Button
            type="button"
            onClick={handleClickReset}
            data-alone={type === 'email' || type === 'code'}
          >
            <IconReset className="swirl-in-fwd" />
          </Button>
        )}
        {message && <Span>{validateMessage}</Span>}
      </LabelStyled>
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  mb: PropTypes.string.isRequired,
  validateMessage: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setReset: PropTypes.func.isRequired,
  reset: PropTypes.bool.isRequired,
  setMessage: PropTypes.func.isRequired,
  message: PropTypes.bool.isRequired,
}
