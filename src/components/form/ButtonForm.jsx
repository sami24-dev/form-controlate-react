import React from 'react'

function ButtonForm(props) {
  return (
    <button type='submit' className='button'>
        <img className='button__icon' src={props.icon} alt="" />
        <h3 className='button__title'><a href="#">{props.define}</a></h3>
    </button>
  )
}

export default ButtonForm