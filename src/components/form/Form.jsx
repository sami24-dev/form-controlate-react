import { useState } from 'react'
import look from '../../assets/cerrar.svg'
import en from '../../assets/en.svg'
import HeaderForm from "./HeaderForm";
import FormInput from './FormInput'
import FooterForm from './FooterForm'

function Form() {
    const [form, setForm] = useState({
      email: '',
      password: '',
      repeatPassword: ''
    })
    const {email, password, repeatPassword }= form
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(form)
    }
    const handleChange = (e) => {
     setForm({...form, [e.target.name]: e.target.value})
    }
  return (
    <form className='form' onSubmit={handleSubmit}>
        <HeaderForm />
        <FormInput type='email' name="email" value={email} event={handleChange} define="email" icon={en} description='email' placeholder='Your email'/>
        <FormInput type='password' name="password" value={password} event={handleChange} define="password" icon={look} description='password' placeholder='Your password'/>
        <FormInput type='password' name="repeatPassword" value={repeatPassword} event={handleChange} define="repeatPassword" icon={look} description='repeat password' placeholder='Repeat password'/>
        <FooterForm />
    </form>
  )
}

export default Form