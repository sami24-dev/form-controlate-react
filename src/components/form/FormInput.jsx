import React from 'react'

function FormInput(props) {
  return (
    <div className='form__wraper'>
        <label htmlFor={props.define} className='form__wraper-label'>{props.description}</label>
        <input 
        className='form__wraper-input' 
        type={props.type} 
        id={props.define}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        required
        onChange={props.event}
        />
        <img className='form__wraper-img' src={props.icon} alt="" />
    </div>
  )
}

export default FormInput