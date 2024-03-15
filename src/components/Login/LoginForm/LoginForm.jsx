import React, { useState } from 'react'
import authApi from 'api/authApi'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userData = await authApi.login(email, password)
      console.log('Login successful:', userData)
      // Handle successful login (e.g., update state, redirect user)
    } catch (error) {
      console.error('Login failed:', error.message)
      // Handle login failure (e.g., display error message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm
