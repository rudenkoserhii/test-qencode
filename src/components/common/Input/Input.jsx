import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  InputStyled,
  Span,
  LabelStyled,
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
}) => {
  const [isShownPassword, setIsShownPassword] = useState(false)

  const inputId = nanoid()

  const inputType = () => {
    if (type === 'password') {
      return isShownPassword ? 'text' : 'password'
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
    if (value.length > 0) {
      setReset(true)
    }
  }

  const handleClickReset = () => {
    setMessage(false)
    setValue('')
    setReset(false)
  }

  return (
    <LabelStyled htmlFor={inputId} data-mb={mb}>
      <InputStyled
        id={inputId}
        type={inputType()}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      {value.length === 0 && <Placeholder>{placeholder}</Placeholder>}

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
        <Button type="button" onClick={handleClickReset} data-alone={type === 'email'}>
          <IconReset className="swirl-in-fwd" />
        </Button>
      )}
      {message && <Span>{validateMessage}</Span>}
    </LabelStyled>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  mb: PropTypes.string.isRequired,
  validateMessage: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setReset: PropTypes.func.isRequired,
  reset: PropTypes.bool.isRequired,
  setMessage: PropTypes.func.isRequired,
  message: PropTypes.bool.isRequired,
}
