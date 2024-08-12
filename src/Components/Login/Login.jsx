import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import LoginForm from './LoginForm.jsx'

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<LoginForm />} />
        <Route path={'criar'} element={<LoginCreate />} />
        <Route path={'perdeu'} element={<LoginPasswordLost />} />
        <Route path={'restar'} element={<LoginPasswordReset />} />
      </Routes>
    </div>
  )
}

export default Login
