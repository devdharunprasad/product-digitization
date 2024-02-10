import React from 'react'
import ErrorLogin from './error'
import RegisterForm from './componetns/RegisterForm'

const LoginPage = () => {
  return (
    <section className='h-screen flex flex-col justify-center items-center'>
        <RegisterForm/>
    </section>
  )
}

export default LoginPage