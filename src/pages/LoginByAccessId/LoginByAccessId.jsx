import React from 'react'
import { Button } from 'components/common'
import theme from 'styles/theme'

const LoginByAccessId = () => (
  <Button
    width="400"
    text="Log in to Qencode"
    bg={theme.colors.primary}
    color={theme.colors.white}
    onClick={() => console.log('click')}
  />
)

export default LoginByAccessId
