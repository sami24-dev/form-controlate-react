import React from 'react'
import google from '../../assets/Google-Logo.png'
import apple from '../../assets/apple.svg'
import ButtonForm from './ButtonForm'

function HeaderForm () {
  return (
    <header className='header'>
        <h1 className='header__title'>Create your account</h1>
        <ButtonForm icon={google} define="Sign up with Google"/>
        <ButtonForm icon={apple} define="Sign up with Apple"/>
    </header>
  )
}

export default HeaderForm