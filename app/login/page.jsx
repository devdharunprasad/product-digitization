import React from 'react'
import LoginForm from './componetns/LoginForm'
import ErrorLogin from './error'

const LoginPage = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center'>
        <LoginForm/>
    </section>
  )
}

export default LoginPage