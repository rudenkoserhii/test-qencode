import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import * as ls from 'local-storage'

const OAuth = () => {
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const state = JSON.parse(searchParams.get('state') || '')
    const vendor = state.vendor
    const code = searchParams.get('code') || ''
    const response = {
      vendor,
    }
    if (code) {
      const successResponse = {
        ...response,
        success: {
          code,
        },
      }

      ls.set('oauth-response', successResponse)

      window.opener.postMessage({ code }, window.origin)
      window.close()
      return
    }

    const responseError = {
      ...response,
      isError: true,
    }
    ls.set('oauth-response', responseError)

    window.close()
  }, [searchParams])

  return <div>Redirecting...</div>
}

export default OAuth
