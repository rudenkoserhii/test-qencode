import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from 'components/common/Socials/Socials.styled'
import { Button } from 'components/common'
import theme from 'styles/theme'
import { ReactComponent as Google } from 'assets/icons/google.svg'
import { ReactComponent as Github } from 'assets/icons/github.svg'
import * as ls from 'local-storage'

const GOOGLE_CLIENT_ID = process.env.REACT_APP_CLIENT_GOOGLE_ID || ''
const GITHUB_CLIENT_ID = process.env.REACT_APP_CLIENT_GITHUB_ID || ''
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI || 'http://localhost:3000/oauth'
const MAX_OPEN_POPUP = 30000

const scopeAsParam = (scopes) => {
  return scopes.reduce((rev, curr) => `${rev}+${curr}`)
}

export const Socials = () => {
  const [googleCode, setGoogleCode] = useState('')
  const [githubCode, setGithubCode] = useState('')

  const navigate = useNavigate()

  const hasAnyToken = !!githubCode || !!googleCode

  console.log(hasAnyToken)
  const openDialog = (url) => {
    const popup = window.open(url, '', 'width=700, height=700,fullscreen=no')
    let openDuration = 0

    const promise = new Promise((resolve, reject) => {
      const checking = setInterval(() => {
        const response = ls.get('oauth-response')

        if (response) {
          if (response.isError) {
            reject(new Error('Access denied'))
          } else {
            resolve(response)
          }

          clearInterval(checking)
          ls.remove('oauth-response')
        }

        if (openDuration >= MAX_OPEN_POPUP) {
          popup?.close()
          reject(new Error('Timeout'))
          clearInterval(checking)
        }
        openDuration += 1000

        if (popup?.closed) {
          reject(new Error('Closed'))
          clearInterval(checking)
        }
      }, 1000)
    })

    window.onbeforeunload = () => {
      console.log('onbefore')
      navigate('/success')
    }
    return promise
  }

  const handleGoogleLogin = () => {
    const state = JSON.stringify({
      vendor: 'google',
    })

    const scopes = [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'openid',
    ]

    const dialogUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth')
    const dialogUrlParam = dialogUrl.searchParams
    dialogUrlParam.append('scope', scopeAsParam(scopes))
    dialogUrlParam.append('include_granted_scopes', 'true')
    dialogUrlParam.append('response_type', 'code')
    dialogUrlParam.append('state', state)
    dialogUrlParam.append('redirect_uri', REDIRECT_URI)
    dialogUrlParam.append('client_id', GOOGLE_CLIENT_ID)
    const url = decodeURIComponent(dialogUrl.toString())

    openDialog(url)
      .then((response) => {
        console.log(response)
        setGoogleCode(response.success?.code || '')
      })
      .catch(() => {
        setGoogleCode('')
      })
  }

  const handleGitHubLogin = () => {
    const state = JSON.stringify({
      vendor: 'github',
    })

    const scopes = ['read:user', 'user:email']

    const dialogUrl = new URL('https://github.com/login/oauth/authorize')
    const dialogUrlParam = dialogUrl.searchParams
    dialogUrlParam.append('client_id', GITHUB_CLIENT_ID)
    dialogUrlParam.append('redirect_uri', REDIRECT_URI)
    dialogUrlParam.append('allow_signup', 'true')
    dialogUrlParam.append('state', state)
    dialogUrlParam.append('scope', scopeAsParam(scopes))
    const url = decodeURIComponent(dialogUrl.toString())

    openDialog(url)
      .then((response) => {
        console.log(response)
        setGithubCode(response.success?.code || '')
      })
      .catch(() => {
        setGithubCode('')
      })
  }

  return (
    <Wrapper>
      <Button
        radius={theme.radii.normal}
        width="190"
        border={theme.border.button}
        text="Google"
        bg={theme.colors.white}
        color={theme.colors.primary}
        onClick={handleGoogleLogin}
        Icon={Google}
      />
      <Button
        radius={theme.radii.normal}
        width="190"
        border={theme.border.button}
        text="Github"
        bg={theme.colors.white}
        color={theme.colors.primary}
        onClick={handleGitHubLogin}
        Icon={Github}
      />
    </Wrapper>
  )
}
