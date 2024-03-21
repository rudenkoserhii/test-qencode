import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Wrapper } from 'components/LayOut/LayOut.styled'

export const LayOut = () => (
  <Wrapper>
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
  </Wrapper>
)
