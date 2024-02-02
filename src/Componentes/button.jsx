import React from 'react'
import "./button.css"
const button = ({text , onClick}) => {
  return (
    <button className='btn' onClick={onClick}>
    {text}
    </button>
  )
}

export default button