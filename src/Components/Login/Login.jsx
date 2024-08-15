import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import LoginForm from './LoginForm.jsx'
import { UserContext } from '../../UserContext.jsx'
import styles from './Login.module.css'

const Login = () => {
  const {login} = React.useContext(UserContext);

  if(login === true) return <Navigate to='/conta' />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path={'/'} element={<LoginForm />} />
          <Route path={'criar'} element={<LoginCreate />} />
          <Route path={'perdeu'} element={<LoginPasswordLost />} />
          <Route path={'restar'} element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
